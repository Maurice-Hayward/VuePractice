import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: "history",
    scrollBehavior(to, from, savedPositiion) {
        return { x: 0, y: 700 };
    }
});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
