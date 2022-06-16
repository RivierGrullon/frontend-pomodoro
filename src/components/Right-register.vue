<template>
    <div class="container">
        
        <div class="header">
            <button class="login-button">Sign in</button>
            <button class="register-button">Sign up</button>
            <div class="tittle">
                <h1>Sign up</h1>
            </div>
        </div>


        <div>
            <div class="form">
                <div class="imgform">
                    <img src="../assets/user (2).png" alt="">
                    <img src="../assets/sobre-de-correo-electronico.png" alt="">
                    <img src="../assets/candado.png" alt="">
                    <img src="../assets/candado.png" alt="">
                </div>
                <form class="formData" action="#">
                    <input type="text">
                    <input type="text">
                    <input type="password">
                    <input type="password">
                </form>
            </div>
        </div>

        <div class="redes">      
            <button class="home-button" @click="$emit('goHome')">Home</button>
            <a href=""><img src="../assets/gramo.png" alt=""></a>
            <a href=""><img src="../assets/facebook (2).png" alt=""></a>
        </div>

        <div class="footer">
            
        </div>
    </div>
</template>

<script>

export default {
    name: "Right-register",

}

</script>

<style scoped>
.container{
    position: absolute;
    width: 50%;
    height: 100%;
    margin-left: 50%;
    background: #C13D3D;
    transition: all 10s ease 0s;
}

.login-button{
    cursor: pointer;
    width: 15%;
    height: 80%;
    margin-top: 1.8%;
    color: white;
    font-size: 120%;
    background: #000000;
    border-radius: 0px 20px 20px 0px;
    float: right;
    margin-right: 1.8%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);
}

.register-button{
    cursor: pointer;
    width: 15%;
    height: 80%;
    margin-top: 1.8%;
    color: white;
    font-size: 120%;
    background: #000000;
    border-radius: 20px 0px 0px 20px;
    float: right;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
     0px 4px 4px rgba(0, 0, 0, 0.5);

}
.home-button{
    cursor: pointer;
    position: absolute;
    width: 25%;
    height: 40%;
    margin-left: 50%;
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
    margin-top: 8%;
    width: 70%;
    height: 15%;
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
    margin-top: 27%; 
    width: 85%; 
    max-width: 600px;
    height: 275px; 
    background: rgba(237, 163, 163, 0.22); 
    border-radius: 20px;
    display: flex;
    justify-content: start;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5);
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
    width: 100%;
    max-width: 700px;
    height:15px;
    color: 000;
    font-size: 22px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
}


.imgform img{
    display: flex;
    justify-content: space-around;
    margin-left: 90%;
    width:75%;
    height: 50px;
    margin-top: 10px;
}

.redes{ 
    display: flex;
    position: relative;
    margin-top: 520px;
    margin-left: 58%;
}

</style>