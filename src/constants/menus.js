export const menus = [
    { key: '/app/basic/dashboard', title: 'dashboard', icon: 'scan', },
    {
        key: '/app/basic', title: '基础', icon: 'scan',
        sub: [
            { key: '/app/basic/topo', title: '拓扑', icon: '', },

            { key: '/app/basic/real_network', title: '物理网', icon: '', },
            { key: '/app/basic/controllerList', title: '控制器', icon: '', },
        ],
    },
    { key: '/app/basic/vnetwork', title: '虚拟网', icon: 'scan',
        sub: [
            { key: '/app/basic/deviceList', title: '设备列表', icon: '', },
            { key: '/app/basic/virtual_network?region=b28-2', title: 'b28-2', icon: '', },
            { key: '/app/basic/virtual_network?region=b28-3', title: 'b28-3', icon: '', },
            { key: '/app/basic/virtual_network?region=dz8-1', title: 'dz8-1', icon: '', },
            { key: '/app/basic/virtual_network?region=RegionOne', title: 'RegionOne', icon: '', },
            { key: '/app/basic/virtual_network?region=RegionTwo', title: 'RegionTwo', icon: '', },
        ],
    },
    {
        key: '/app/data', title: '数据', icon: 'scan',
        sub: [
            { key: '/app/data/task', title: '任务管理', icon: '', },
        ],
    },
    {
        key: '/app/controll', title: '控制', icon: 'scan',
        sub: [
            {key: '/app/controll/acl', title: 'acl', icon: '',},
            {key: '/app/controll/qos', title: 'qos', icon: '',},
            {key: '/app/controll/loadbalance', title: 'loadbalance', icon: '',},
        ],
    },
    // {
    //     key: '/app/ui', title: 'UI', icon: 'scan',
    //     sub: [
    //         { key: '/app/ui/buttons', title: '按钮', icon: '', },
    //         { key: '/app/ui/icons', title: '图标', icon: '', },
    //         { key: '/app/ui/spins', title: '加载中', icon: '', },
    //         { key: '/app/ui/modals', title: '对话框', icon: '', },
    //         { key: '/app/ui/notifications', title: '通知提醒框', icon: '', },
    //         { key: '/app/ui/tabs', title: '标签页', icon: '', },
    //         { key: '/app/ui/banners', title: '轮播图', icon: '', },
    //         { key: '/app/ui/wysiwyg', title: '富文本', icon: '', },
    //         { key: '/app/ui/drags', title: '拖拽', icon: '', },
    //         { key: '/app/ui/gallery', title: '画廊', icon: '', },
    //         { key: '/app/ui/map', title: '地图'},
    //     ],
    // },
    // {
    //     key: '/app/animation', title: '动画', icon: 'rocket',
    //     sub: [
    //         { key: '/app/animation/basicAnimations', title: '基础动画', icon: '', },
    //         { key: '/app/animation/exampleAnimations', title: '动画案例', icon: '', },
    //     ],
    // },
    // {
    //     key: '/app/table', title: '表格', icon: 'copy',
    //     sub: [
    //         { key: '/app/table/basicTable', title: '基础表格', icon: '', },
    //         { key: '/app/table/advancedTable', title: '高级表格', icon: '', },
    //         { key: '/app/table/asynchronousTable', title: '异步表格', icon: '', },
    //     ],
    // },
    // {
    //     key: '/app/form', title: '表单', icon: 'edit',
    //     sub: [
    //         { key: '/app/form/basicForm', title: '基础表单', icon: '', },
    //     ],
    // },
    // {
    //     key: '/app/chart', title: '图表', icon: 'area-chart',
    //     sub: [
    //         { key: '/app/chart/echarts', title: 'echarts', icon: '', },
    //         { key: '/app/chart/recharts', title: 'recharts', icon: '', },
    //     ],
    // },
    // {
    //     key: '/sub4', title: '页面', icon: 'switcher',
    //     sub: [
    //         { key: '/login', title: '登录', icon: '', },
    //         { key: '/404', title: '404', icon: '', },
    //     ],
    // },
    // {
    //     key: '/app/auth', title: '权限管理', icon: 'safety',
    //     sub: [
    //         { key: '/app/auth/basic', title: '基础演示', icon: '', },
    //         { key: '/app/auth/routerEnter', title: '路由拦截', icon: '', },
    //     ],
    // },
    // {
    //     key: '/app/cssModule', title: 'cssModule', icon: 'star',
    // },
    // {
    //     key: '/app/management', title: '系统管理', icon: 'star',
    //     sub: [
    //         { key: '/app/management/syllabux', title: '课表管理', icon: '', },
    //         { key: '/app/management/class', title: '课程管理', icon: '', },
    //         { key: '/app/management/student', title: '学生管理', icon: '', },
    //         { key: '/app/management/teacher', title: '教师管理', icon: '', },
    //         { key: '/app/management/package', title: '套餐管理', icon: '', },
    //         { key: '/app/management/discount', title: '优惠策略', icon: '', },
    //     ],
    // },
    // {
    //     key: '/app/attendance', tile: '考勤管理', icon: 'star',
    //     sub: [
    //         { key: '/app/attendance/teacher', title: '教师考勤', icon: '', },
    //         { key: '/app/attendance/student', title: '学生考勤', icon: '', },
    //     ]
    // },
    // {
    //     key: '/app/quality', title: '质量管理', icon: 'star',
    //     sub: [
    //         { key: '/app/quality/teacher', title: '教学总结', icon: '', },
    //         { key: '/app/quality/student', title: '巡查抽查', icon: '', },
    //     ]
    // },
    // {
    //     key: '/app/finance', tile: '财务管理', icon: 'star',
    //     sub: [
    //         { key: '/app/finance/price', title: '价格管理', icon: '', },
    //         { key: '/app/finance/cost', title: '成本管理', icon: '', },
    //         { key: '/app/finance/details', title: '财务明细', icon: '', },
    //     ]
    // },
    // {
    //     key: '/app/compete', tile: '竞争分析', icon: 'star',
    //     sub: [
    //         { key: '/app/compete/opponent', title: '对手情报', icon: '', },
    //         { key: '/app/compete/region', title: '区域分析', icon: '', },
    //     ]
    // }
];