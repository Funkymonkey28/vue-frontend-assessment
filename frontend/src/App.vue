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
  <div class='bg-black h-screen pl-5 pr-5'>
    <WebsiteHeader />
    <div class='home-body'>
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
  </div>
</template>