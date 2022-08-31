<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Header component. You are welcome to modify this file although it might break the challenge.
 * Only modify it if you are confident of your abilities =)
 */

export default defineComponent ({
  name: 'WebsiteHeader',
  props: {
    changeText: {
      type: String,
      required: false,
      default: 'Vue is Mega Fun'
    },
  },
  data() {
    return {};  
  }
});
</script>

<template>
  <div class='flex justify-between p-5'>
    <a 
      class='text-violet-400 font-bold text-2xl'
    >
      Pogjects
    </a>
    <a class='text-violet-400'>
      {{ changeText }}
    </a>
  </div>
</template>