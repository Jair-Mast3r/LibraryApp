<script setup></script>

<template>
    <div class="containter">
        <h2>Acerca de nosotros</h2>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ndb804mc9ns%2FTzqxOSm1CWI%2FAAAAAAAAE90%2FCGRsfd7aYFk%2Fs1600%2Fvariedad_libros_exportados_importados.jpg&f=1&nofb=1&ipt=108e85301b73b7b01dc159b533e48b3f854cfd57548966986a3a2a736a55b6d0&ipo=images"
            alt="">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus maxime cum assumenda natus eum
            sapiente
            quae quod commodi alias totam hic deserunt officiis ad, facere quam quis labore nostrum in voluptatem,
            placeat
            rerum praesentium voluptatum nisi? Itaque beatae ut corporis ad, rem voluptas temporibus praesentium fugit
            facere dolores amet? Facere, praesentium sint? Consequatur iure veniam quasi alias est optio quisquam
            tempore
            eos deserunt vel asperiores adipisci dolore earum ad doloribus enim ullam neque ex, quas molestiae, nesciunt
            debitis fuga corrupti sed. Et, aliquid, ad saepe atque delectus officia tempore sunt sequi alias nihil
            quaerat
            beatae iure, laboriosam molestias dicta ullam rerum rem illo numquam similique quae. Natus reiciendis
            reprehenderit consequuntur facere dolorem. Quasi magnam praesentium voluptate mollitia dolorem possimus
            nulla
            facilis rem, soluta omnis culpa, dolorum voluptas? Ipsum ullam maiores itaque odio, error asperiores
            aspernatur
            nemo aperiam aut adipisci maxime recusandae similique facilis reiciendis rerum quas. Quas, laudantium ut!
        </p>
    </div>
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
}

.container {
    min-width: 80%;
    display: grid;
}

img {
    max-width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #333;
    text-align: center;
    margin: 20px 0;
}

p {
    color: #665;
    font-size: 18px;
    line-height: 1.8;
    /* Increased line height for better readability */
    text-align: justify;
    padding: 0 20px;
    max-width: 90%;
    /* Set a maximum width to control the width of the text */
    margin: auto auto;
    /* Center the paragraph horizontally */
    min-width: 80%;
}

p::first-letter {
    font-size: 24px;
    font-weight: bold;
    margin-right: 4px;
}
</style>