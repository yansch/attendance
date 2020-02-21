import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,

    render: function (h) {
        return h(App)
    }
}).$mount('#app');
