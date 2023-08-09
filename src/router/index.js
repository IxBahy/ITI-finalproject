import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { layout: 'DefaultLayout' },
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            meta: { layout: 'DefaultLayout' },
            component: () => import('../views/Contact.vue')
        }
    ]
})

export default router
