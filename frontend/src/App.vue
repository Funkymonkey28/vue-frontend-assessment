<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteHeader from './components/Header.vue';
import WebsiteFooter from './components/Footer.vue'
//import ProfilePage from './views/ProfilePage.vue'
//import LoginPage from './views/LoginPage.vue';
/**
 * App component. You are welcome to modify this file.
 */
export default defineComponent({
  components: {
    WebsiteHeader,
    WebsiteFooter,
    //ProfilePage,
    //LoginPage
  },
  data() {
    return {
      profileVisible: false,
      loginVisible: true,
    };
  },
  methods: {
    toggleView: function() {
      this.profileVisible = !this.profileVisible;
      this.loginVisible = !this.loginVisible;
    }
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