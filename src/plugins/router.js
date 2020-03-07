import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login';
import store from './store';
import Dashboard from '../views/Dashboard';
import Timetable from '../views/Timetable';
import Management from '../views/Management';

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isLoggedIn)
        next();
    else
        next('/login');
};

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isLoggedin)
        next();
    else
        next('/');
};

const routes = [
    {
        path: '*',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/timetable',
        name: 'timetable',
        component: Timetable,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/management',
        name: 'managament',
        component: Management,
        beforeEnter: ifAuthenticated
    }
];

const router = new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
