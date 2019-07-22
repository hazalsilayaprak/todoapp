<template>
<div class="section-top">
    <div class="section-left">
        <ul>
            <div class="d-flex">
                <div class="circle"></div>
                <router-link to="/tasks" tag="li" active-class="active"><a class="text-white">Todos</a></router-link>
            </div>

            <!-- <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li> -->
        </ul>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #c0392b;">
        <a class="navbar-brand"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link to="/tasks" tag="li"> </router-link>
                <router-link to="/tasks" tag="li" class="mr-3" exact>
                    <a class="logo">
                        <img src="../img/to-do-list.svg">
                        To-DoApp
                    </a>
                </router-link>
            </ul>
            <ul class="navbar-nav" v-if="!isLogin">
                <router-link to="/login" tag="li" class="btn btn-secondary nav-item mr-3"><a class="text-white">Login</a></router-link>
                <router-link to="/register" tag="li" class="btn btn-secondary nav-item mr-3" style="float:right"><a class="text-white">Register</a></router-link>
            </ul>
            <ul class="navbar-nav" v-else>
                <a href="" @click.prevent="logout"><img src="../img/power-button-off.svg" style=":hover"></a>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="dropdown-divider"></div>
                    </div>
                </li> -->
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: localStorage.getItem('is_login')
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('is_login')
            localStorage.removeItem('token')
            this.isLogin = false
            // Asagidaki komponentten yukariya veri gonderiyorum
            // "refreshPage" adi ile veri yakalanacak
            this.$emit('refreshPage', true)
        }
    },
    watch: {
        '$route': function() {
            this.isLogin = localStorage.getItem('is_login')
        }
    }
}
</script>

<style lang="css" scoped>
.navbar {
    position: fixed;
    left: 15%;
    width: 85%;
    height: 64px;
}
.navbar-collapse {
    display: flex;
    justify-content: space-between;
}
.section-top {
    display: flex;
}
.section-left {
    background: #2d3436;
    width: 15%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 130%;

}
.circle {
    width: 10px;
    height: 10px;
    background: #c0392b;
    border-radius: 100%;
    margin: 11px 10px 0 0;
}
li {
    list-style: none;
}
.d-flex {
    margin-top: 20px;
}
img {
    width: 30px;
    height: 30px;
    margin: 4px 9px 0 0;
}
.logo {
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 25px;
}
.btn {
    background-color: #2d3436;
    border-color: #2d3436;
}
.btn:hover{
    background-color: #3e484b;
}
/* .dropdown-menu {
    left: auto;
}
.navbar-expand-lg .navbar-nav .dropdown-menu {
    right: -18px;
}
.navbar-light .navbar-nav .nav-link {
    margin-right: 24px;
}
.dropdown-item{
    margin-left: 27px;
} */
</style>
