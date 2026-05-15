import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"

/*
Se utiliza un router para utilizar un SPA y no tener que recargar la página
cada vez que se navega a una nueva sección. Esto hace que la experiencia de usuario sea más fluida y rápida.
*/
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        }
    ]
})

export default router