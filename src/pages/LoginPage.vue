<script setup>
import { ref } from "vue"
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";

const emits = defineEmits(['hide-login']);

const email = ref();
const password = ref();

async function login() {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        emits("hide-login")
    } catch (e) {
        alert('Ocurrió un error ${e.message}');
    }
}

async function signup() {
    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert("Cuenta creada exitosamente");
    } catch (e) {
        alert(`${e.message}`);
    }
}
</script>

<template>
  <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent>
            <div>
                <label for="">Email</label>
                <br>
                <input v-model="email" type="text" name="email">
            </div>
            <div>
                <label for="password">Contraseña</label>
                <br>
                <input v-model="password" type="text" name="password">
            </div>
            <br>
            <button class="button" @click="login">Ingresar</button>
            <button class="button" @click="signup">Crear cuenta</button>
        </form>
    </div>

</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #282c34;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background-color: #444;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centering from top to bottom and left to right */
}

h1 {
    color: #FFFFFF;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    margin-top: 10px;
    color: #61dafb;
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #61dafb;
    border-radius: 4px;
}

button {
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    background-color: #61dafb;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3e8ed0;
}

</style>