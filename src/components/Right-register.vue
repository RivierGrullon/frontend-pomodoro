<template>
    <div class="container">
        
        <div class="header">
            <button class="login-button" @click="$emit('login')">Sign in</button>
            <button class="register-button">Sign up</button>
            <div class="tittle">
                <h1>Sign up</h1>
            </div>
        </div>


        <div>
            <div class="form">
                <div class="imgform">
                    <img src="../assets/user.png" alt="">
                    <img src="../assets/sobre-de-correo-electronico.png" alt="">
                    <img src="../assets/candado.png" alt="">
                    <img src="../assets/candado.png" alt="">
                </div>
                <form class="data" id="form" name="form" v-on:submit="save">
                    <input type="text" name="username" autocomplete="off" required maxlength="20" pattern="[a-zA-Z 0-9]+" placeholder="Username" v-model="user.username">
                    <input type="email" name="email" required class="incorrect" placeholder="Email" v-model="user.email">
                    <input type="password" minlength="8" maxlength="24" name="password" required class="incorrect" placeholder="Password" v-model="user.password">
                    <input type="password" name="confirmPassword" minlength="8" maxlength="24" required placeholder="Confirm Password" v-model="user.confirmPassword">
                    <input type="submit">
                    <div id="error">
                    </div>
                    
                </form>
            </div>
        </div>

        
    </div>
</template>

<script>

export default {
    name: "Right-register",
    data(){
        return{
            user:{
                username:"",
                email:"",
                password:"",
                confirmPassword:""
            }
        }
    },
    methods:{
        save(e){
            e.preventDefault();
            if(this.user.password == this.user.confirmPassword){
            this.axios.post("https://stark-lake-93119.herokuapp.com/createuser", this.user)
            .then((response) => {
                this.$emit("registered", response);
                })
            .catch(error => {
                let msg = error.response.data.error;
                this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg,
                })
            })
            }else{
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password do not match',
                    })
            }
        },
    }
}

</script>

<style scoped>
.container{
    position: absolute;
    width: 50%;
    height: 100%;
    min-height: 695px;
    margin-left: 50%;
    background: #C13D3D;
    transition: all 1s ease 0s;
}

.login-button{
    transition: all 1s ease 0s;
    cursor: pointer;
    width: 18%;
    height: 27px;
    margin-top: 12px;
    color: #FFF;
    font-size: 110%;
    background: #000000;
    border-radius: 0px 20px 20px 0px;
    float: right;
    margin-right: 1.8%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);
}

.register-button{
    transition: all 1s ease 0s;
    cursor: pointer;
    width: 18%;
    height: 27px;
    margin-top: 12px;
    color: white;
    font-size: 110%;
    background: #000000;
    border-radius: 20px 0px 0px 20px;
    float: right;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
     0px 4px 4px rgba(0, 0, 0, 0.5);

}
.home-button{
    transition: all 1s ease 0s;
    cursor: pointer;
    position: relative;
    width: 35%;
    height: 27px;
    margin-left: 2%;
    margin-top: 5px;
    color: white;
    font-size: 120%;
    background: #000000;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);

}

.tittle{
    position: absolute;
    background-color: #000000;
    margin-left: 15%;
    margin-top: 55px;
    width: 70%;
    height: 110px;
    color: #C13D3D;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);
}

.tittle h1{
    font-size: 500%;
}

.form{
    display: flex;
    justify-content: center;
    position: absolute;
    margin-left: 8%; 
    margin-top: 190px; 
    width: 83%; 
    max-width: 600px;
    height: 335px; 
    background: rgba(237, 163, 163, 0.22); 
    border-radius: 20px;
    display: flex;
    justify-content: start;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);
}

.form ::placeholder{
    color:rgba(2, 2, 2, 0.39);
}



.form input[type="submit"]{
    display: flex;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    position: relative;
    width: 35%;
    height: 27px;
    margin-left: 150%;
    margin-top: 25px;
    color: white;
    font-size: 120%;
    background: #000000;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);

}

.data{
    width: 45%;
}

.form input{
    display: flex;
    margin-top: 18px;
    margin-left: 20%;
    border: none;
    border-bottom: 2px solid #000;
    padding: 5%;
    background: transparent;
    outline: none;
    width: 150%;
    max-width: 375px;
    height: 15px;
    color: 000;
    font-size: 22px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
}

.imgform{
    width: 10%;
}
.imgform img{
    display: flex;
    justify-content: space-around;
    margin-left: 90%;
    width:75%;
    height: 50px;
    margin-top: 10px;
}


@media (max-width: 800px) {
    .container{
        margin-left: 0%;
        width: 100%;
    }
}

@media (max-width: 550px) {
    .form input{
        height: 25px;
    }
}

@media (max-width: 400px) {
    .form input{
        height: 30px;
    }
    .tittle h1{
    font-size: 370%;
    }

    .form input[type="submit"]{
        font-size: 80%;
    }
    .login-button{
        font-size: 80%;
    }
    .register-button{
        font-size: 80%;
    }
    .home-button{
        font-size: 80%;
    }

}

</style>