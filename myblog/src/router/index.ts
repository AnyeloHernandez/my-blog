import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import PostsView from "../views/PostsView.vue";
import PostReaderView from "../views/PostReaderView.vue";

/*
Se utiliza un router para utilizar un SPA y no tener que recargar la página
cada vez que se navega a una nueva sección. Esto hace que la experiencia de usuario sea más fluida y rápida.
*/
const router = createRouter({
    history: createWebHashHistory("/my-blog/"),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/posts',
            component: PostsView,
        },
        {
            path: '/posts/:slug',
            component: PostReaderView,
        },
    ]
})

export default router