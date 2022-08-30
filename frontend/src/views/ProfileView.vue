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
  <h1>Profile Page</h1>
  <button 
    @click='switchToLogin'
  >
    Logout
  </button>
</template>

<style scoped>


</style>