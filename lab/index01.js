import Vue from "vue";
import App from "index01App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#index01app");