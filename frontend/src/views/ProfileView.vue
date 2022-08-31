<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'ProfileView',
  emits: [ 'switch-to-login' ],
  data() {
    return {};  
  },
  methods: {
    toggleView: function() {
      this.$emit('switch-to-login');
    }
  }
});
</script>

<template>
  <div class='flex justify-between'>
    <h1 class='font-bold text-2xl text-white'>
      Profile Page
    </h1>
    <button 
      class='bg-violet-500 pt-2 pb-2 pr-4 pl-4 mt-3 shadow-md text-white rounded-full'
      @click='toggleView'
    >
      Logout
    </button>
  </div>
</template>