<template>
<div class="card">
    <div class="card-body">
        <label :for="'checkbox-'+task.id">
            <div class="box" :class="task.isDone ? 'box-checked' : '' ">
            </div>
        </label>
        <input type="checkbox" class="form-check-input" :id="'checkbox-'+task.id" value="" v-if="task.isDone" checked>
        <!-- <input type="checkbox" class="form-check-input" :id="'checkbox-'+task.id" value="" v-else> -->
        <div class="task-message">
            <p v-if="task.isDone"><del>{{ task.message }}</del></p>
            <p v-else>{{ task.message }}</p>
            <span class="description">{{ task.description }}</span>
        </div>
        <br>
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
    }
}
</script>

<style lang="css" scoped>
.description {
    color: #aaa;
}
.card-body {
    width: 100%;
}
.form-check-input {
    display: none;
}
.box {
    width: 20px;
    height: 20px;
    background: white;
    border: 1px solid rgb(149, 149, 149);
    margin-right: 10px;
}
.box-checked{
    background: url("../img/check-mark.svg") no-repeat;
    background-size:12px;
    background-position: center;
}
.card-body {
    display: flex;
    align-items: center;
}
.task-message p {
    margin-bottom: 0;
}

</style>
