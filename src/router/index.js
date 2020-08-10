/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        // eslint-disable-next-line prettier/prettier
        redirect: "Login"
    },
    {
        path: "/login",
        name: "Login",
        // chunk name 按组分块
        component: () =>
            import (/* webpackChunkName: "group-Login" */ "../views/Login/Login 2.0.vue")
    },
    {
        path: "/home",
        name: "Home",
        // chunk name 按组分块
        component: () =>
            import (/* webpackChunkName: "group-Login" */ "../views/Home/home.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;