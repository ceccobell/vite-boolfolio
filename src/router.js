import { createRouter, createWebHistory } from "vue-router"

import Home from "./components/HomePage.vue"
import Portfolio from "./components/Portfolio.vue"
import ProjectCardComplete from "./components/ProjectCardComplete.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/project/:id", component: ProjectCardComplete },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
