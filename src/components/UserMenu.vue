<template>
    <div>
        <div class="container-menu">
            <div class="cont-menu">
                <nav>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://twitter.com/">Twitter</a>
                    <a  @click="signOut">Sign out</a>
                </nav>
                <img @click="$emit('close')" src="../assets/cancel.png" alt="close menu" >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"UserMenu",
    methods:{
        signOut(e){
            this.$swal.fire({
                title: 'are you sure you want to log out?',
                showDenyButton: true,
                confirmButtonText: 'sure',
                denyButtonText: `Cancel`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("token")  
                        window.location.reload()
                    }
                })
        }
    }
}

</script>

<style scoped>

.container-menu{
    display: flex;
    justify-content: right;
    position: absolute;
    background: rgba(0, 0, 0,0.5);
    width: 100%;
    height: 100vh;
    top:0;left:0;

}

.cont-menu{
    width: 100%;
    max-width: 250px;
    background: #42403D;
    height: 100vh;
    position: relative;
    transition: all 500ms ease;
}
.cont-menu nav{
    transform: translateY(20%);
}
.cont-menu a{
    display: block;
    text-decoration: none;
    padding: 20px;
    color: #c7c7c7;
    border-left: 5px solid transparent;
    transition: all 400ms ease;
}
.cont-menu a:hover{
    border-left: 5px solid #c7c7c7;
    background: #1f1f1f;
}
.cont-menu img{
    position: absolute;
    right: 5px;
    top: 10px;
    cursor: pointer;
}
</style>