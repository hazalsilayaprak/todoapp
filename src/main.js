import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './components/App.vue'
import { routes } from './routes';
import axios from 'axios'
import { store } from './store/store.js';

Vue.prototype.$http = axios
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
