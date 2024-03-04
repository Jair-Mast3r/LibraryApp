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
                <span @click="singingOut">Cerrar sesión</span>
            </div>
        </nav>
</template>

<style scoped>
/* Navbar */
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gainsboro;
    width: 100%;
}

nav > div > span {
    margin-right: 20px;
}
nav > div > span:hover {
    color:aliceblue;
}
</style>