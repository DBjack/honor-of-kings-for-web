import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";

import "@/scss/style.scss";
import router from "./router";

Vue.config.productionTip = false;

import VueAwesomeSwiper from "vue-awesome-swiper";
import Card from "@/components/Card";
import ListCard from "@/components/ListCard";

// import style
// import "swiper/css/swiper.css";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */ );
Vue.component("m-card", Card);
Vue.component("m-list-card", ListCard);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");