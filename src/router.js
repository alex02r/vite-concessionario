import { createRouter, createWebHistory } from 'vue-router';

import Home from "./pages/Home.vue";
import AppAutos from './pages/AppAutos.vue';
import BrandAutos from "./pages/BrandAutos.vue";
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/autos',
            name: 'autos',
            component: AppAutos
        },
        {
            path: '/autos/brand/:slug',
            name: 'brand-autos',
            component: BrandAutos
        },
        {
             path: '/:pathMatch(.*)*',
             name: 'not-found',
             component: AppNotFound
        }
    ]
});

export { router }