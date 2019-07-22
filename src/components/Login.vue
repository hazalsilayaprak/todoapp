<template>
<div class="container">
    <form>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="input.username" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="input.password" placeholder="Password">
        </div>
        <button @click.prevent="save" type="submit" class="btn btn-secondary">
            <i class="fas fa-pulse fa-spinner" v-if="loading"></i>
            Submit
        </button>
        <div class="alert alert-danger" role="alert" v-if="showError">
          E-mail or password is wrong
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            input: {
                grant_type: 'password',
                client_id: 2,
                client_secret: 'SWadHJA0ABk3HvTpBraSrLJK6WCTYdUwlsOlSa2b',
                username: '',
                password: '',
                // scope: '*'
            },
            loading: false,
            showError: false,
        }
    },
    methods: {
        save: function() {
            this.loading = true
            axios.post('https://mcucen-todoappapi.herokuapp.com/oauth/token', this.input)
            .then(response => {
                // this.$store.state.token = response.data.access_token
                // this.$store.state.isLogin = true
                localStorage.setItem('is_login', true)
                localStorage.setItem('access_token', true)
                this.$router.push('tasks')
            })
            .catch(error => {
                console.log(error)
                this.showError = true

            })
            .finally(() => this.loading = false )
        },
    },
    mounted() {
        if (localStorage.getItem('is_login')) {
            this.$router.push('tasks')
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    max-width: 800px;
}
button {
    background-color: #2d3436;
    border-color: #2d3436;
}
button:hover {
    background-color: #1d2224;
}
button:active {
    background-color: #1d2224;
}
</style>
