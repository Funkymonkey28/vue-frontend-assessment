<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Header component. You are welcome to modify this file although it might break the challenge.
 * Only modify it if you are confident of your abilities =)
*/

export default defineComponent ({
  name: 'ProfileView',
  data() {
    return {};  
  },
  methods: {
    switchToLogin: function() {
      this.$emit('switchToLogin');
    }
  }
});
</script>

<template>
  <div class='header-container'> 
    <h1>Profile Page</h1>
    <button 
      @click='switchToLogin'> Go back to Login</button>
  </div>
</template>

<style scoped>
 .header-container {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    box-sizing: border-box;
  }

</style>