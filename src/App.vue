<script setup>
import { ref } from "vue"
import LoginPage from "./pages/LoginPage.vue"
import NavBar from "./components/NavBar.vue"
import ExplorePage from "./pages/ExplorePage.vue"
import AboutUs from "./pages/AboutUs.vue";

const isLoginShown = ref(false);

// Navbar
// pageShown ("about-us" | "explore" "reviews")
const pageShown = ref("about-us");

function changePage(page) {
    pageShown.value = page;
}
</script>

<template>
    <!-- Login -->
    <LoginPage @hide-login="isLoginShown = false" v-if="isLoginShown === true"/>

    <!-- Contenido de la app -->
    <div v-else>
        <!-- Navbar -->
        <NavBar @change-page="changePage" @hide-login="isLoginShown = true"/>
        <!-- Páginas-->
        <section class="about-us-container" v-if="pageShown === 'about-us'">
            <AboutUs v-if="pageShown === 'about-us'" @hide-login="isLoginShown = true"/>
        </section>
        
        <ExplorePage v-if="pageShown === 'explore'" @hide-login="isLoginShown = true"/>

        <section v-if="pageShown === 'reviews'">
            <h2>Reseñas</h2>
        </section>
    </div>
</template>



<style scoped>
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
