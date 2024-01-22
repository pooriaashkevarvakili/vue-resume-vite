import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        name: 'resume',
        ///@ts-ignore
        component: () => import("../components/resume.vue"),
      
    },
    {
        name: 'portfolio',
        ///@ts-ignore
        component: () => import("../components/Portfolio.vue")
    },
    {
        name: "works",
        ///@ts-ignore
        component: () => import("../components/Work.vue")
    },
    {
        name: "skills",
        ///@ts-ignore
        component: () => import("../components/skills.vue")
    },



]
const router = createRouter({
    ///@ts-ignore
    mode: 'history',
    history: createWebHistory(),
    ///@ts-ignore
    routes
})
export default router