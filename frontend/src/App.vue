<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteHeader from './components/Header.vue';
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
    return {
    };
  },
  methods: {
  }
});
</script>

<template>
  <div class='bg-black h-screen pl-5 pr-5 overflow-auto'>
    <WebsiteHeader />
    <router-view />
    <WebsiteFooter />
  </div>
</template>