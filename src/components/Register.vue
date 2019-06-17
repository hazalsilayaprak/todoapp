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
        <button @click.prevent="save" type="submit" class="btn btn-primary">Submit</button>
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

           axios.post(' https://mcucen-todoappapi.herokuapp.com/api/register', this.user,
            {
                headers: headers, body: this.user

            })
           .then(res => console.log(res))
           .catch(error => console.log(error))
        },
        mounted() {
            // var localUser = localStorage.getItem('user')
            // if (localUser != null) {
            //     this.items = JSON.parse(localUser)
            // }
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    max-width: 800px;
}
</style>
