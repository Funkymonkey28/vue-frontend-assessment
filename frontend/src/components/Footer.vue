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
  <div class='bg-white w-full text-center fixed left-0 bottom-0 h-5'>
    <a> {{ footerText }} </a>
  </div>
</template>