import Vue from 'vue'
import { ClientTable } from 'vue-tables-2';
import App from './App'
Vue.config.productionTip = false
Vue.use(ClientTable);
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})