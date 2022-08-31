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
  <h1>Profile Page</h1>
  <button 
    @click='toggleView'
  >
    Logout
  </button>
</template>

<style scoped>


</style>