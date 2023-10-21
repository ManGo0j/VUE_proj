<template>
  <main>
    <div class="red-square"></div>
    <footer>
      <router-link :to="{ name: 'home' }">To main page</router-link>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    greet(event) {
      alert(`Count: ${this.counter}`);
      if (event) {
        alert("event.target.tagName");
      }
    },
  },
};
</script>

<style scoped>
.red-square {
  width: 40px;
  height: 40px;
  background-color: red;
}
</style>
