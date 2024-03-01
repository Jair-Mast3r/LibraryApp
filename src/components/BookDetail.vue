<script setup>
import { onMounted, ref } from "vue";
const props = defineProps(['selectedBookId']);

const book = ref();

async function getBook() {
    const request = await fetch("https://www.dbooks.org/api/book/" + props.selectedBookId);
    const response = await request.json();
    //Asignar la información de una variable
    book.value = response;
}

onMounted(getBook);
</script>

<template>
    <section><h2>Detalle del libro</h2></section>
    <div class="detail-container">
        <img class="img" :src="book?.image" alt="" />
        <div class="book-detial-container">
            <p><span>Título: {{ book?.title }}</span></p>
            <p><span>Subtítulo: {{ book?.subtitle }}</span></p>
            <p><span>Autores: {{ book?.authors }}</span></p>
            <p><span>Páginas: {{ book?.pages }}</span></p>
            <p><span>Año de publicación: {{ book?.year }}</span></p>
            <p><span>Editorial: {{ book?.publisher }}</span></p>
            <button type="button">Descargar</button>
            <button type="button">Crear Reseña</button>
        </div>
    </div>
    <div>
        <p><span>Descripción: </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. In asperiores vitae facere sequi numquam. Ad voluptas iure voluptatem id animi asperiores, ipsam placeat velit facilis veniam soluta, natus repellendus quia!</p>
    </div>
</template>

<style scoped>
h2 {
    text-align: center;
    font-weight: 600;
}
detail-container {
    margin-top: 30px;
    display: flex;
}

img {
    width: 50%;
}

.detail-container > div{
    width: 50%;
}

.book-detial-container {
    
}

span {
    font-weight: 600px;
}

.img {
    width: 100px;
}
</style>
