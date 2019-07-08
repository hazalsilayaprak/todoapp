import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
         isLogin: localStorage.getItem('is_login'),
         token: localStorage.getItem('access_token')
    },
    getters: {

    }
});
