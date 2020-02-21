import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        login({commit}, data) {
            commit('setToken', data.token);
            commit('setUser', data.user);
        },
        logout({commit}) {
            commit('setToken', null);
            commit('setUser', null);
        }
    },
    getters: {
        token: state => this.state.token,
        user: state => this.state.user,
        isLoggedIn: state => !!this.state.token
    }
})