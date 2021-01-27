import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VuePageStack from "vue-page-stack";

import Vant from "vant";
import "vant/lib/index.css";
import animated from "animate.css";
import "./assets/scss/index.scss";
Vue.use(animated);
Vue.use(Vant);
Vue.use(VuePageStack, {
    router,
    name: "VuePageStack",
    keyName: "stack-key"
});

import scroll from "@/components/index.vue";
Vue.component("scroll", scroll);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");