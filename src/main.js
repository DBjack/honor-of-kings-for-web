import Vue from "vue";
import App from "./App.vue";

import "@/scss/style.scss";
import router from "./router";

Vue.config.productionTip = false;

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
// import "swiper/css/swiper.css";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */ );

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");