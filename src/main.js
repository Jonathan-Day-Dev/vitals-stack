import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import '../public/css/app.css';

import Reference from './components/ref/Reference.vue';
import Welcome from './components/static/TheWelcome.vue';
import Guide from './components/guide/Guide.vue';
import Sequence from './components/guide/Sequence.vue';
import Architecture from './components/guide/Architecture.vue';
import Api from './components/guide/Api.vue';
import Entity from './components/guide/Entity.vue';
import Wireframe from './components/guide/Wireframe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: '/home'
        },
        {
            path: "/home",
            component: Welcome
        },
        {
            path: "/ref",
            component: Reference
        },
        {
            path: "/guide",
            component: Guide
        },
        {
            path: "/sequence",
            component: Sequence
        },
        {
            path: "/architecture",
            component: Architecture
        },
        {
            path: "/api",
            component: Api
        },
        {
            path: "/entity",
            component: Entity
        },
        {
            path: "/wireframe",
            component: Wireframe
        }
    ]
});

const app = createApp(App);
app.use(router);

app.mount('#app');
