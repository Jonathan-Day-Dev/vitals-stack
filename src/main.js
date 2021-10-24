import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import '../public/css/app.css';

import Reference from './components/ref/Reference.vue';
import Welcome from './components/static/TheWelcome.vue';
import Guide from './components/guide/Guide.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "",
            component: Welcome
        },
        {
            path: "/ref",
            component: Reference
        },
        {
            path: "/guide",
            component: Guide
        }
    ]
});

const app = createApp(App);
app.use(router);

app.mount('#app');
