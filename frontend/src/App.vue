<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteHeader from './components/Header.vue'
import WebsiteFooter from './components/Footer.vue'

/**
 * App component. You are welcome to modify this file.
 */
export default defineComponent({
  components: {
    WebsiteHeader,
    WebsiteFooter,

  },
  data() {
    return {};
  },
});
</script>

<template>
  <WebsiteHeader />
  <router-link to='/'>
    Go to Home
  </router-link>
  <router-link to='/ProfilePage'>
    Go to About
  </router-link>
  <WebsiteFooter />
</template>

<style scoped>
  main {
    padding: 0rem 3rem;
  }

  p {
    font-size: 1.2rem;
  }

  .home-body {
    display: flexbox;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #f5f5f5;
  }
</style>
