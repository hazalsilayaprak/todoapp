<template>
<div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ToDoApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link to="/" tag="li" class="btn btn-primary nav-item mr-3" active-class="active" exact><a class="text-white">Home</a></router-link>
                <router-link to="/login" tag="li" class="btn btn-primary nav-item mr-3" active-class="active"><a class="text-white">Login</a></router-link>
                <router-link to="/register" tag="li" class="btn btn-primary nav-item mr-3" active-class="active"><a class="text-white">Register</a></router-link>
                <router-link to="/tasks" tag="li" class="btn btn-primary nav-item mr-3" active-class="active"><a class="text-white">Tasks</a></router-link>
            </ul>
        </div>
    </nav>
    <ul class="nav nav-pills">



    </ul>
</div>
</template>

<script>
export default {}
</script>
