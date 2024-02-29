<script setup>
defineProps(["book"]);
</script>

<template>
    <section>

        <div>
            <img :src="book.image" alt="" width="100px" />

            <div>
                <p>Titulo: {{ book.title }}</p>
                <p>Subtítulo: {{ book.subtitle }}</p>
                <p>Autores: {{ book.authors }}</p>
            </div>
        </div>

    </section>
</template>

<style></style>