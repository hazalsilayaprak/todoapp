<template>
<div class="section-top">
    <div class="section-left" v-if="isLogin">
        <ul id="list">
            <router-link to="/tasks" tag="li" active-class="active" class="d-flex align-items-center">
                <div class="circle" style="background: #FE6C6B;"></div>
                <a class="text-white">Todos</a>
            </router-link>
            <router-link to="/tasks" tag="li" active-class="active" class="d-flex align-items-center">
                <div class="circle" style="background: #20D7C0;"></div>
                <a class="text-white">Projects Name</a>
            </router-link>
            <router-link to="/tasks" tag="li" active-class="active" class="d-flex align-items-center">
                <div class="circle" style="background: #5CA4D3;"></div>
                <a class="text-white">Presentation</a>
            </router-link>
        </ul>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light" :class="isLogin ? 'navbarLogin' : ''" style="background-color: #FF6C6C;">
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
                <a href="" @click.prevent=""><img src="../img/settings.svg"> </a>
                <div class="line"></div>
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
            isLogin: localStorage.getItem('is_login'),
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
        z-index: 999999;
        height: 64px;
        width: 100%;
        left: 0;
    }
    .navbarLogin {
        width: 80%;
        left: 20%;
    }
    .navbar-collapse {
        display: flex;
        justify-content: space-between;
    }
    .section-top {
        display: flex;
    }
    .section-left {
        background: #273037;
        width: 20%;
        height: 100vh;
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        font-size: 100%
    }
    .circle {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        margin-right: 10px;
    }
    .d-flex {
        margin-top: 20px;
    }
    img {
        width: 16px;
        height: 16px;
        margin: 4px 9px 0 0;
    }
    .logo {
        display: flex;
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        align-items: center;
    }
    .line {
        width: 2px;
        height: 32px;
        background: #E05F5C;
        margin: 0 20px 0 10px;
    }

/* @media screen and (max-width:400px) {
    .navbar {
        position: fixed;
        z-index: 999999;
        left: 15%;
        width: 85%;
        height: 38px;
    }
    .navbar-collapse {
        display: flex;
        justify-content: space-between;
    }
    .section-top {
        display: flex;
    }
    .section-left {
        background: #273037;
        width: 15%;
        height: 100vh;
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        font-size: 12px;
    }
    div.section-left {

    }
    .circle {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        margin-right: 6px;
    }
    .d-flex {
        margin-top: 12px;
    }
    img {
        width: 9px;
        height: 9px;
        margin: 4px 9px 0 0;
    }
    .logo {
        display: flex;
        text-decoration: none;
        color: #fff;
        font-size: 15px;
        align-items: center;
    }
    .line {
        width: 2px;
        height: 19px;
        background: #E05F5C;
        margin: 0 12px 0 6px;
    }
} */
li {
    list-style: none;
}
.btn {
    background-color: #2d3436;
    border-color: #2d3436;
}
.btn:hover{
    background-color: #3e484b;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
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
