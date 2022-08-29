<script lang="ts">
import { defineComponent } from 'vue'
import ModalWindowCustom from './ModalWindow.vue';
export default defineComponent({
  name: 'LoginForm',
  components: {
    ModalWindowCustom
  },
  data() {
    return {
      username: '',
      password: '',
      modalMessage: '',
      modalVisible: false,
    };
  },
  methods: {
    async login() {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      const data = await res.json();
      this.modalMessage = data.message;
      this.modalVisible = true;
    },
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }
  },
});
</script>
  
<template>
  <div class='flex justify-center mt-12'>
    <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/6'>
      <div>
        <label
          class='block'
          for='username'
        >
          Username
        </label>
        <input
          id='username'
          v-model='username'
          class='border rounded my-2 py-2 px-3'
          type='text'
          placeholder='Username'
        >
      </div>
      <div>
        <label
          class='block'
          for='password'
        >
          Password
        </label>
        <input
          id='password'
          v-model='password'
          class='border rounded my-2 py-2 px-3'
          type='password'
          placeholder='Password'
        >
      </div>
      <div class='flex justify-center mt-5'>
        <button
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          type='button'
          @click='login'
        >
          Login
        </button>
      </div>
    </form>
    <ModalWindowCustom
      v-show='modalVisible'
      @close='toggleModal'
    >
      <template #header>
        Modal Header
      </template>

      <template #body>
        You can put your contents within body
      </template>

      <template #footer>
        You can put your footer here
      </template>
    </ModalWindowCustom>
  </div>
</template>