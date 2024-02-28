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
                <br>
                <input v-model="email" type="text" name="email">
            </div>
            <div>
                <label for="password">Contraseña</label>
                <br>
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
        <section class="about-us-container" v-if="pageShown === 'about-us'">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ndb804mc9ns%2FTzqxOSm1CWI%2FAAAAAAAAE90%2FCGRsfd7aYFk%2Fs1600%2Fvariedad_libros_exportados_importados.jpg&f=1&nofb=1&ipt=108e85301b73b7b01dc159b533e48b3f854cfd57548966986a3a2a736a55b6d0&ipo=images" alt="">
            <h2>Acerca de nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus maxime cum assumenda natus eum sapiente quae quod commodi alias totam hic deserunt officiis ad, facere quam quis labore nostrum in voluptatem, placeat rerum praesentium voluptatum nisi? Itaque beatae ut corporis ad, rem voluptas temporibus praesentium fugit facere dolores amet? Facere, praesentium sint? Consequatur iure veniam quasi alias est optio quisquam tempore eos deserunt vel asperiores adipisci dolore earum ad doloribus enim ullam neque ex, quas molestiae, nesciunt debitis fuga corrupti sed. Et, aliquid, ad saepe atque delectus officia tempore sunt sequi alias nihil quaerat beatae iure, laboriosam molestias dicta ullam rerum rem illo numquam similique quae. Natus reiciendis reprehenderit consequuntur facere dolorem. Quasi magnam praesentium voluptate mollitia dolorem possimus nulla facilis rem, soluta omnis culpa, dolorum voluptas? Ipsum ullam maiores itaque odio, error asperiores aspernatur nemo aperiam aut adipisci maxime recusandae similique facilis reiciendis rerum quas. Quas, laudantium ut!</p>
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

/* Acerca de nosotros */
.about-us-container {
    margin: auto;
    max-width: 50%;
}
.about-us-container > h2{
    text-align: center;
    font-weight: 600;
}
.about-us-container > img {
    width: 100%;
}
</style>
