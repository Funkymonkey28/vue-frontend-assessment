<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteHeader from './components/Header.vue';
import WebsiteFooter from './components/Footer.vue'
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/LoginView.vue';
/**
 * App component. You are welcome to modify this file.
 */
export default defineComponent({
  components: {
    WebsiteHeader,
    WebsiteFooter,
    ProfileView,
    LoginView
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
  <main>
    <WebsiteHeader />
    <div class='home-body'>
      <h1 class='font-bold underline'>
        Hello
      </h1>
      <div v-if='loginVisible'>
        <LoginView 
          @switch-to-profile='toggleView'
        />
      </div>
      <div v-if='profileVisible'>
        <ProfileView 
          @switch-to-login='toggleView'
        />
      </div>
    </div>
    <WebsiteFooter />
  </main>
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
