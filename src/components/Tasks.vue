<template>
<div class="container">
    <div class="mt-5" v-if="showTasks">
        <h1>Tasks</h1>
        <div class="row w-100">
            <div class="col">
                <h4>Today</h4>
                <div v-for="task in tasks" :key="task.id">
                    <task :data="task" @removeTask="removeTask" @doneTask="done" @editTask="editTask" />
                </div>
            </div>
        </div>
        <div class="row w-100">
            <form action="/action_page.php" @submit.prevent="submitted">
                <button @click.prevent="showForm = true" type="button" class="btn btn-secondary" v-show="!showForm">Add New Task</button>
                <div class="form-group" v-show="showForm">
                    <label for="todo">
                        <h4 class="mt-5">Add A New Task</h4>
                    </label>
                    <input type="text" @focus="removeBorder" class="form-control" :class="hasBorder" id="todo" v-model="message" placeholder="Task Title">
                    <textarea type="text" class="form-control" id="todo" v-model="description" placeholder="Task Description"></textarea>
                    <div class="text text-danger" role="alert" v-if="showAlert">
                        Girdi boş olamaz!
                    </div>
                    <div class="group">
                        <button type="button" @click.prevent="showForm = false" class="btn btn-outline-secondary">Cancel</button>
                        <button type="submit" class="btn btn-primary ml-3" v-if="!showUpdateButton">Done</button>
                        <button type="submit" class="btn btn-success ml-3" v-else>Update</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
    <div v-else>
        <div class="redirect">
            <img src="../img/bored.svg" width="50" height="50">
            Bu sayfayı görüntülemek için giriş yapmanız gerekli!
            <router-link to="/login" tag="button" class="btn btn-primary"><a class="text-white">Login</a></router-link>
        </div>
    </div>
</div>
</template>

<script>
import Task from './Task'
export default {
    data() {
        return {
            message: '',
            description: '',
            tasks: [

            ],
            showAlert: false,
            showTasks: false,
            showForm: false,
            showUpdateButton: false,
            hasBorder: '',
            taskForEdit: null,
        }
    },
    components: {
        task: Task
    },
    methods: {
        submitted: function() {
            if (this.message != '') {
                //this.tasks = this.tasks || [];

                if (this.showUpdateButton) {
                    for (var i = 0; i < this.tasks.length; i++) {
                        if (this.tasks[i].id === this.taskForEdit.id) {
                            const index = this.tasks.indexOf(this.taskForEdit);
                            this.tasks[index].message = this.message
                            this.tasks[index].description = this.description
                        }
                    }
                    localStorage.setItem('tasks', JSON.stringify(this.tasks))
                }
                else {
                    var newID = this.tasks.length + 1
                    this.tasks.push({
                        id: newID,
                        message: this.message,
                        description: this.description,
                        isDone: false
                    })
                    // console.log(this.tasks)
                    this.message = ''
                    this.description = ''
                    localStorage.setItem('tasks', JSON.stringify(this.tasks))
                    //this.tasks = localStorage.getItem('tasks')
                    this.showAlert = false
                }
                this.message = ''
                this.description = ''

            } else {
                this.showAlert = true
                this.hasBorder = 'error-border'
            }
        },
        removeBorder: function() {
            this.hasBorder = false
            this.showAlert = false
        },
        redirected: function() {
            this.$router.push('Login')
        },
        done: function(id) {
            for (var i = 0; i < this.tasks.length; i++) {
                if (id == this.tasks[i].id) {
                    if (this.tasks[i].isDone == true) {
                        this.tasks[i].isDone = false
                    } else {
                        this.tasks[i].isDone = true
                    }
                }
            }
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        removeTask: function(task) {
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === task.id) {
                    const index = this.tasks.indexOf(task);
                    this.tasks.splice(index, 1);
                }
            }
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        editTask: function(task) {
            this.showForm = true
            this.showUpdateButton = true
            this.taskForEdit = task
            this.message = task.message
            this.description = task.description
        },
    },
    mounted() {
        if (localStorage.getItem('is_login') !== null) {
            this.showTasks = true
        }
        var localTasks = localStorage.getItem('tasks')
        if (localTasks != null) {
            this.tasks = JSON.parse(localTasks)
        }
    },
}
</script>

<style lang="css" scoped>
    .container {
        width: 100%;
        max-width: 800px;
        min-height: 100vh;
    }
    form {
        margin-left: 17px;
        width: 100%;
    }
    .redirect {

        text-align: center;
        position: absolute;
        top: 50%;
        left: 55%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    .group {
        display: flex;
        justify-content: flex-end;
    }
    .btn {
        display: block;
        margin-top: 15px;
        margin-left: 155px;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
    }

@media screen (max-width:400px) {
    .container {
        width: 100%;
        max-width: 235px;
        min-height: 100vh;
    }
    form {
        margin-left: 10px;
        width: 100%;
    }
    .redirect {

        text-align: center;
        position: absolute;
        top: 50%;
        left: 55%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    .group {
        display: flex;
        justify-content: flex-end;
    }
    .btn {
        display: block;
        margin-top: 9px;
        margin-left: 93px;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 18px;
    }
}
.error-border{
    border: solid 1px red;
}

</style>
