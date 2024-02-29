<script setup>
import { ref } from "vue"

const emits = defineEmits(['hide-login']);

const email = ref();
const password = ref();


function login() {
    //Toda la lógica de autenticar al usuario
    if (email.value === 'a' && password.value === 'a') {
        //Ingresa a la app
        emits('hide-login');
    } else {
        //Denegamos el acceso
        alert("Las credenciales son incorrectas")
    }
}
</script>

<template>
  <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div>
                <label for="">Email</label>
                <br>
                <input v-model="email" type="text" name="email">
            </div>
            <div>
                <label for="password">Contraseña</label>
                <br>
                <input v-model="password" type="text" name="password">
            </div>
            <br>
            <button class="button" type="submit">Ingresar</button>
        </form>
    </div>

</template>

<style scoped>
/*Login */
.login-container {
    width: 400px;
    margin: 50px auto;
    background-color: rgb(167, 199, 226);
    padding-block: 30px;
    border-radius: 30px;
    
}

.login-container>h1 {
    text-align: center;
    color: #033; /* Set a dark text color for better contrast */
      font-family: 'Arial', sans-serif; /* You can change the font-family */
      font-size: 36px; /* You can adjust the font size */
      
      border-radius: 50px; /* Make the text edges circular */
      padding: 10px; /* Optional: add padding for space around the text */
      
    
}

.login-container>button {
    display: flex;
    
}

.login-container>form {
    display: block;
    padding: 20px;
    color: #333; /* Set a dark text color for better contrast */
      font-size: 16px; /* You can adjust the font size */
      
      border-radius: 20px; /* Make the text edges rounded */
      
      padding: 20px; /* Add padding for space around the text */
      display: inline-block; /* Make the container fit the text */
      margin: 0; /* Remove default margin */
}

button {
      background-color:rgb(130, 199, 226); /* Set a background color for the button */
      color: #fff; /* Set text color */
      padding: 15px 30px; /* Add padding for better appearance */
      font-size: 18px; /* Adjust font size */
      border: none; /* Remove border */
      border-radius: 8px; /* Add border-radius for rounded edges */
      cursor: pointer; /* Add pointer cursor on hover */
      transition: background-color 0.3s; /* Add a smooth transition effect */
    }

button:hover {
      background-color: rgb(167, 199, 226); /* Change background color on hover */
    }
</style>