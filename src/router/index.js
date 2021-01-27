import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/theset",
        name: "theset",
        component: () =>
            import ("@/views/theset/index"),
        children: [{
                path: "home",
                name: "home",
                component: () =>
                    import ("@/views/theset/home")
            },
            {
                path: "classify",
                name: "classify",
                component: () =>
                    import ("@/views/theset/classify")
            },
            {
                path: "my",
                name: "my",
                component: () =>
                    import ("@/views/theset/my")
            }
        ]
    },
    {
        path: "/",
        redirect: "/theset/home"
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/abdetails",
        name: "abdetails",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/abdetails.vue")
    },
    {
        path: "/search",
        name: "search",
        component: () =>
            import ("@/views/search.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;