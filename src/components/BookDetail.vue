<script setup>

</script>

<template>
    <section><h2>Detalle del libro</h2></section>
    <div class="detail-container">
        <img src="" alt="">
        <div>
            <p><span>Título</span></p>
            <p><span>Subtítulo: </span></p>
            <p><span>Autores: </span></p>
            <p><span>Páginas: </span></p>
            <p><span>Año de publicación: </span></p>
            <p><span>Editorial: </span></p>
            <button type="button">Descargar</button>
            <button type="button">Cerrar Reseña</button>
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

span {
    font-weight: 600px;
}
</style>
