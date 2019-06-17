import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Tasks from './components/Tasks.vue'

export const routes = [
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/tasks', component: Tasks},
];
