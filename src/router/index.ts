import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import History from '../views/History.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/details/:id',
        name: 'DETAILS',
        component: Details,
        props: true
    },
    {
        path: '/history',
        name: 'HISTORY',
        component: History
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;