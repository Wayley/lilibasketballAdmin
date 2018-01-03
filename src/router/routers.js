const basic = [{
        path: '/',
        name: 'index',
        component: resolve => require(['../components/index.vue'], resolve)
    },
    {
        path: '/news',
        name: 'news',
        component: resolve => require(['../components/news.vue'], resolve)
    }
];
const routers = new Array().concat(basic);
export default routers;