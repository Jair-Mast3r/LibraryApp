<script setup>
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.js"
const emits = defineEmits(['changePage']);

async function singingOut() {
    await signOut(auth);
    alert("Sesión cerrada exitosamente")
}
</script>

<template>
    <nav>
        <h2>MyBooksApp</h2>
        <div>
            <span @click="emits('changePage', 'about-us')">Acerca de nosotros</span>
            <span @click="emits('changePage', 'explore')">Explorar</span>
            <span @click="emits('changePage', 'reviews')">Reseñas</span>
            <span @click="emits('changePage', 'profile')">Perfil</span>
            <span @click="singingOut">Cerrar sesión</span>
        </div>
    </nav>
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

nav {
    background-color: #282c34;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
    margin: 0;
    font-size: 24px;
    color: #61dafb;
}

div {
    display: flex;
    gap: 20px;
}

span {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s;
}

span:hover {
    color: #61dafb;
}

</style>