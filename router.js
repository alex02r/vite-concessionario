import { createRouter, createWebHistory } from 'vue-router';

import AppBlog from './pages/AppAutos.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/autos',
            name: 'autos',
            component: AppAutos
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }