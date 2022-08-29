<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
//import ModalWindow from '../components/Modal.vue'
import DropdownMenu from './DropdownMenu.vue'
import ModalWindowCustom from './ModalWindow.vue';
export default defineComponent({
  name: 'LoginForm',
  components: {
    DropdownMenu,
    ModalWindowCustom
  },
  props: { 
  },
    
  data(){
    return {
      email: '',
      password: '',
      message: '',
      dropdownResult: '',
      modalVisible: false,
    }
  },
  methods: {
    async login() {
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
      this.modalVisible = true;
    },
    optionUpdate: function(value) {
      console.log(value);
      this.dropdownResult = value;
    },
    modalToggle: function() {
      this.modalVisible = !this.modalVisible;
    }
  }
});
</script>
  
<template>
  <form id='formContainer'>
    <label>Email:</label>
    <input 
      v-model='email' 
      type='email' 
      required
    >
  
    <label>Password:</label>
    <input 
      v-model='password' 
      type='password'
      required
    >
      
    <div class='submit'>
      <button 
        type='button'
        @click='login'
      >
        Login
      </button>
    </div>
  </form>

  <ModalWindowCustom
    v-show='modalVisible'
    @close='modalToggle'
  >
    <template #header>
      Login Notice
    </template>

    <template #body>
      {{ message }}
    </template>
  </ModalWindowCustom>
  <div>
    <p
      v-text='dropdownResult'
    />
    <DropdownMenu @update:option='optionUpdate' />
  </div>
</template>
  
  <style>
    form{
      max-width: 420px;
      margin: 30px auto;
      background: rgb(255, 255, 255);
      text-align: left;
      padding: 40px;
      border-radius: 10px;
    }
    label{
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
    input{
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
    }
    button{
      background: #646cff;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
    }
    .submit{
      text-align: center;
    }
  </style>