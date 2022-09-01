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
  }
}
</script>

<template>
  <main>
    <h2 class='text-white text-center'>
      Welcome brave soul... to the world of Vue.js
    </h2>
    <div class='flex justify-center'>
      <WebsiteLoginForm />
    </div>

    <div class='text-center'>
      <h3 class='font-bold inline text-gray-300'>
        Link to challenge:
      </h3>
      <a
        href='https://github.com/Funkymonkey28/vue-frontend-assessment'
        target='_blank'
        class='text-violet-400'
      >
        projects-frontend-assessment
      </a>
    </div>
  </main>
</template>