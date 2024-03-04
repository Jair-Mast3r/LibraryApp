<script setup>
import { ref, onMounted, computed } from "vue"
import LoginPage from "./pages/LoginPage.vue"
import NavBar from "./components/NavBar.vue"
import ExplorePage from "./pages/ExplorePage.vue"
import AboutUs from "./pages/AboutUs.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase.js"

const isUserAuthenticated = computed(() => user.value !== null);
const user = ref(null);

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== null) {
            user.value = currentUser;
        } else {
            user.value = null;
        }
    })
})

// Navbar
// pageShown ("about-us" | "explore" "reviews")
const pageShown = ref("about-us");

function changePage(page) {
    pageShown.value = page;
}
</script>

<template>
    <!-- Login -->
    <LoginPage @hide-login="isUserAuthenticated = false" v-if="isUserAuthenticated === false"/>

    <!-- Contenido de la app -->
    <div v-else>
        <!-- Navbar -->
        <NavBar @change-page="changePage" @hide-login="isUserAuthenticated = true"/>
        <!-- Páginas-->
        <section class="about-us-container" v-if="pageShown === 'about-us'">
            <AboutUs v-if="pageShown === 'about-us'" @hide-login="isUserAuthenticated = true"/>
        </section>
        
        <ExplorePage v-if="pageShown === 'explore'" @hide-login="isUserAuthenticated = true"/>

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
