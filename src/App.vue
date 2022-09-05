<template>

    <div class="app" >
      
      <div class="right">
        <right-register v-if="goToLogin" v-on:registered="registered" v-on:login='login' />
        <home-right-vue v-else-if="home" v-on:goLogin="login" />
        <login-right  v-else-if="login" v-on:goRegister="irLogin" v-on:loged="logged"/>
      </div>  
      
      <div class="left">
        <loginLeftVue v-if="goToLogin || logi" />
        <LeftHomeVue v-else-if="home" v-on:expired="login"/>
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
  data(){
    return{
      goToLogin: false,
      home:true,
      logi:false,
      register:false
    }
  },
  methods:{
    irLogin(){
      this.home = false;
      this.logi = false;
      this.goToLogin = true;
    },
    goToHome(){
      this.home = true
      this.goToLogin = false

    },
    login(){
      this.home = false;      
      this.logi = true;
      this.goToLogin = false;
    },
    save(data){
      this.tasks = data
    },
    logged(msg){
      this.logi = false;
      this.goToLogin = false;
      this.home = true;
      setTimeout(() => {
        this.$swal.fire(
            'Good job!',
            "you have successfully logged in",
            'success'
          );
      }, 1);
    },
    registered(response){
      this.register = false;
      this.goToLogin = false;
      this.home = true;
      setTimeout(() => {
        let msg = response.data.msg;
        this.$swal.fire(
            'Good job!',
            msg,
            'success'
          );
      }, 1);
      
    },
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
