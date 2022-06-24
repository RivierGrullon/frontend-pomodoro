<template>
    <div class="container">
        <h1>Tasks</h1>
        <task-add-vue v-if="add" v-on:add-task="addTask"/>
        <div v-else class="add" id="aDD" >
            <button @click="addNewTask"><img src="../assets/more (2).png" alt=""></button>
        </div>
        <div class="tasks">
            <TasksComponent v-bind:tasksList="copyTasks" v-on:delete-task="deleteTask" />
        </div>
    </div>
</template>

<script>
import TasksComponent from "../components/Tasks.vue"
import TaskAddVue from "./TaskAdd.vue";


export default {
    name: "Lefthome",
    components:{
        TasksComponent, TaskAddVue
    },
    methods:{
        addTask(task){
            this.tasks.push(task);
            this.copyTasks = [...this.tasks]
            this.$emit("add", this.copyTasks)
            this.add = false
        },
        addNewTask(){
            this.add = true
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(task => task.id != id);
            this.copyTasks = [...this.tasks];
            this.$emit("add", this.copyTasks)
        }

    },
    data(){
        return{
            tasks:[
                {
                id: 0,
                title: "comprar ropa",
                pomodorosCount: 1,
                completed: false
                },
                {
                id: 1,
                title: "hacer cena",
                pomodorosCount: 2,
                completed: false
                },
                {
                id: 2,
                title: "lavar platos",
                pomodorosCount: 2,
                completed: false
                }
            ],
            copyTasks: [],
            add: false
        }
    },
    created(){
        this.copyTasks = [... this.tasks]
        this.$emit("add", this.copyTasks)
  }
}

</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 50%;
    height: 100%;
    min-height: 695px;
    background: #42403D;

}

.container h1{  
    position: absolute;
    font-weight: 400;
    font-size: 775%;
    color: #FFFFFF;
}

.add{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 57%;
    height: 34px;
    left: 22%;
    top: 153px;
    background: #32302E;

}

.add:hover{
    transition: all 0.7s ease 0s;
    background: #2b2a29;
    
}

.add button{
    display: flex;
    justify-content: center;
    background-color:  transparent;
    border: none;
    cursor: pointer;
}
.add img{
    margin-top: 5px;
    padding: 0px 750% 0px 755%;
}


.tasks{
    margin-top: 230px;
    width: 60%;
    height: 400px;
    overflow: scroll;
}

::-webkit-scrollbar {
display: none;
}

@media (max-width: 800px) {
    .container{
        margin-top: 695px;
        width: 100%;
    }
}
</style>