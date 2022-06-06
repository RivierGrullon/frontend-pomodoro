<template>

    <div class="app" >
      <div class="right">
        <right-register />
      </div>

      <div class="left">
        <loginLeftVue />
      </div>
    </div>

</template>


<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'

import RightRegister from './components/Right-register.vue';
import loginLeftVue from './components/Registro/login-left.vue';

export default {
  components: {
    RightRegister,
    loginLeftVue
},
  methods:{
    irLogin(goToLogin){
      goToLogin = !this.goToLogin
      console.log(goToLogin)
    }
  },
  data(){
    return{
      goToLogin: false
      
    }
  }
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
