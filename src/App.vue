<script setup>
import {ref} from "vue";

const count = ref(0);
</script>

<template>
<div>
    <h3>El contador actual es: {{count}}</h3>
    <button type="button">Incrementar</button>
</div>
</template>

<style scoped>

</style>
