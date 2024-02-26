<script setup>
import {ref} from "vue";

const count = ref(0);

function increment() {
    count.value++;
}
</script>

<template>
<div>
    <h3>El contador actual es: {{count}}</h3>
    <button @click="increment" type="button">Incrementar</button>
</div>
</template>

<style scoped>

</style>
