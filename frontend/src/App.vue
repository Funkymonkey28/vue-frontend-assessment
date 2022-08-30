<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteHeader from './components/Header.vue'
import WebsiteFooter from './components/Footer.vue'
import WebsiteLoginForm from './components/LoginForm.vue'
import ProfileView from './views/ProfileView.vue'
/**
 * App component. You are welcome to modify this file.
 */
export default defineComponent({
  components: {
    WebsiteHeader,
    WebsiteFooter,
    WebsiteLoginForm,
    ProfileView,
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
    <WebsiteHeader/>
    <div class='home-body'>
      <h2>
        Welcome brave soul... to the world of Vue.js
      </h2>
      <div v-if='loginVisible'>
        <WebsiteLoginForm 
          @switchToProfile='toggleView'/>
      </div>
      
      <div v-if='profileVisible'>
        <ProfileView 
          @switchToLogin='toggleView'/>
      </div>
      
      <h3>
        Link to challenge:
        <a
          href='https://github.com/Darianlmj/projects-frontend-assessment'
          target='_blank'
        >
          projects-frontend-assessment
        </a>
      </h3>
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
