<template>
    <div class="container">
        <div class="header">
            <div class="name">
                <h1>pomodoro</h1>
            </div>
            <button @click="$emit('goLogin')">login</button>
        </div>

        <div class="timer">
            <div class="nav">
                <nav>
                    <li>
                        <ol>Pomodoro</ol>
                        <ol>Record</ol>
                        <ol>Setting</ol>
                    </li>
                </nav>
            </div>
            <h1 v-if="pomoOrRest">{{ timeDisplayPomodoro }}</h1>
            <h1 v-else>{{ timeDisplayRest }}</h1>
        </div>
        <div class="start">
            <button  v-on:click="clickStart" v-if="start">Start</button>  
            <button @click="clickPause" v-if="pause">Pausar</button>
            <button @click="clickResume" v-if="resume">Resume</button>
            <button  v-if="rest" id="restButton">Rest</button>
        </div>
    </div>
</template>

<script>
import beep from "../assets/sound/beep.mp3"
export default {
    name: "Home-right",
    data(){
        return{
        currentTimeSeconds: 0.1 * 60,
        restDuration: 0.1 * 60,
        interval:null,
        interval2:null,
        start:true,
        pause:false,
        rest:false,
        resume:false,
        pomoOrRest:true,
        beepAudio: new Audio(beep),
        }

    },
    methods:{
        beginnig(){
            this.currentTimeSeconds = 0.1 * 60;
            this.restDuration = 0.1 * 60,
            clearInterval(this.interval);
            clearInterval(this.interval2);
            this.start = true
        },

        clickStart(){
            this.interval = setInterval(() =>{
                this.currentTimeSeconds -= 1;
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
            this.$emit("finish");
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
    height: 695px;
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
.nav{
    width: 100%;
    margin-top: 2%;
    width: 75%;
}
.nav li{
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 95%;
    font-size: 150%;
    text-decoration: none;
    list-style: none;
}
.nav ol{
    border-radius: 20px;
    padding: 10px;
}

.nav ol:hover{
    transition: all 0.7s ease 0s;
    background-color:#000;
    color: #fff;
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

@media (max-width: 800px) {
    .container{
        width: 100%;
        margin-left: 0;
    }
}

@media (max-width: 450px) {
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