import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Component from "@/components/Component.vue";


const routes = [
    { path: '/', component: Component },
]

export const router =createRouter({
    history: createWebHistory(),
    routes,
})

export default router