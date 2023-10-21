<template>
  <main>
    <h1>Settings</h1>
    <section v-if="route.name === 'settings'">
      <button @click="router.push({ name: 'settings-profile' })">
        To profile settings
      </button>
    </section>
    <section><router-view /></section>
    <footer>
      <router-link :to="{ name: 'home' }">To main page</router-link>
    </footer>
  </main>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>


