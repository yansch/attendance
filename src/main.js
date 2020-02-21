import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
