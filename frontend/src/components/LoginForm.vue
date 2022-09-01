<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import ModalWindowCustom from './Modals/ModalWindow.vue';
export default defineComponent({
  name: 'LoginForm',
  components: {
    ModalWindowCustom,
  },
  emits: [ 'switch-to-profile' ],    
  data(){
    return {
      email: '',
      password: '',
      message: '',
      loginSuccess: false,
      dropdownResult: '',
      modalVisible: false,
    }
  },
  methods: {
    async login() {
      this.loginSuccess = false
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.email,
          password: this.password,
        }),
      });
      
      const data = await response.json();
      this.message = data.message;
      if (data.status == 200){
        this.loginSuccess=true;
        this.$emit('switch-to-profile');
      }
      this.modalVisible = true;
    },
    modalToggle: function() {
      this.modalVisible = !this.modalVisible;
    },
  },
});
</script>
  
<template>
  <div 
    id='formContainer'
    class='max-w-fit bg-white p-5 rounded-2xl'
  >
    <h3
      class='text-gray-400 mb-2 text-left uppercase font-bold text-sm'
    >
      Email:
    </h3>
    <input 
      id='email_input'
      v-model='email' 
      type='email' 
      required
    >
  
    <h3
      class='text-gray-400 mt-5 mb-2 text-left uppercase font-bold text-sm'
    >
      Password:
    </h3>
    <input 
      id='password_input'
      v-model='password' 
      type='password'
      required
    >
      
    <div class='text-center'>
      <button 
        type='button'
        class='bg-violet-500 pt-2 pb-2 pr-4 pl-4 mt-3 shadow-md text-white rounded-full'
        @click='login'
      >
        Login
      </button>
    </div>
  </div>

  <ModalWindowCustom
    v-show='modalVisible'
    @close='modalToggle'
  >
    <template #header>
      <div
        class='text-center text-lg font-serif font-bold'
      >
        {{ message }}
      </div>
    </template>

    <template #body>
      <div
        v-if='loginSuccess'
        class='text-center text-lg font-serif'
      >
        Don't click the red button!!! &#128556;
      </div>
      <div
        v-if='!loginSuccess'
        class='text-center text-lg font-serif'
      >
        Good, turn back while you still can &#128519;
      </div>
    </template>

    <template #footer>
      <router-link
        v-if='loginSuccess'
        to='/profile'
        class='bg-rose-600 p-1 mt-3 shadow-md text-white rounded-full text-center text-lg'
      > 
        Are you sure???
      </router-link>
    </template>
  </ModalWindowCustom>
</template>