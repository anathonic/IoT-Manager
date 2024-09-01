import {createRouter, createWebHistory} from "vue-router";
import Layout from "../layout/Layout.vue";


const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/data',
                name: 'Data',
                component: () => import('../views/Data.vue')
            },
            {
                path: '/statistics',
                name: 'Statistics',
                component: () => import('../views/Statistics.vue')
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import('../views/Settings.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue')
            }
        ]
    }
]


const router = createRouter({
        history: createWebHistory(),
        routes
    }
);

export default router