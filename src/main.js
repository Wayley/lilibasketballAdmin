// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Routers from './router/routers';

Vue.config.productionTip = false;

// Install Global Modules
Vue.use(VueRouter);

/* Router Config */
const router = new VueRouter({
    routes: Routers
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});