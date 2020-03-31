'use strict';

import Vue from 'vue';
import axios from 'axios';
import store from './store';

let config = {
    baseURL: process.env.NODE_ENV === 'production'
        ? 'http://localhost:8080/Attendance-war/resources'
        : 'http://bhr24.sytes.net:8080/Attendance-war/resources'
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        if (store.getters.isLoggedIn) {
            config.headers.Authorization = store.getters.token;
        }
        return config;
    }
);

Plugin.install = function (Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin);

export default Plugin;
