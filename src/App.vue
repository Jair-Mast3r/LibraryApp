<script setup>
import { ref } from "vue"
const email = ref();
const password = ref();

const isLoginShown = ref(true);

function login() {
    //Toda la lógica de autenticar al usuario
    if(email.value === 'jojo' && password.value === 'jojo') {
        //Ingresa a la app
        isLoginShown.value = false;
    } else {
        //Denegamos el acceso
        alert("Las credenciales son incorrectas")
    }
}

</script>

<template>
    <div v-if="isLoginShown === true" class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div>
                <label for="">Email</label>
                <input v-model="email" type="text" name="email">
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input v-model="password" type="text" name="password">
            </div>
            <button type="submit">Ingresar</button>
        </form>
    </div>

<!-- Contenido de la app -->
<div v-else>
    <!-- Página de acerca de nosotros -->
    <!-- Página de reseñas -->
    <!-- Página de explorar-->
    <h3>Estás dentro de la página</h3>
</div>
</template>



<style scoped>
.login-container {
    width: 400px;
    margin: 50px auto;
    background-color: rgb(167, 199, 226);
    padding-block: 30px;
    border-radius: 30px;
}

.login-container > h1{
    text-align: center;
}


.login-container > form{
    display: block;
    padding: 20px;
}
</style>
