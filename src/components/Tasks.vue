<template>
    <div>
        <div v-bind:key="task.id" v-for="task in tasksList">
        <TaskItemVue  :task="task" v-on:delete-task="$emit('delete-task', task.id)" v-on:actualizar-task="$emit('actualizar', task.id)"/>
        </div>
    </div>
</template>

<script>
import TaskItemVue from './TaskItem.vue'

export default {
    name: "TaskComponent",
    props: ["tasksList"],
    components:{TaskItemVue}
}
</script>


<style>

</style>