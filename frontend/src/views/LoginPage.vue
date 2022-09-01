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
  <div
    id='login-page-container'
  >
    <h2 class='text-white text-center mt-6 text-l'>
      Welcome brave soul... What lays ahead is truly fearsome...
    </h2>
    <div class='flex justify-center mt-10'>
      <WebsiteLoginForm />
    </div>
    <div class='text-center mt-10'>
      <h3 class='font-bold inline text-gray-300 text-l'>
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
  </div>
</template>