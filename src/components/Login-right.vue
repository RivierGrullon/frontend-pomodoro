<template>
    <div class="container">
        
        <div class="header">
            <button class="login-button" @click="$emit('login')">Sign in</button>
            <button class="register-button">Sign up</button>
            <div class="tittle">
                <h1>Sign in</h1>
            </div>
        </div>


        <div>
            <div class="form">
                <div class="imgform">
                    <img src="../assets/user (2).png" alt="">
                    <img src="../assets/candado.png" alt="">
                </div>
                <form class="data" id="form" name="form" v-on:submit="save">
                    <input type="email" name="email" required class="incorrect" placeholder="Email">
                    <input type="password" minlength="8" maxlength="24" name="password" required class="incorrect" placeholder="Password">
                    <input type="submit">                    
                </form>
                <p class="forget">Forget password</p>
            </div>
        </div>
        
        <div class="red"> 
            <a href=""><img src="../assets/gramo.png" alt=""></a>
            <a href=""><img src="../assets/facebook (2).png" alt=""></a>
        </div>

        <div class="footer">
            
        </div>
    </div>
</template>

<script>

export default {
    name: "Login-right",
    methods:{
        save(e){
            e.preventDefault();
            const data = document.getElementById("form");
            let formData = new FormData(data);
            let formDataObject = this.toObject(formData);
            console.log(formDataObject);
        }

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
.forget{
    /* transition: all 5s ease 0s; */
    position: absolute;
    left: 70px;
    cursor: pointer;
    width: 50%;
    margin-top: 310px;
    color: rgb(0, 0, 0);
    font-size: 20px;
}

.tittle{
    position: absolute;
    background-color: #000000;
    margin-left: 12%;
    margin-top: 100px;
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
    margin-top: 280px; 
    width: 83%; 
    max-width: 600px;
    height: 350px; 
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
    margin-left: 25%;
    border: none;
    border-bottom: 2px solid #000;
    padding: 15.5%;
    background: transparent;
    outline: none;
    width: 125%;
    max-width: 375px;
    height: 15px;
    color: 000;
    font-size: 22px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
}

.imgform{
    width: 12%;
}
.imgform img{
    display: flex;
    justify-content: space-around;
    margin-left: 90%;
    width:75%;
    height: 50px;
    margin-top: 70px;
}

.red{ 
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 650px;
    height: 10vh;
    width: 15%;
    margin-left: 65vh;
    margin-right: auto;
    justify-content: space-between;
}

.red img{
    width: 100%;
    height: 50px;
}

</style>