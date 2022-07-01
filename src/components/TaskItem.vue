<template>
    <div class="task" v-bind:class="{completed: task.completed || task.pomodorosCount <= 0}" >
        <div class="task-body">
            <input type="checkbox" 
            v-bind:checked="task.completed || task.pomodorosCount <= 0"
            v-on:change="checkedtask">
            {{task.title}}
        </div>
        <div class="task-action">
            <button @click="$emit('delete-task', task.id)">eliminar</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"TaskItem",
    props:["task"],
    methods:{
        checkedtask(){
            this.task.completed = !this.task.completed;
            this.task.pomodorosCount = 1;
        }
    }
}
</script>

<style scoped>
    .task{
        border-bottom: solid 1px #ccc;
        width: 350%;
        max-width: 400px;
        padding: 5px;
        font-size: large;
    }
    .task:not(.completed):hover{
        transition: all 0.7s ease 0s;
        background-color: #2b2a29;
        color: #fff;
    }
    .completed{
        color: #ccc;
        text-decoration: line-through;
    }
    .completed .task-body{
        text-decoration: line-through;
    }
    .task-body, .task-actions{
        vertical-align: top;
    }

    .task-body input{
        cursor: pointer;
    }
    .task-actions{
        padding: 0 10px;
        width: 10%;
        
    }
    
    button{
        cursor: pointer;
        border: none;
        border-radius: 20px;
        padding: 10px;
        background-color: #ccc;
        color: black;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
    

</style>