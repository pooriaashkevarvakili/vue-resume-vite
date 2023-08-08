import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        path: '/',
        name: 'resume',
        ///@ts-ignore
        component: () => import("../components/resume.vue")
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        ///@ts-ignore
        component: () => import("../components/Portfolio.vue")
    },
    {
        path: '/works',
        name: "works",
        ///@ts-ignore
        component: () => import("../components/Work.vue")
    },
    {
        path: '/about',
        name: "about",
        ///@ts-ignore
        component: () => import("../components/about.vue")
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router