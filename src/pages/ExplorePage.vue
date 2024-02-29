<script setup>
import { ref, onMounted } from "vue";

const books = ref([]);

async function getBooks() {
    // Lógica detrás de los libros de la API
    const request = await fetch('https://www.dbooks.org/api/recent');
    // Esperar hasta que la acción de arriba se complete
    const response = await request.json();
    books.value = response.books;
    console.log(response.books)
}

onMounted(getBooks);

// const books = [
//     {
//         title: "A",
//         subtitle: "este es el libro A",
//         authors: "autor principal"
//     },
//     {
//         title: "B",
//         subtitle: "este es otro libro",
//         authors: "autor 2"
//     },
//     {
//         title: "C",
//         subtitle: "el tercer libro",
//         authors: "autro 1"
//     },
// ]
</script>
<template>
    <section>
        <h2>Explorar libros</h2>
        <div>
            <div v-for="book in books" class="book-card">
                <img :src="book.image" alt="" width="100px"/>
            
            <div>
                <p>Titulo: {{ book.title }}</p>
                <p>Subtítulo: {{ book.subtitle }}</p>
                <p>Autores: {{ book.authors }}</p>    
            </div>
            </div>
        </div>
    </section>
</template>

<style>
.book-card {
    margin: 20px auto;
    width: 80%;

}

.book-card > img{

}

.book-card > div{

}
</style>