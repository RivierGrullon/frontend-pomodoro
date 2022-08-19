<template>
    <div class="container">
        <h1>Tasks</h1>
        <task-add-vue v-if="add" v-on:add-task="addTask" />
        <UpdateTask  v-else-if="update" v-on:act-task="act"/>
        <div v-else class="add" id="aDD" >
            <button @click="addNewTask"><img src="../assets/more.png" alt=""></button>
        </div>
        <div class="tasks">
            <TasksComponent v-bind:tasksList="copyTasks" v-on:delete-task="deleteTask" v-on:actualizar="actualizar"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TasksComponent from "../components/Tasks.vue"
import TaskAddVue from "./TaskAdd.vue";
import UpdateTask from "./UpdateTask.vue"

export default {
    name: "Lefthome",
    components:{
    TasksComponent,
    TaskAddVue,
    UpdateTask
},
    data(){
        return{
            tasks:[],
            copyTasks: [],
            add: false,
            update: false,
            idUpdate:0
        }
    },
    methods:{
        addTask(task){
            let data = localStorage.getItem("token")
            let token = JSON.parse(data)
            axios.post("https://stark-lake-93119.herokuapp.com/createtask", task, {headers: { Authorization: `Bearer ${token}` }})
            .then((res)=>{
                this.add = false
                this.copyTasks = []
                this.saveTasks()
            
            })
        },
        addNewTask(){
            this.add = true
        },
        deleteTask(param){

            this.$swal.fire({
                  title: 'Do you want to delete task?',
                    showDenyButton: true,
                    confirmButtonText: 'delete',
                    denyButtonText: `Don't delete`,
                    }).then((result) => {
                    if (result.isConfirmed) {
                        let data = localStorage.getItem("token")
                        let token = JSON.parse(data)
                        axios.delete("https://stark-lake-93119.herokuapp.com/deletetask",   { data:{id:param}, headers: { Authorization: `Bearer ${token}` } })
                        .then((res)=>{
                            this.copyTasks = []
                            this.saveTasks();
                            this.update = false;
                        })
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'task has deleted',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.saveTasks()
                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info')
                    }
            })
            
        },
        saveTasks(){
            let data = localStorage.getItem("token")
            let token = JSON.parse(data)
            this.axios.get("https://stark-lake-93119.herokuapp.com/gettask", { headers: { Authorization: `Bearer ${token}` } })
            .then((res)=>{
                this.copyTasks = res.data
                localStorage.setItem("logged", true)
            })
            .catch((error)=>{
                if(error.response.data.msg === "Token has expired"){
                    this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'your session has expired!'
                    })
                    this.$emit("expired")
                    localStorage.setItem("logged", false)
                }else{
                    this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'you need to login/register to access!'
                    })
                    this.$emit("expired")
                    localStorage.setItem("logged", false)
                }
            })
        },
        actualizar(id){
            this.update = true;
            this.idUpdate = id;
            
        },
        act(param){
            let data = localStorage.getItem("token");
            let token = JSON.parse(data);
            let task = param;
            task.id = this.idUpdate;
            axios.put("https://stark-lake-93119.herokuapp.com/updatetask", task, {headers: { Authorization: `Bearer ${token}` }})
            .then((res)=>{
                this.copyTasks = []
                this.saveTasks();
                this.update = false;
            })
            
        }

    },
    created(){
        this.saveTasks();
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