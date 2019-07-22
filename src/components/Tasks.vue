<template>
<div class="container">
    <div class="mt-5" v-if="showTasks">
        <h1>Tasks</h1>
        <div class="row w-100">
            <div class="col">
                <h4>Today</h4>
                <div v-for="task in tasks" :key="task.id">
                    <task :data="task" @removeTask="removeTask" @doneTask="done"/>
                </div>
            </div>
        </div>
        <div class="row w-100">
            <form action="/action_page.php">
                <button @click.prevent="showForm = true" type="button" class="btn btn-secondary" v-show="!showForm">Add New Task</button>
                <div class="form-group" v-show="showForm">
                    <label for="todo"><h4 class="mt-5">Add A New Task</h4></label>
                    <input type="text" @focus="removeBorder" class="form-control" :class="hasBorder" id="todo" v-model="message" placeholder="Task Title">
                    <div class="text text-danger" role="alert" v-if="showAlert">
                        Girdi boş olamaz!
                    </div>
                    <textarea class="form-control mt-3" v-model="description" placeholder="Task Description (Optional)"></textarea>
                    <div class="group">
                        <button type="button" @click.prevent="showForm = false" class="btn btn-outline-secondary">Cancel</button>
                        <button @click.prevent="submitted" type="button" class="btn btn-primary ml-3">Done</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
    <div v-else>
        <div class="redirect">
            <img src="../img/bored.svg" width="50" height="50">
            Bu sayfayı görüntülemek için giriş yapmanız gerekli!
            <button @click.prevent="redirected" class="btn btn-primary" >Login</button>
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
            hasBorder: '',
        }
    },
    components: {
        task: Task
    },
    methods: {
        submitted: function() {
            if (this.message != '') {
                //this.tasks = this.tasks || [];
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
            } else {
                this.showAlert = true
                this.hasBorder = 'error-border'
            }
        },
        removeBorder: function () {
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
            for( var i = 0; i < this.tasks.length; i++){
               if ( this.tasks[i].id === task.id) {
                   const index = this.tasks.indexOf(task);
                   this.tasks.splice(index, 1);
               }
            }
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
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
    /* margin: 0 auto; */
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
    margin-left: 300px;
}
.error-border{
    border: solid 1px red;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}
</style>
