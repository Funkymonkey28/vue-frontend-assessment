<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'WebsiteFooter',
  props: {
    footerText: {
      type: String,
      required: false,
      default: 'Made with love...'
    },
  },
  data() {
    return {};  
  }
});
</script>

<template>
  <div class='footer-container'>
    <a>{{footerText}}</a>
  </div>
</template>

<style scoped>
  .footer-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fefefe;
  }

</style>