<script setup>
import {ref} from "vue";

const count = ref(0);

function increment() {
    //count.value = count.value * 100000000000000000000 + 1;
    count.value++;
}
function decrement() {
    //count.value = count.value * 100000000000000000000 + 1;
    count.value--;
}
</script>

<template>
<div>
    <h3 :class="{red: count > 10, green : count < 0}">El contador actual es: {{count}}</h3>
    <button @click="increment" type="button">Incrementar</button>
    <button @click="decrement" type="button">Decrementar</button>
</div>
</template>

<style scoped>
.red{
    color:red;
}
.green{
    color:green;
}
</style>
