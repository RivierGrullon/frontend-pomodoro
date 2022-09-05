<template>
    <div class="container">
        <div class="header">
            <div class="name">
                <h1>pomodoro</h1>
            </div>
            <img v-if="logged" @click="openCloseMenu" src="../assets/usuario-de-perfil.png"  alt="open menu" >
            <button v-else @click="$emit('goLogin')" >login</button>
        </div>

        <div class="timer">
            <h1 v-if="pomoOrRest">{{ timeDisplayPomodoro }}</h1>
            <h1 v-else>{{ timeDisplayRest }}</h1>
        </div>
        <div class="start">
            <button  v-on:click="clickStart" v-if="start">Start</button>  
            <button @click="clickPause" v-if="pause">Pausar</button>
            <button @click="clickResume" v-if="resume">Resume</button>
            <button  v-if="rest" id="restButton">Rest</button>
        </div>
        <user-menu-vue v-if="menu" v-on:close="openCloseMenu"/>
        </div>
</template>

<script>
import beep from "../assets/sound/beep.mp3"
import UserMenuVue from "./UserMenu.vue"

export default {
    name: "Home-right",
    props:["registered"],
    components:{UserMenuVue},
    data(){
        return{
        currentTimeSeconds: 25 * 60,
        restDuration: 25 * 60,
        interval:null,
        interval2:null,
        start:true,
        pause:false,
        rest:false,
        resume:false,
        pomoOrRest:true,
        beepAudio: new Audio(beep),
        logged: false,
        menu:false
        }

    },
    created(){
        this.isLogged()
        let time = JSON.parse(localStorage.getItem("time"));
        if(time == 0 || time == null){
            this.currentTimeSeconds = 25 * 60
        }else
            this.currentTimeSeconds = time;
    },
    methods:{
        isLogged(){
            let login = localStorage.getItem("logged");
            this.logged = login
        },
        beginnig(){
            this.currentTimeSeconds = 25 * 60;
            this.restDuration = 25 * 60,
            clearInterval(this.interval);
            clearInterval(this.interval2);
            this.start = true
        },

        clickStart(){
            this.interval = setInterval(() =>{
                this.currentTimeSeconds -= 1;
                let time = JSON.stringify(this.currentTimeSeconds)
                localStorage.setItem("time", time)
                if(this.currentTimeSeconds == 0){
                    this.onFinish();
                    this.coolDown();
                    this.pause = false
                    this.rest = true
                }
            }, 1000);
            this.pause = true
        },

        coolDown(){
            this.interval2 = setInterval(() => {
                this.restDuration -= 1
                if(this.restDuration == 0){
                    clearInterval(this.interval2);
                    this.beepAudio.play();
                    this.pomoOrRest = !this.pomoOrRest
                    this.rest = !this.rest;
                    this.beginnig();
                }
            }, 1000);
        },

        clickPause(){
            clearInterval(this.interval);
            clearInterval(this.interval2);
            this.resume = true;
        },
        clickResume(){
            this.clickStart()
            this.resume = false;
            this.start = false;
        },
        onFinish(){
            this.pomoOrRest = !this.pomoOrRest
            clearInterval(this.interval);
            this.beepAudio.play();
            this.restarCount()

        },
        openCloseMenu(){
            this.menu = !this.menu
        },
        restarCount(){
            let data = localStorage.getItem("token")
            let token = JSON.parse(data)
            this.axios.get("https://stark-lake-93119.herokuapp.com/gettask", { headers: { Authorization: `Bearer ${token}` } })
            .then((res)=>{
                this.copyTasks = res.data
                this.copyTasks.forEach(task => {
                    if(task.pomodorosCount == 1){
                        task.pomodorosCount = -1
                    }
                    task.pomodorosCount -= 1;
                    this.axios.put("https://stark-lake-93119.herokuapp.com/updatetask", task, {headers: { Authorization: `Bearer ${token}` }})
                });
            });
        }

    },

    computed:{
        timeDisplayPomodoro(){
            const minutes = parseInt(this.currentTimeSeconds / 60);
            const seconds = this.currentTimeSeconds % 60;
            const paddedMinutes = ("0" + minutes).slice(-2);
            const paddedseconds = ("0" + seconds).slice(-2);
            return`${paddedMinutes}:${paddedseconds}`
        },

        timeDisplayRest(){
            const minutes = parseInt(this.restDuration / 60);
            const seconds = this.restDuration % 60;
            const paddedMinutes = ("0" + minutes).slice(-2);
            const paddedseconds = ("0" + seconds).slice(-2);
            return`${paddedMinutes}:${paddedseconds}`
        }
    }
}
</script>

<style scoped>
.container{
    position: absolute;    
    width: 50%;
    margin-left: 50%;
    height: 100%;
    min-height: 695px;
    background: #C13D3D;
}



.timer{
    position: absolute;
    margin-left: 8%; 
    top: 110px;
    width: 85%; 
    max-width: 600px;
    height: 300px; 
    background: rgba(237, 163, 163, 0.22); 
    border-radius: 20px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);
}


.name{
    position: absolute;
    display: flex;
    justify-content: center;
    margin-left: 5%;
    width: 40%;
    height: 43px;
    top: 9px;
    background: #000000;
}
.name h1{
    color: #fff;
    font-weight: 400;
    font-size: 200%;

}

.header button{
    position: absolute;
    cursor: pointer;
    width: 22%;
    height: 41px;
    left: 72%;
    top: 9px;
    color: #fff;
    font-size: x-large;
    background: #000000;
    border-radius: 20px;
}

.header img{
    position: absolute;
    left: 85%;
    top: 5px;
    width: 50px;
    height: 50px;
    cursor: pointer;
}
.start{
    margin-left: 20%;
}
.start button{
    cursor: pointer;
    position: absolute;
    width: 60%;
    height: 120px;
    top: 429px;
    color: #C13D3D;
    font-size: 600%;
    background: #000000;
}

#restButton{
    cursor: no-drop;
}

.timer h1{
    display: flex;
    position: absolute;
    top: 80px;
    font-weight: 400;
    font-size: 800%;
    color: #000000;

}

@media (max-width: 800px){
    .container{
        width: 100%;
        margin-left: 0;
    }
}

@media (max-width: 450px) {
    .header img{
        left: 80%;
    }
    .timer h1{
    font-weight: 600;
    font-size: 600%;
    margin-left: 8%;
    }
    .nav li{
    font-size: 120%;
    margin-left: 7%;
    }
    .timer{
        justify-content: start;
    }

    .start button{
        font-weight: 600;
        font-size: 400%;
    }
}

</style>