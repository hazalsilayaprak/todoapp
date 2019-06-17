<template>
<div class="section-top">
    <div class="section-left">
        <!-- <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul> -->
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link to="/tasks" tag="li" class="btn btn-light nav-item mr-3" active-class="active" exact><a style="text-decoration: none;">ToDoApp</a></router-link>
            </ul>
            <ul class="navbar-nav">
                <router-link to="/login" tag="li" class="btn btn-primary nav-item mr-3" active-class="active"><a class="text-white">Login</a></router-link>
                <router-link to="/register" tag="li" class="btn btn-primary nav-item mr-3" active-class="active" style="float:right"><a class="text-white">Register</a></router-link>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.navbar {
    position: fixed;
    left: 15%;
    width: 85%;

}
.navbar-collapse {
    display: flex;
    justify-content: space-between;
}
.section-top {
    display: flex;
}
.section-left {
    background: #fff;
    border-right: solid 1px rgb(203, 203, 203);
    width: 15%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
/* ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #555;
  color: white;
} */
</style>
