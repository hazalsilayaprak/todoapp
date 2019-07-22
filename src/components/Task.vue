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
            <a @click.prevent="deleteTask"><img src="../img/delete.svg"></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            task: this.data
        }
    },
    methods: {
        deleteTask: function () {
            this.$emit('removeTask', this.task)
        },
        doneTask() {
            this.$emit('doneTask', this.task.id)
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
.form-check-input {
    display: none;
}
.box {
    width: 20px;
    height: 20px;
    background: white;
    border: 1px solid #b03225;
    border-radius: 100%;
    margin-right: 10px;
}
.box-checked{
    background: #c0392b url("../img/checked.svg") no-repeat;
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
</style>
