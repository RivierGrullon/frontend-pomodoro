<template>
    <div class="task" v-bind:class="{completed: task.completed == 'true' || task.completed == true}" >
        <div class="task-body">
            <input type="checkbox" 
            v-bind:checked="task.completed == 'true' || task.completed == true "
            v-on:change="checkedtask"
            >
            {{task.title}}
            <img src="../assets/aprobado.png" alt="tarea completada" class="check"
            v-bind:class="{noCompletedo: task.completed == 'false' || task.completed == false }">
            
        </div>
        <div class="task-action">
            <button @click="$emit('delete-task', task.id)">eliminar</button>
            <button id="actualizar" @click="$emit('actualizar-task', task.id)">Actualizar</button>
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
            let data = localStorage.getItem("token");
            let token = JSON.parse(data);
            let body = {
                id:this.task.id,
                title : this.task.title,
                pomodorosCount : this.task.pomodorosCount,
                completed : JSON.stringify(this.task.completed)
            }
            console.log(body)
            this.axios.put("https://stark-lake-93119.herokuapp.com/updatetask", body, {headers: { Authorization: `Bearer ${token}` }})

        },


    },
    }
</script>

<style scoped>
    .task{
        border-bottom: solid 1px #ccc;
        width: 100%;
        max-width: 600px;
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
    .noCompletedo{
        display: none;
    }
    .check:not(Completado){
        position:absolute;
    }
    .task-body, .task-actions{
        vertical-align: top;
    }

    .task-body input{
        cursor: pointer;
    }
    .task-actions{
        padding: 0 10px;
        width: 100%;
        
    }
    
    button{
        cursor: pointer;
        border: none;
        border-radius: 20px;
        padding: 10px; 
        background-color: #ccc;
        color: black;
        margin-left: 70%;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
    #actualizar{
        margin-left: 1%;
    }
    #actualizar:hover{
        background-color: rgb(61, 61, 243);
    }
    @media (max-width:1635px) {
        button{
            margin-left: 62%;
        }
    }
    @media (max-width:1635px) {
        button{
            margin-left: 60%;
        }
    }
    @media (max-width:1250px) {
        button{
            margin-left: 50%;
        }
    } 
    
    @media (max-width:1000px) {
        button{
            margin-left: 40%;
        }
    } 
    @media (max-width:800px) {
        button{
            margin-left: 60%;
        }
    } 
    @media (max-width:640px) {
        button{
            margin-left: 40%;
        }
    } 
    @media (max-width:450px) {
        button{
            margin-left: 20%;
        }
    } 
</style>