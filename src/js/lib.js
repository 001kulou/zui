var lib = {
    jquery: {
        name: 'jQuery',
        pver: '1.10.2',
        ver: '1.0.0',
        src: {js: ['assets/jquery.js']},
        desc: 'ZUI的绝大部分JS组件都依赖于jQuery',
        thirdpart: true,
        website: 'http://jquery.com/'
    },
    jqueryex: {
        name: 'jQuery扩展',
        ver: '1.0.0',
        src: {js: ['src/js/jquery.extensions.js']},
        require: ['jquery']
    },
    colorset: {
        name: '配色',
        src: {less: ['src/basic/colorset.less']},
        desc: 'ZUI的色彩配置',
        ver: '1.0.0'
    },
    variables: {
        name: '配置',
        src: {less: ['src/basic/variables.less']},
        ver: '1.0.0'
    },
    normalize: {
        name: '全局样式表',
        src: {less: ['src/basic/normalize.less']},
        ver: '1.0.0'
    },
    mixins: {
        name: '样式片段',
        desc: '用于存储可重复使用的Less样式',
        src: {less: ['src/basic/mixins.less']},
        ver: '1.0.0',
        dpds: ['variables']
    },
    basic: {
        name: '基础样式',
        desc: '包含配置、全局样式表及一些有用的样式片段',
        dpds: ['variables', 'normalize', 'mixins']
    },

    "utilities.common": {
        name: '常用辅助类',
        src: {less: ['src/basic/utilities.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "utilities.responsive": {
        name: '多设备响应辅助类',
        src: {less: ['src/basic/utilities.responsive.less']},
        desc: '支持多设备响应的辅助类',
        ver: '1.0.0',
        dpds: ['basic']
    },
    utilities: {
        name: '辅助类',
        desc: '包含支持多设备响应的辅助类',
        dpds: ['utilities.common', 'utilities.responsive'],
    },
    scaffolding: {
        name: '脚手架',
        src: {less: ['src/basic/scaffolding.less']},
        ver: '1.0.0',
        dpds: ['mixins']
    },
    grid: {
        name: '栅格系统',
        src: {less: ['src/basic/grid.less']},
        desc: '使用栅格来帮助布局',
        ver: '1.0.0',
        dpds: ['basic']
    },
    "typography.basic": {
        name: '基本排版',
        src: {less: ['src/controls/type.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "typography.bg": {
        name: '文本背景',
        src: {less: ['src/controls/type.bg.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "typography.hightlight": {
        name: '文本高亮',
        src: {less: ['src/controls/type.hightlight.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "typography": {
        name: '排版',
        dpds: ['type.basic', 'type.bg', 'type.hightlight']
    },
    "header": {
        name: '标题',
        src: {less: ['src/controls/headers.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "button.basic": {
        name: '基本按钮',
        src: {less: ['src/controls/buttons.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "button.group": {
        name: '按钮组',
        src: {less: ['src/controls/buttons.group.less']},
        ver: '1.0.0',
        dpds: ['button.basic']
    },
    "button.vertical": {
        name: '垂直按钮组',
        src: {less: ['src/controls/buttons.vertical.less']},
        ver: '1.0.0',
        dpds: ['button.basic']
    },
    "button": {
        name: '按钮',
        dpds: ['button.basic', 'button.group', 'button.vertical']
    },
    "progressbar": {
        name: '进度条',
        src: {less: ['src/controls/progress-bars.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "image": {
        name: '图片',
        src: {less: ['src/controls/image.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "divider": {
        name: '分隔',
        src: {less: ['src/controls/divider.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "labels.basic": {
        name: '基本标签',
        src: {less: ['src/controls/labels.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "labels.fix": {
        name: '标签适配样式',
        src: {less: ['src/controls/labels.fix.less']},
        ver: '1.0.0',
        dpds: ['labels.basic']
    },
    "labels": {
        name: '标签',
        dpds: ['labels.basic', 'labels.fix']
    },
    "breadcrumbs": {
        name: '面包屑导航',
        src: {less: ['src/controls/breadcrumbs.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "icons.core": {
        name: '图标核心样式',
        src: {less: ['src/controls/icons.core.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "icons.variables": {
        name: '图标名称配置',
        src: {less: ['src/controls/icons.core.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "icons.set": {
        name: '图标定义',
        src: {less: ['src/controls/icons.set.less']},
        ver: '1.0.0',
        dpds: ['icons.variables']
    },
    "icons.font": {
        name: '图标字体',
        src: {fonts: ['src/fonts/zenicon.eot', 'src/fonts/zenicon.svg', 'src/fonts/zenicon.ttf', 'src/fonts/zenicon.woff']},
        ver: '1.0.0'
    },
    "icons": {
        name: '图标',
        dpds: ['icons.font', 'icons.core', 'icons.set']
    },
    "close": {
        name: '关闭按钮',
        src: {less: ['src/controls/close.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "scrollbar": {
        name: '滚动条',
        src: {less: ['src/controls/scrollbar.less']},
        ver: '1.0.0'
    },
    "table.basic": {
        name: '基本表格',
        src: {less: ['src/components/table.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "table.colors": {
        name: '表格变色',
        src: {less: ['src/components/table.colors.less']},
        ver: '1.0.0',
        dpds: ['table.basic']
    },
    "table.responsive": {
        name: '多设备响应的表格',
        src: {less: ['src/components/table.responsive.less']},
        ver: '1.0.0',
        dpds: ['table.basic']
    },
    "table": {
        name: '表格',
        dpds: ['table.basic', 'table.colors', 'table.responsive']
    },
    "listgroup": {
        name: '列表组',
        src: {less: ['src/components/list-group.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "panels.basic": {
        name: '基本面板',
        src: {less: ['src/components/panels.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "panels.types": {
        name: '面板类型',
        src: {less: ['src/components/panels.types.less']},
        ver: '1.0.0',
        dpds: ['panels.basic']
    },
    "panels.group": {
        name: '面板组',
        src: {less: ['src/components/panels.group.less']},
        ver: '1.0.0',
        dpds: ['panels.basic']
    },
    "panels.fix": {
        name: '面板适配',
        src: {less: ['src/components/panels.fix.less']},
        ver: '1.0.0',
        dpds: ['panels.basic']
    },
    "panels": {
        name: '面板类型',
        dpds: ['panels.basic', 'panels.types', 'panels.group', 'panels.fix']
    },
    "alerts.basic": {
        name: '基本消息框',
        src: {less: ['src/components/alerts.less'], js: ['sr/js/alert.js']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "alerts.hover": {
        name: '消息框增强样式',
        src: {less: ['src/components/alerts.hover.less']},
        ver: '1.0.0',
        dpds: ['alerts.basic']
    },
    "alerts": {
        name: '消息框',
        dpds: ['alerts.basic', 'alerts.hover']
    },
    "inputgroups.basic":{
        name: '基本输入框组',
        src: {less: ['src/components/input-groups.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "inputgroups.size":{
        name: '输入框组大小',
        src: {less: ['src/components/input-groups.size.less']},
        ver: '1.0.0',
        dpds: ['inputgroups.basic']
    },
    "inputgroups": {
        name: '输入框组',
        dpds: ['input-groups.basic', 'input-groups.size']
    },
    "forms.basic": {
        name: '基本表单',
        src: {less: ['src/components/forms.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "forms.condensed": {
        name: '紧凑表单',
        src: {less: ['src/components/forms.condensed.less']},
        ver: '1.0.0',
        dpds: ['forms.basic']
    },
    "forms": {
        name: '表单',
        dpds: ['forms.basic', 'forms.condensed']
    },
    "code": {
        name: '代码',
        src: {less: ['src/components/code.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "pager.basic": {
        name: '基本分页',
        src: {less: ['src/components/pager.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "pager.size": {
        name: '分页尺寸',
        src: {less: ['src/components/pager.size.less']},
        ver: '1.0.0',
        dpds: ['pager.basic']
    },
    "pager.types": {
        name: '分页类型',
        src: {less: ['src/components/pager.types.less']},
        ver: '1.0.0',
        dpds: ['pager.basic']
    },
    "pager": {
        name: '表单',
        dpds: ['pager.basic', 'pager.size', 'pager.types']
    },
    "navs.basic": {
        name: '基本导航',
        src: {less: ['src/components/navs.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "navs.tabs": {
        name: '标签式导航',
        src: {less: ['src/components/navs.tabs.less']},
        ver: '1.0.0',
        dpds: ['tab', 'navs.basic']
    },
    "navs": {
        name: '导航',
        dpds: ['navs.basic', 'navs.tabs']
    },
    "navbars.basic": {
        name: '基本导航条',
        src: {less: ['src/components/navbars.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "navbars.form": {
        name: '导航条表单',
        src: {less: ['src/components/navbars.forms.less']},
        ver: '1.0.0',
        dpds: ['navbars.basic']
    },
    "navbars.fixedleft": {
        name: '左侧导航条',
        src: {less: ['src/components/navbars.fixed-left.less']},
        ver: '1.0.0',
        dpds: ['navbars.basic']
    },
    "navbars": {
        name: '导航条',
        dpds: ['navbars.basic', 'navbars.form', 'navbars.fixedleft']
    },
    "animations": {
        name: '过度动画',
        src: {less: ['src/modules/animations.less'], js: ['src/js/transition.js']},
        ver: '1.0.0',
        dpds: ['mixins'],
        require: ['jquery']
    },
    "collapse": {
        name: '折叠',
        src: {js: ['src/js/collapse.js']},
        ver: '1.0.0',
        dpds: ['animations']
    },
    "device": {
        name: '设备辅助类',
        src: {js: ['src/js/device.js']},
        ver: '1.0.0',
        require: ['jquery']
    },
    "browser": {
        name: '浏览器兼容工具',
        src: {js: ['src/js/browser.js']},
        ver: '1.0.0',
        require: ['jquery']
    },
    "imgready": {
        name: '图片加载',
        src: {js: ['src/js/imgage.ready.js']},
        thirdpart: true,
        website: 'http://www.planeart.cn/?p=1121'
    },
    "hotkey": {
        name: '快捷键',
        src: {js: ['src/js/hotkeys.js']},
        ver: '1.0.0',
        thirdpart: true,
        website: 'http://github.com/tzuryby/hotkeys',
        require: ['jquery']
    },
    "date": {
        name: '日期扩展方法',
        src: {js: ['src/js/date.js']},
        ver: '1.0.0'
    },
    "string": {
        name: '字符串扩展方法',
        src: {js: ['src/js/string.js']},
        ver: '1.0.0'
    },
    "resize": {
        name: '监听尺寸更改',
        src: {js: ['src/js/resize.js']},
        ver: '1.0.0',
        pver: '1.1',
        thirdpart: true,
        website: 'http://benalman.com/projects/jquery-resize-plugin/',
        require: ['jquery']
    },
    "scrollspy": {
        name: '滚地监听',
        src: {js: ['src/js/scrollspy.js']},
        ver: '1.0.0',
        require: ['jquery']
    },
    "store": {
        name: '本地存储',
        src: {js: ['src/js/store.js']},
        ver: '1.2.0',
        require: ['jquery']
    },
    "draggable": {
        name: '拖拽',
        src: {js: ['src/js/draggable.js']},
        ver: '1.0.0',
        dpds: ['jqueryex'],
        require: ['jquery']
    },
    "droppable": {
        name: '拖放',
        src: {js: ['src/js/droppable.js']},
        ver: '1.0.0',
        dpds: ['jqueryex'],
        require: ['jquery']
    },
    "sortable": {
        name: '排序',
        src: {js: ['src/js/sortable.js']},
        ver: '1.0.0',
        dpds: ['jqueryex', 'droppable'],
        require: ['jquery']
    },
    "tab": {
        name: '标签页',
        src: {js: ['src/js/tab.js']},
        ver: '1.0.0',
        dpds: ['animation'],
        require: ['jquery']
    },
    "modals": {
        name: '模态框',
        src: {less: ['src/modules/modals.less'], js: ['src/js/modal.js']},
        ver: '1.0.0',
        dpds: ['basic', 'animations'],
        require: ['jquery']
    },
    "modaltrigger": {
        name: '模态框触发器',
        src: {js: ['src/js/modal.trigger.js']},
        ver: '1.2.0',
        dpds: ['jqueryex', 'resize', 'modals'],
        require: ['jquery']
    },
    "tooltip": {
        name: '工具提示',
        src: {less: ['src/modules/tooltip.less'], js: ['src/js/tooltip.js']},
        ver: '1.0.0',
        dpds: ['basic', 'animations'],
        require: ['jquery']
    },
    "popovers": {
        name: '弹出面板',
        src: {less: ['src/modules/popovers.less'], js: ['src/js/popover.js']},
        ver: '1.0.0',
        dpds: ['tooltip', 'animations'],
        require: ['jquery']
    },
    "dropdowns": {
        name: '下拉菜单',
        src: {less: ['src/modules/dropdowns.less'], js: ['src/js/dropdown.js']},
        ver: '1.0.0',
        dpds: ['basic', 'animations'],
        require: ['jquery']
    },
    "carousel.basic": {
        name: '基本轮播',
        src: {less: ['src/modules/carousel.less'], js: ['src/js/carousel.js']},
        ver: '1.0.0',
        dpds: ['basic', 'animations'],
        require: ['jquery']
    },
    "carousel.indicators": {
        name: '轮播指示器',
        src: {less: ['src/modules/carousel.indicators.less']},
        ver: '1.0.0',
        dpds: ['carousel.basic'],
    },
    "carousel": {
        name: '轮播',
        dpds: ['carousel.basic', 'carousel.basic']
    },
    "lightbox": {
        name: '灯箱预览',
        src: {less: ['src/modules/lightbox.less'], js: ['src/js/lightbox.js']},
        ver: '1.0.0',
        dpds: ['basic', 'animations', 'modaltrigger'],
        require: ['jquery']
    },
    "messager": {
        name: '消息',
        src: {less: ['src/modules/messager.less'], js: ['src/js/messager.js']},
        ver: '1.0.0',
        dpds: ['basic', 'animation'],
        require: ['jquery']
    },
    "menu": {
        name: '垂直菜单',
        src: {less: ['src/modules/menu.less'], js: ['src/js/menu.js']},
        ver: '1.0.0',
        dpds: ['basic', 'navs', 'button'],
        require: ['jquery']
    },
    "imgcutter": {
        name: '图片裁剪工具',
        src: {less: ['src/modules/img-cutter.less'], js: ['src/js/img-cuttr.js']},
        ver: '1.0.0',
        dpds: ['basic', 'imgready'],
        require: ['jquery']
    },
    "datetimepicker": {
        name: '日期时间选择',
        src: {less: ['src/modules/datetimepicker.less'], js: ['assets/datetimepicker/js/datetimepicker.js']},
        ver: '1.0.0',
        thirdpart: true,
        dpds: ['basic', 'dropdowns'],
        website: 'http://www.malot.fr/bootstrap-datetimepicker',
        custom: ['ui'],
        require: ['jquery']
    },
    "kindeditor": {
        name: '富文本编辑器',
        src: {less: ['src/modules/kindeditor.less'], js: ['assets/kindeditor/kindeditor-all.js'], resource: ['themes/*', 'lang/*']},
        ver: '1.0.0',
        dpds: ['basic'],
        pver: '4.1.0',
        website: 'http://kindeditor.net/',
        thirdpart: true,
        custom: ['ui']
    },
    "chosen": {
        name: '选择器',
        src: {less: ['src/modules/chosen.less'], js: ['assets/chosen.jquery.js']},
        ver: '1.0.0',
        dpds: ['basic'],
        pver: '1.1.0',
        website: 'https://github.com/harvesthq/chosen',
        thirdpart: true,
        custom: ['ui'],
        require: ['jquery']
    },
    "bootbox": {
        name: '模态消息',
        src: {less: ['src/modules/modals.bootbox.less'], js: ['src/js/bootbox.js']},
        ver: '1.0.0',
        dpds: ['modals'],
        thirdpart: true,
        custom: ['ui'],
        require: ['jquery']
    },
    "chosenicons": {
        name: '图标选择器',
        src: {less: ['src/modules/chosen.icon.less'], js: ['src/js/chosen.icon.js']},
        ver: '1.0.0',
        dpds: ['basic', 'chosen'],
        require: ['jquery']
    },
    "article.basic": {
        name: '基本文章视图',
        src: {less: ['src/views/article.less']},
        ver: '1.0.0',
        dpds: ['basic', 'typography']
    },
    "article.condensed": {
        name: '紧凑文章视图',
        src: {less: ['src/views/article.condensed.less']},
        ver: '1.0.0',
        dpds: ['article.basic']
    },
    "article": {
        name: '文章视图',
        dpds: ['article.basic', 'article.condensed']
    },
    "comment": {
        name: '评论视图',
        src: {less: ['src/views/comment.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "list": {
        name: '列表视图',
        src: {less: ['src/views/list.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "cards.basic": {
        name: '基本卡片视图',
        src: {less: ['src/views/cards.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "cards.caption": {
        name: '卡片视图备注',
        src: {less: ['src/views/cards.caption.less']},
        ver: '1.0.0',
        dpds: ['cards.basic']
    },
    "cards.condensed": {
        name: '紧凑卡片视图',
        src: {less: ['src/views/cards.condensed.less']},
        ver: '1.0.0',
        dpds: ['cards.basic']
    },
    "cards.reveal": {
        name: '卡片视图翻转',
        src: {less: ['src/views/cards.reveal.less']},
        ver: '1.0.0',
        dpds: ['cards.basic']
    },
    "card": {
        name: '卡片视图',
        dpds: ['cards.basic', 'cards.caption', 'cards.condensed', 'cards.reveal']
    },
    "dashboard": {
        name: '控制面板',
        src: {less: ['src/views/dashboard.less'], js: ['src/js/dashboard.js']},
        ver: '1.0.0',
        dpds: ['panels'],
        require: ['jquery']
    },
    "board": {
        name: '看板',
        src: {less: ['src/views/boards.less'], js: ['src/js/boards.js']},
        ver: '1.0.0',
        dpds: ['jqueryex', 'panels', 'droppable'],
        require: ['jquery']
    },
    "datatable": {
        name: '数据表格',
        src: {less: ['src/views/datatable.less'], js: ['src/js/datatable.js']},
        ver: '1.2.0',
        dpds: ['jqueryex', 'resize', 'string', 'table'],
        require: ['jquery']
    },
    "calendar": {
        name: '日历',
        src: {less: ['src/views/calendar.less'], js: ['src/js/calendar.js']},
        ver: '1.2.0',
        dpds: ['jqueryex', 'resize', 'string', 'date', 'table', 'droppable']
    },
    "colorset.test": {
        name: '配色测试',
        src: {less: ['src/basic/colorset.text.less']},
        desc: 'ZUI的色彩预览样式',
        ver: '1.0.0',
        dpds: ['colorset', 'mixins', 'doc']
    }
};
var builds = {
    standard: {
        title: 'Standard edition',
        dest: 'dist/',
        filename: 'zui',
        subdirectories: true,
        includes: [
            'jqueryex',
            'basic',
            'utilities',
            'scaffolding',
            'grid',
            'typography',
            'header',
            'button',
            'progressbar',
            'image',
            'divider',
            'labels',
            'breadcrumbs',
            'icons',
            'close',
            'scrollbar',
            'table',
            'listgroup',
            'panels',
            'alerts',
            'inputgroups',
            'forms',
            'code',
            'pager',
            'navs',
            'navbars',
            'animations',
            'collapse',
            'device',
            'browser',
            'date',
            'string',
            'resize',
            'scrollspy',
            'store',
            'draggable',
            'droppable',
            'sortable',
            'tab',
            'modals',
            'modaltrigger',
            'tooltip',
            'popovers',
            'dropdowns',
            'carousel',
            'lightbox',
            'messager',
            'menu',
            'bootbox',
            'article',
            'comment',
            'list',
            'card',
            'dashboard',
            'board',
            'datatable'
        ]
    },
    lite: {
        title: 'Lite edition',
        dest: 'dist/',
        filename: 'zui.lite',
        subdirectories: true,
        includes: [
            'jqueryex',
            'basic',
            'utilities',
            'scaffolding',
            'grid',
            'typography.basic',
            'header',
            'button.basic',
            'image.group',
            'divider',
            'labels.basic',
            'breadcrumbs',
            'icons',
            'close',
            'table.basic',
            'table.colors',
            'listgroup',
            'panels.basic',
            'alerts.basic',
            'inputgroups',
            'forms.basic',
            'code',
            'pager.basic',
            'navs.basic',
            'navs.tab',
            'navbars.basic',
            'animations',
            'collapse',
            'device',
            'browser',
            'date',
            'string',
            'resize',
            'store',
            'tab',
            'modals',
            'modaltrigger',
            'tooltip',
            'popovers',
            'dropdowns',
            'carousel',
            'article',
            'comment',
            'list',
            'card.basic'
        ]
    },
    calendar: {
        title: 'Calendar',
        dest: 'dist/lib/calendar/',
        filename: 'calendar',
        includes: ['calendar'],
        ignoreDpds: true
    },
    kindeditor: {
        title: 'Kindeditor',
        dest: 'dist/lib/kindeditor/',
        filename: 'kindeditor',
        includes: ['kindeditor'],
        ignoreDpds: true
    },
    datetimepicker: {
        title: 'Datetimepicker',
        dest: 'dist/lib/datetimepicker/',
        filename: 'datetimepicker',
        includes: ['datetimepicker'],
        ignoreDpds: true
    },
    chosen: {
        title: 'Chosen',
        dest: 'dist/lib/chosen/',
        filename: 'chosen',
        includes: ['chosen'],
        ignoreDpds: true
    },
    imgcutter: {
        title: 'Image cutter',
        dest: 'dist/lib/imgcutter/',
        filename: 'imgcutter',
        includes: ['imgcutter'],
        ignoreDpds: ['basic']
    }
};
