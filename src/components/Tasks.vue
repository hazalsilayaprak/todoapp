<template>
<div class="container">
    <h1>Tasks</h1>
    <div class="row w-100">
        <div class="col">
            <h4>Today</h4>
            <div v-for="task in tasks">
                <div @click.prevent="done(task.id)">
                    <task :data="task" />
                </div>
            </div>
        </div>
    </div>
    <div class="row w-100">
        <form action="/action_page.php">
            <div class="form-group">
                <label for="todo">ToDo</label>
                <input type="text" class="form-control" id="todo" v-model="message">
                <textarea class="form-control" v-model="description"></textarea>
            </div>
            <button @click.prevent="submitted" type="submit" class="btn btn-primary">Submit</button>
            <div class="alert alert-danger" role="alert" v-if="showAlert">
                Girdi boş olamaz!
            </div>
        </form>
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
            showAlert: false
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
            }

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
        }
    },

    mounted() {
        var localTasks = localStorage.getItem('tasks')
        if (localTasks != null) {
            this.tasks = JSON.parse(localTasks)
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
