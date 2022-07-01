<template>

    <div class="app" >
      
      <div class="right">
        <right-register v-if="goToLogin" v-on:goHome="goToHome" v-on:registered="registered" v-on:login='login' v-on:google="signinGoogle"/>
        <home-right-vue v-else-if="home" v-on:goLogin="irLogin" v-on:finish="finish" :registered="register"  />
        <login-right  v-else-if="login"/>
      </div>

      <div class="left">
        <loginLeftVue v-if="goToLogin || logi" />
        <LeftHomeVue v-else-if="home" v-on:add="save"/>
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
import LoginRight from './components/Login-right.vue'

export default {
  components: {
    RightRegister,
    loginLeftVue,
    HomeRightVue,
    LeftHomeVue,
    LoginRight
},

  methods:{
    irLogin(){
      this.home = false
      this.goToLogin = true
    },
    goToHome(){
      this.home = true
      this.goToLogin = false

    },
    login(){
      this.home = false;
      this.goToLogin = false;
      this.logi = true;
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
      this.register = true;
      this.goToLogin = false;
      this.home = true;
      setTimeout(() => {
        alert('Sucessfully Registered')
      }, 1);
      
    },
    async signinGoogle(){
      const googleUser = await this.$GAuth.signIn();
      console.log(googleUser);
    }

  },
  data(){
    return{
      goToLogin: false,
      home:true,
      logi:false,
      tasks:[],
      register:false
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
