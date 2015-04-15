/*!
 * ZUI - v1.2.1 - 2015-04-15
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2015 cnezsoft.com; Licensed MIT
 */

(function(window, $)
{
    'use strict';
    // Polyfill
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if (position === undefined || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.lastIndexOf(searchString, position) === position;
        };
    }

    if (!String.prototype.includes) {
        String.prototype.includes = function() {
            return String.prototype.indexOf.apply(this, arguments) !== -1;
        };
    }

    var saveTraffic = false;
    var debug = 1;
    if(debug) console.error("DEBUG ENABLED.");

    var chapters = {
        start: {col: 1}, 
        basic: {col: 1}, 
        control: {col: 2}, 
        component: {col: 2}, 
        javascript: {col: 3}, 
        view: {col: 3}
    };
    var LAST_RELOAD_ANIMATE_ID = 'lastReloadAnimate';
    var LAST_QUERY_ID = 'LAST_QUERY_ID';
    var INDEX_JSON = 'index.json';
    var UNDEFINED = undefined;
    var dataset = {
        'index.json': null
    };
    if(debug) window.dataset = dataset;

    var $body, $window, $grid, $sectionTemplate,
        $queryInput, $chapters, $chaptersCols,
        $choosedSection,
        $header, $sections, $chapterHeadings; // elements

    var loadData = function(url, callback, forceLoad) {
        var data = dataset[url];
        var isFirstLoad = data === null;
        if(isFirstLoad) {
            data = $.store.get(url, null);
            dataset[url] = data;
            if(data !== null) {
                if(debug) {
                    console.log('Load data from storage: ', url, '=', data);
                }
                callback(data);
            }
        }

        if(data === null || forceLoad || isFirstLoad || (!saveTraffic)) {
            var dataType = url.endsWith('.json') ? 'json' : 'html';
            $.get(url, function(remoteData){
                if(!debug && data !== null) {
                    if(dataType === 'json' && $.isPlainObject(remoteData) && data.version && remoteData.version && remoteData.version === data.version) return;
                    if(dataType === 'html' && data === remoteData) return;
                }
                dataset[url] = remoteData;
                if(debug) {
                    console.log('Load data from remote: ', url, '=', remoteData);
                }
                callback(remoteData);
                $.store.set(url, remoteData);
            }, dataType);
        }
    };

    var eachSection = function(callback, eachChapterCallback) {
        var docIndex = dataset[INDEX_JSON];
        if (!docIndex) {
            console.error("Document index is empty.");
            return false;
        };

        $.each(chapters, function(chapterName, chapter){
            if(!docIndex.chapters[chapterName]) return;
            $.extend(chapter, docIndex.chapters[chapterName]);
            var sections = chapter.sections;
            var data = null;
            if(eachChapterCallback) {
                data = eachChapterCallback(chapter, sections);
                if(data === false) return false;
            }
            $.each(sections, function(i, section){
                if(callback(chapter, section, data) === false) return false;
            });
        });
        return true;
    }

    var displaySection = function() {
        if(eachSection(function(chapter, section, $sectionList){
            var chapterName = chapter.id;
            var $tpl = $sectionTemplate.clone().attr('id', 'section-' + chapterName + '-' + section.id);
            $tpl.attr('data-id', section.id);
            var $head = $tpl.children('.card-heading');
            $head.find('.name').text(section.name);
            $head.children('.desc').text(section.desc);
            var $icon = $head.children('.icon');
            if (section.icon === undefined || section.icon === null || section.icon === "") {
                section.icon = section.name.substr(0, 1).toUpperCase();
            }
            if (section.icon.indexOf('icon-') === 0) {
                $icon.addClass(section.icon);
            } else {
                $icon.addClass('text-icon').text(section.icon);
            }
            var $topics = $tpl.find('.topics');
            if (section.topics && section.topics.length) {
                for (var tName in section.topics) {
                    var topic = section.topics[tName];
                    topic.id = tName;
                    $topics.append('<li data-id="' + tName + '">' + topic.name + '</li>');
                }
            } else {
                $topics.remove('.card-content');
                $tpl.addClass('without-topics');
            }
            $sectionList.append($tpl.addClass('show'));
        }, function(chapter, sections){
            var $sectionList = chapter.$sections;
            $sectionList.children().remove();
            return $sectionList;
        })) {
            clearTimeout($grid.data(LAST_RELOAD_ANIMATE_ID));
            $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function(){
                $sections = $grid.find('.section').addClass('in');
                $chapterHeadings.addClass('in');
            }, 200));
        } else if(debug) {
            console.error("Display sections failed.");
        }
    };

    var chooseSection = function($section) {
        $sections.removeClass('choosed open');
        if($section && $section.hasClass('section')) {
            $choosedSection = $section.addClass('choosed open');
        }
    }

    var query = function(keyString) {
        if(!$sections) return;

        if($queryInput.data('queryString') !== keyString) {
            $queryInput.data('queryString', keyString).val(keyString);
            $grid.css('min-height', $grid.height());
        }

        if(keyString === UNDEFINED || keyString === null || !keyString.length) {
            $chaptersCols.removeClass('hide');
            $chapters.removeClass('hide');
            $sections.addClass('show');
            $chapterHeadings.addClass('show');
            $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function(){
                $sections.addClass('in');
                $chapterHeadings.addClass('in');
            }, 20));
            return;
        }

        var keys = [];
        $.each(keyString.split(' '), function(i, key){
            key = $.trim(key).toLowerCase();
            var keyOption = {origin: key};
            if(key.startsWith('#')) {
                keyOption.type = 'id';
                keyOption.val = key.substr(1);
            } else if(key.startsWith('icon-') || key.startsWith('icon:')) {
                keyOption.type = 'icon';
                keyOption.val = key.substr(5);
            } else if(key.startsWith('i:')) {
                keyOption.type = 'icon';
                keyOption.val = key.substr(1);
            } else if(key.startsWith('ver:')) {
                keyOption.type = 'version';
                keyOption.val = key.substr(4);
            } else if(key.startsWith('v:')) {
                keyOption.type = 'version';
                keyOption.val = key.substr(2);
            } else if(key.startsWith('version:')) {
                keyOption.type = 'version';
                keyOption.val = key.substr(8);
            } else if(key.startsWith('grunt:') || key.startsWith('build:')) {
                keyOption.type = 'build';
                keyOption.val = key.substr(6);
            } else if(key.startsWith('g:') || key.startsWith('b:')) {
                keyOption.type = 'build';
                keyOption.val = key.substr(2);
            } else {
                $.each(chapters, function(name){
                    if(key.startsWith(name + ':')) {
                        keyOption.type = 'id';
                        keyOption.chapter = name;
                        keyOption.val = key.substr(name.length);
                        return false;
                    }
                });
                if(!keyOption.type) {
                    keyOption.type = 'any';
                    keyOption.val = key;
                }
            }
            keys.push(keyOption);
        });

        var resultMap = {}, chapterMap = {}, weight, id, chooseThis, chooseThisKey, keyVal, matches, matchType;
        if(eachSection(function(chapter, section){
            chooseThis = true;
            matches = [];
            weight = 0;
            $.each(keys, function(keyIndex, key){
                keyVal = key.val;
                matchType = null;
                chooseThisKey = false;
                switch(key.type) {
                    case 'id':
                        chooseThisKey = (key.chapter ? chapter : section).id.includes(keyVal);
                        if(chooseThisKey) matchType = [key.chapter ? 'chapter' : 'section', 'id'];
                        weight = 100;
                        break;
                    case 'icon':
                        chooseThisKey = section.id === 'icons';
                        if(chooseThisKey) matchType = ['section', 'id'];
                        weight = 100;
                        break;
                    default:
                        if(section.name.toLowerCase().includes(keyVal)) {
                            chooseThisKey = true;
                            matchType = ['section', 'name'];
                            weight = 80;
                            break;
                        }
                        if(chapter.name.toLowerCase().includes(keyVal)) {
                            chooseThisKey = true;
                            matchType = ['chapter', 'name'];
                            weight = 70;
                            break;
                        }
                        if(keyVal.length > 1) {
                            if(section.id.includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['section', 'id'];
                                weight = 65;
                                break;
                            }
                            if(chapter.id.includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['chapter', 'id'];
                                weight = 60;
                                break;
                            }
                            if($.isArray(section.topics)) {
                                var isBreak = false;
                                $.each(section.topics, function(topicIndex, topic){
                                    if(topic.name && topic.name.toLowerCase().includes(keyVal)) {
                                        chooseThisKey = true;
                                        matchType = ['section', 'topic', topicIndex];
                                        isBreak = true;
                                        weight = 20;
                                        return false;
                                    }
                                });
                                if(isBreak) break;
                            }
                            if(section.desc.toLowerCase().includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = 'section.desc';
                                weight = 30;
                                break;
                            }
                        } else {
                            if(chapter.id.startsWith(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['chapter', 'id'];
                                weight = 60;
                                break;
                            }
                            if(section.id.startsWith(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['section', 'id'];
                                weight = 50;
                                break;
                            }
                        }
                }
                if(!chooseThisKey) {
                    chooseThis = false;
                    return false;
                } else {
                    matches.push({key: key, type: matchType});
                }
            });

            id = chapter.id + '-' + section.id;
            if(chooseThis) {
                chapterMap[chapter.id]++;
                resultMap[id] = {hidden: false, matches: matches, weight: weight};
            } else {
                resultMap[id] = {hidden: true};
            }
        }, function(chapter){
            chapterMap[chapter.id] = 0;
        })) {
            var $hide = $(), $show = $(), $section, choosedWeight = -1, $choosed;
            $.each(resultMap, function(id, result){
                $section = $('#section-' + id);
                if(result.hidden) {
                    $hide = $hide.add($section);
                } else {
                    $show = $show.add($section);
                    if(choosedWeight < result.weight) {
                        $choosed = $section;
                        choosedWeight = result.weight;
                    }
                }
                chooseSection($choosed);
            });

            var $chapter, hide, chapter;
            $.each(chapterMap, function(chapterId, resultCount){
                chapter = chapters[chapterId];
                hide = !resultCount;
                chapter.$.toggleClass('hide', hide);
            });
            var $col;
            $chaptersCols.each(function(){
                $col = $(this);
                $col.toggleClass('hide', !$col.children('.chapter:not(.hide)').length);
            });

            if($hide.length) {
                $hide.removeClass('in');
                setTimeout(function(){$hide.removeClass('show');}, 200);
            }
            if($show.length) {
                $show.addClass('show');
                setTimeout(function(){$show.addClass('in');}, 20);
            }
        } else if(debug) {
            console.error("Query failed with key: ", keys);
        }
    }

    $(function() {
        var stopPropagation = function(e) {
            e.stopPropagation();
        }

        $window = $(window);
        $body = $('body');
        $grid = $('#grid');
        $header = $('#header');
        $chaptersCols = $grid.find('.col');
        $chapters = $grid.find('.chapter');
        $queryInput = $('#searchInput');
        $chapterHeadings = $grid.find('.chapter-heading');
        $sectionTemplate = $('#sectionTemplate').attr('id', null);
        $.each(chapters, function(chapterId, chapter){
            chapterId = chapterId.toLowerCase();
            chapter.$ = $('#chapter-' + chapterId);
            chapter.id = chapterId;
            chapter.$sections = $('#sections-' + chapterId);
        });

        loadData(INDEX_JSON, displaySection)

        // Bind events
        $(document).on('click', function(){
            chooseSection();
            $sections.removeClass('open');
        });
        $grid.on('click', '.card-heading', function(e) {
            var $card = $(this).closest('.card');
            if($card.hasClass('without-topics')) {
                $card.find('.btn-toggle').trigger('click');
            } else {
                $card.toggleClass('open');
            }
        }).on('click', '.card', function(e){
            chooseSection($(this));
            e.stopPropagation();
        }).on('mouseenter', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').addClass('hover');
        }).on('mouseleave', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').removeClass('hover');
        });

        var scrollHeight = $('#navbar').outerHeight();
        var isScrollAnimating = false;
        var lastScrollTop;
        $window.on('scroll', function(e){
            if(isScrollAnimating) {
                $window.scrollTop(lastScrollTop);
            }
            lastScrollTop = $window.scrollTop();
            if(lastScrollTop > scrollHeight && !$body.hasClass('compact-mode')) {
                isScrollAnimating = true;
                $body.addClass('compact-mode')
                setTimeout(function(){
                    $window.scrollTop(1);
                    $body.addClass('compact-mode-in');
                    isScrollAnimating = false;
                }, 10);
            } else if($body.hasClass('compact-mode')) {
                if(lastScrollTop < 1) {
                    isScrollAnimating = true;
                    $body.removeClass('compact-mode-in');
                    setTimeout(function(){
                        $body.removeClass('compact-mode');
                        isScrollAnimating = false;
                    }, 500);
                } else {
                    $header.toggleClass('with-shadow', lastScrollTop > 20);
                }
            }
        });

        $queryInput.on('change keyup paste input propertychange', function(){
            var val = $queryInput.val();
            if(val === $queryInput.data('queryString')) return;
            clearTimeout($queryInput.data(LAST_QUERY_ID));
            $queryInput.data(LAST_QUERY_ID, setTimeout(function(){
                query(val);
            }, 150))
        }).on('focus', function(){
            $body.addClass('input-query-focus');
            console.log($queryInput.val(), !!$queryInput.val());
            if($queryInput.val() && !$sections.filter('.open').length) {
                chooseSection($sections.filter('.show:first'));
            }
        }).on('blur', function(){
            $body.removeClass('input-query-focus');
        }).on('click', stopPropagation);
    });
}(window, jQuery));
