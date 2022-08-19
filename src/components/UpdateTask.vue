<template>
    <div id="add-container">
        <form @submit="addTask"  id="form">
            <input type="text" placeholder="What you have to do" v-model="title" required maxlength="35" >
            <input type="number" placeholder="How many pomodoros do you need" v-model="pomodorosCount" required>
            <input type="submit" style="display:none;">
        </form>
    </div>
</template>

<script>

export default {
    name: "UpdateTask",
    data(){
        return{
            title:"",
            pomodorosCount: null
        }
    },
    methods: {
        addTask(e){
            e.preventDefault();
            let theForm= document.getElementById("form");
            theForm.reset()

            const newTask = {
                id:"",
                title : this.title,
                pomodorosCount : JSON.stringify(this.pomodorosCount),
                completed : JSON.stringify(false)
            };

            this.title = "";
            this.$emit('act-task', newTask);

        }
    }
}
</script>

<style scoped>
    #add-container{
        position: absolute;
        padding: 10px;
        width: 60%;
        margin: auto;
        margin-top: 140px;
        margin-left: 16%;

    }
    input{
        padding: 10px;
        outline: none;
        border: solid 1px #ccc;
        width: 70%;
    }
</style>