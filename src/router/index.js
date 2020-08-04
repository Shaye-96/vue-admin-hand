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
        component: () =>
            import ("../views/Login/Login.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;