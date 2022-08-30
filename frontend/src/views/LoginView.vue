<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteLoginForm from '../components/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    WebsiteLoginForm,
  },
  emits: [ 'switch-to-profile' ],
  methods: {
    toggleView: function() {
      this.$emit('switch-to-profile');
    }
  }
}
</script>

<template>
  <main>
    <div class='home-body'>
      <h2>
        Welcome brave soul... to the world of Vue.js
      </h2>
      <WebsiteLoginForm 
        @switch-to-profile='toggleView'
      />
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
  </main>
</template>

<style>

</style>