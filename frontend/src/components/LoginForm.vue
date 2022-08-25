<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LoginForm',
  props: { 

  },
  data(){
    return {
      email: '',
      password: ''
    }
  }
});
</script>

<template>
  <form>
    <label>Email:</label>
    <input type='email' v-model='email' required>

    <label>Password:</label>
    <input type='password' v-model='password' required>
    <div class='submit'>
      <button>Login</button>
    </div>
  </form>
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