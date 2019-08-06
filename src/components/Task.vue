<template>
<div class="card">
    <div class="card-body">
        <div style="display: flex;">
            <label :for="'checkbox-'+task.id" @click.prevent="doneTask">
                <div class="box" :class="task.isDone ? 'box-checked' : '' "></div>
            </label>
            <input type="checkbox" class="form-check-input" :id="'checkbox-'+task.id" value="" v-if="task.isDone" checked>
            <!-- <input type="checkbox" class="form-check-input" :id="'checkbox-'+task.id" value="" v-else> -->
            <div class="task-message">
                <p v-if="task.isDone"><del>{{ task.message }}</del></p>
                <p v-else>{{ task.message }}</p>
                <span class="description">{{ task.description }}</span>
            </div>
        </div>
        <div class="img-div">
            <a @click.prevent="updateTask">
                <i class="far fa-edit"></i>
            </a>
            <a @click.prevent="deleteTask">
                <i class="far fa-trash-alt"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            task: this.data,
        }
    },
    methods: {
        deleteTask: function() {
            this.$emit('removeTask', this.task)
        },
        doneTask() {
            this.$emit('doneTask', this.task.id)
        },
        updateTask: function() {
            this.$emit('editTask', this.task)
        }
    }
}
</script>

<style lang="css" scoped>
.description {
    color: #aaa;
}
.card-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.box {
    width: 20px;
    height: 20px;
    background: white;
    border: 1px solid #FF6C6C;
    border-radius: 100%;
    margin-right: 10px;
}
.box-checked{
    background: #FF6C6C url("../img/checked.svg") no-repeat;
    background-size:12px;
    background-position: center;
}
.task-message p {
    margin-bottom: 0;
}
img {
    width: 24px;
    height: 24px;
}
@media screen (max-width:990px) {

    .box {
        width: 12px;
        height: 12px;
        background: white;
        border: 1px solid #FF6C6C;
        border-radius: 100%;
        margin-right: 6px;
    }
    .box-checked{
        background: #FF6C6C url("../img/checked.svg") no-repeat;
        background-size: 7px;
        background-position: center;
    }
    .task-message p {
        margin-bottom: 0;
    }
    img {
        width: 14px;
        height: 14px;
    }
}
.form-check-input {
    display: none;
}
.fa-trash {
    color: #273037;
}
.fa-edit {
    margin-right: 15px;
}
</style>
