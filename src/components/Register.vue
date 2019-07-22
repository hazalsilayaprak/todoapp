<template>
<div class="container">
    <form>
        <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="form-control" v-model="user.name" placeholder="Full name">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="user.email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="user.password" placeholder="Password">
        </div>
        <button @click.prevent="save" type="submit" class="btn btn-secondary">Submit</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        save: function() {

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }

            axios.post('https://mcucen-todoappapi.herokuapp.com/api/register', this.user)
                .then(response => {
                    this.$router.push('login')
                })
                .catch(error => console.log(error))
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
