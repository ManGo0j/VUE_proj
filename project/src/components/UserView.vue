<template>
  <main>
    <h1>User ID {{ id }}</h1>
    <section>
      <router-link :to="{ name: 'home' }">To main page</router-link>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = computed(() => route.params.id);
</script>
