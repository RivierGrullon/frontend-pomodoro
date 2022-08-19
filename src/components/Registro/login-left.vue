
<template>
    <div class="container">
        <div class="banner">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login-left"
}
</script>

<style scoped>
.container{
    display: flex;
    position: absolute;
    width: 50%;
    height: 100%;
    min-height: 695px;
    background: #42403D;
    transition: all 1s ease 0s;
}

.banner{
    display: flex;
    position: relative;
    margin: auto;
    margin-top: 10%;
    width: 75%;
    max-width: 510px;
    height: 73.5%;
    background-image: url("../../assets/tecnica-pomodoro.png");
    transition: all 1s ease-in-out;
    animation: banner 12s infinite linear;
}

@keyframes banner {
    0%{
        background-image: url("../../assets/tecnica-pomodoro.png");
    }
    25%{
        background-image: url("../../assets/tecnica-pomodoro.png")
    }
    26%{
        background-image: url("../../assets/tecnica.png");
    }
    50%{
        background-image: url("../../assets/tecnica.png")
    }
    51%{
        background-image: url("../../assets/pomodoro.png");
    }
    75%{
        background-image: url("../../assets/pomodoro.png")
    }
    76%{
        background-image: url("../../assets/bannerpomo.png");
    }
    100%{
        background-image: url("../../assets/bannerpomo.png")
    }
}

@media (max-width: 800px) {
    .container{
        width: 100%;
        margin-top: 695px;
    }
}

</style>