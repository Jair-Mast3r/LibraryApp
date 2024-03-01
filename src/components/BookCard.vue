<script setup>
defineProps(["book"]);
</script>

<template>
    <section class="book-card">

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

<style>
.book-card {
    margin: 20px auto;
    width: 80%;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .book-card img {
    width: 100px;
    height: auto;
    margin-right: 16px;
    border-radius: 4px;
  }

  .book-card div {
    flex: 1;
  }

  .book-card p {
    margin: 8px 0;
  }
</style>