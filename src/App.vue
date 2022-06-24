<template>

    <div class="app" >
      
      <div class="right">
        <right-register v-if="goToLogin" v-on:goHome="goToHome" v-on:registered="registered"/>
        <home-right-vue v-else v-on:goLogin="irLogin" v-on:finish="finish"  />
      </div>

      <div class="left">
        <loginLeftVue v-if="goToLogin" />
        <LeftHomeVue v-else v-on:add="save" />
      </div>


    </div>

</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import RightRegister from './components/Right-register.vue';
import loginLeftVue from './components/Registro/login-left.vue';
import HomeRightVue from './components/Home-right.vue';
import LeftHomeVue from './components/Left-home.vue';

export default {
  components: {
    RightRegister,
    loginLeftVue,
    HomeRightVue,
    LeftHomeVue
},
  methods:{
    irLogin(){
      this.goToLogin = !this.goToLogin
    },
    goToHome(){
      this.goToLogin = !this.goToLogin
    },
    finish(){
      this.tasks.forEach(element => {
        element.pomodorosCount -= 1;
      });
    },
    save(data){
      this.tasks = data
    },
    registered(){
      this.goToLogin = !this.goToLogin
      setTimeout(() => {
        alert('Successfully Registered')
      }, 1);
      
    }

  },
  data(){
    return{
      goToLogin: false,
      tasks:[]
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: itim;

}



</style>
