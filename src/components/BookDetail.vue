<script setup>
import { onMounted, ref } from "vue";
import { firestore, auth, storage } from "@/firebase.js";
import { collection, addDoc, getDocs, query, where, QueryConstraint, FieldPath, orderBy, serverTimestamp, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const user = ref(null);

// Ocultar detalle
const emits = defineEmits(["hideDetail"]);

const props = defineProps(['selectedBookId']);

const book = ref();

async function getBook() {
  const request = await fetch("https://www.dbooks.org/api/book/" + props.selectedBookId);
  const response = await request.json();
  //Asignar la información de una variable
  book.value = response;
}

onMounted(() => {
  getBook();
  getReviews();
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  })
});



const reviews = ref([]);
const newReview = ref("");

async function getReviews() {
  try {
    const reviewsQuery = query(
      collection(firestore, "reviews"),
      where("bookId", "==", props.selectedBookId),
      orderBy("createdAt", "asc"),
    );
    const docsSnapshot = await getDocs(reviewsQuery);
    reviews.value = docsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    sideLoadImages();
    await getReviews();
  } catch (e) {
    alert(`Error al cargar reseñas: ${e.message}`);
    console.log(e)
  }
}

async function submitReview() {
  try {
    const reviewRef = collection(firestore, "reviews");
    await addDoc(reviewRef, {
      userId: user.value.uid,
      userEmail: user.value.email,
      bookId: props.selectedBookId,
      content: newReview.value,
      createdAt: serverTimestamp(),
    })
    getReviews();
    alert("Reseña enviada")
  } catch (e) {
    alert(`Error al agregar documento: ${e.message}`)
  }

}

async function deleteReview(id) {
  if (!confirm("¿Seguro que deseas borrar esta reseña?")) {
    return;
  }
  try {
    const reviewRef = doc(firestore, "reviews", id)
    await deleteDoc(reviewRef);
    await getReviews();
  } catch (e) {
    alert(`Ocurrió un error al eliminar: ${e.message}`)
  }
}

function sideLoadImages() {
  reviews.value.forEach(async (review) => {
    const imgRef = storageRef(storage, `profilePictures/${review.userId}`);
    review.userProfilePicture = await getDownloadURL(imgRef);
  })
}

async function editReview(id, content) {
  const newContent = prompt("Escribe tu nueva reseña", content)
  if (!newContent) {
    alert("Debes poner algo");
    return;
  }
  try {
    const reviewRef = doc(firestore, "reviews", id)
    await updateDoc(reviewRef, {
      content: newContent,
      updatedAt: serverTimestamp(),
    });
    await getReviews();
  } catch (e) {
    alert(`Ocurrio un error al editar: ${e.message}`)
  }

}
</script>

<template>
  <section>
    <button type="button" @click="emits('hideDetail')">Atrás</button>
    <h2>Detalle del libro</h2>
  </section>
  <div class="detail-container">
    <div>
      <img class="img" :src="book?.image" alt="" />
    </div>
    <div class="book-detial-container">
      <p><span>Título: {{ book?.title }}</span></p>
      <p><span>Subtítulo: {{ book?.subtitle }}</span></p>
      <p><span>Autores: {{ book?.authors }}</span></p>
      <p><span>Páginas: {{ book?.pages }}</span></p>
      <p><span>Año de publicación: {{ book?.year }}</span></p>
      <p><span>Editorial: {{ book?.publisher }}</span></p>
      <div>
        <a :href="book?.download" type="button">Descargar</a>
        <button type="button">Crear Reseña</button>
      </div>
    </div>
  </div>
  <div>
    <p><span>Descripción: </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. In asperiores vitae facere
      sequi numquam. Ad voluptas iure voluptatem id animi asperiores, ipsam placeat velit facilis veniam soluta, natus
      repellendus quia!</p>
  </div>
  <div>
    <h2>Reseñas</h2>
    <div class="container">
      <div v-for="review in reviews" :key="review.id" v-show="reviews.length" class="review">
        <img class="profilePictures" :src="review.userProfilePicture ?? '/placeholder_profile.png'" alt="">
        <div>
          Escrito el día {{ review.createdAt.toDate().toLocaleDateString() }}
          <span v-if="review.updatedAt">- Editado </span>
        </div>
        <p>{{ review.userEmail }}</p>
        <p>{{ review.content }}</p>
        <div id="review-actions" v-if="user.uid === review.userId">
          <button @click="editReview(review.id, review.content)">Editar</button>
          <button @click="deleteReview(review.id)">Eliminar</button>
        </div>
      </div>
      <div v-show="!reviews.length">No hay reseñas</div>
      <form @submit.prevent="submitReview">
        <textarea :placeholder="`Escribe una reseña para ${book?.title}`" v-model="newReview" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-weight: 600;
}

.detail-container {
  display: flex;
  margin: auto;
}

span {
  font-weight: 600px;
}

.img {
  width: 160px;
}

form {
  margin-top: 20px;
}

form>textarea {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(209, 209, 209);
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
}

form>button {
  cursor: pointer;
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgb(69, 146, 247);
  color: white;
  font-weight: bold;
}

.review {
  margin-top: 20px;
  padding: 10px;
  background-color: rgb(242, 242, 242);
  border-radius: 10px;
}

.review>p {
  margin-bottom: 5px;
}

.review>p:first-of-type {
  font-weight: bold;
  font-size: small;
}
</style>