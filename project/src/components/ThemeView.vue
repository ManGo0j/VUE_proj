<template>
  <main>
    <div v-bind:class="{ dark: isDark, light: !isDark }">
      <button @click="toggleTheme">Сменить тему</button>
    </div>
    <footer>
      <router-link :to="{ name: 'home' }">To main page</router-link>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

<style>
.dark {
  background: #242424;
  color: #fff;
}

.light {
  background: #fff;
  color: #313131;
}
</style>
