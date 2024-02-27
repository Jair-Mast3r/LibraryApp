<script setup>
import { ref } from "vue"
const email = ref();
const password = ref();

const isLoginShown = ref(true);

function login() {
    //Toda la lógica de autenticar al usuario
    if (email.value === 'a' && password.value === 'a') {
        //Ingresa a la app
        isLoginShown.value = false;
    } else {
        //Denegamos el acceso
        alert("Las credenciales son incorrectas")
    }
}

// Navbar
// pageShown ("about-us" | "explore" "reviews")
const pageShown = ref("about-us");

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
        <nav>
            <h2>MyBooksApp</h2>
            <div>
                <span @click="pageShown = 'about-us'">Acerca de nosotros</span>
                <span @click="pageShown = 'explore'">Explorar</span>
                <span @click="pageShown = 'reviews'">Reseñas</span>
                <span @click="isLoginShown = true">Cerrar sesión</span>
            </div>
        </nav>
        <!-- Páginas-->
        <section v-if="pageShown === 'about-us'">
            <h2>Acerca de nosotros</h2>
        </section>
        <section v-if="pageShown === 'explore'">
            <h2>Explorar</h2>
        </section>
        <section v-if="pageShown === 'reviews'">
            <h2>Reseñas</h2>
        </section>
    </div>
</template>



<style scoped>
/*Login */
.login-container {
    width: 400px;
    margin: 50px auto;
    background-color: rgb(167, 199, 226);
    padding-block: 30px;
    border-radius: 30px;
}

.login-container>h1 {
    text-align: center;
}


.login-container>form {
    display: block;
    padding: 20px;
}
/*Login */
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
