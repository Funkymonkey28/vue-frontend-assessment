<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteLoginForm from '../components/LoginForm.vue'

export default {
  components: {
    WebsiteLoginForm,
  },
  methods: {
    toggleView: function() {
      this.$emit('switchToProfile');
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
        @switchToProfile='toggleView'
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