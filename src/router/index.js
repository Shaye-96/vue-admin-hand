/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        // eslint-disable-next-line prettier/prettier
        redirect: "Login",
        hidden: true,
        meta: {
            name: "首页"
        }
    },
    {
        path: "/login",
        name: "Login",
        hidden: true,
        meta: {
            name: "登录"
        },
        // chunk name 按组分块
        component: () =>
            import (/* webpackChunkName: "group-Login" */ "../views/Login/Login 2.0.vue")
    },
    {
        path: "/home",
        name: "Home",
        meta: {
            name: "控制台",
            icon: "iconfont icon-kongzhitai"
        },
        // chunk name 按组分块
        component: () =>
            import (/* webpackChunkName: "group-Login" */ "../views/Home/index.vue"),
        redirect: "Index",
        children: [
            {
                path: "/index",
                name: "Index",
                meta: {
                    name: "首页"
                },
                component: () =>
                    import (/* webpackChunkName: "group-Login" */ "../views/Console/index.vue")
            }
        ]
    },
    {
        path: "/info",
        name: "Info",
        meta: {
            name: "信息管理",
            icon: "iconfont icon-xinxiguanli"
        },
        component: () =>
            import (/* webpackChunkName: "group-Login" */ "../views/Home/index.vue"),
        children: [
            {
                path: "/infoIndex",
                name: "InfoIndex",
                meta: {
                    name: "信息列表"
                },
                component: () =>
                    import (/* webpackChunkName: "group-Login" */ "../views/Info/InfoIndex.vue")
            },
            {
                path: "/infoCategory",
                name: "InfoCategory",
                meta: {
                    name: "信息分类"
                },
                component: () =>
                    import (/* webpackChunkName: "group-Login" */ "../views/Info/InfoCategroy.vue")
            }
        ]
    },
    {
        path: "/user",
        name: "User",
        meta: {
            name: "用户管理",
            icon: "iconfont icon-yonghuguanli"
        },
        // 一级路由定位到首页，这样子路由会找到router-view 显示，否则会跳转新页面
        component: () =>
            import (/* webpackChunkName: "group-Login" */ "../views/Home/index.vue"),
        children: [
            {
                path: "/userIndex",
                name: "UserIndex",
                meta: {
                    name: "用户列表"
                },
                component: () =>
                    import (/* webpackChunkName: "group-Login" */ "../views/User/UserIndex.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;