<script setup>
import { ref, onMounted } from "vue";
import BookCard from "../components/BookCard.vue";
import BookDetail from "../components/BookDetail.vue";

const selectedBookId = ref();

const books = ref([]);

async function getBooks() {
    // Lógica detrás de los libros de la API
    const request = await fetch('https://www.dbooks.org/api/recent');
    // Esperar hasta que la acción de arriba se complete
    const response = await request.json();
    books.value = response.books.filter((book) => !book.id.includes("X"));
    console.log(response.books)
}

onMounted(getBooks);

</script>
<template>
    <!-- Lista de libros -->
    <section v-if="!selectedBookId">
        <h2>Explorar Libros</h2>
        <div>
            <!-- Una sola instancia de un libro -->
            <BookCard @click="selectedBookId = _book.id" v-for="_book in books" :book="_book"/>
        </div>
    </section>
    <!-- Detalle de un libro -->
    <BookDetail :selected-book-id="selectedBookId" @hide-detail="selectedBookId = undefined" v-else/>
</template>

<style>

</style>