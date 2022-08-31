<!-- Ignore this component. Just me trying to learn how to emit stuff from child component to parent component :)-->
<template>
  <select
    id='dropdown'
    v-model='selectedOption'
    name='dropdown'
    @change='optionChanged'
  >
    <option value='Option 1'>
      Option 1
    </option>
    <option value='Option 2'>
      Option 2
    </option>
    <option value='Option 3'>
      Option 3
    </option>
  </select>
</template>

<script lang='ts'>
export default {
  name: 'DropdownMenu',
  emits: [ 'update:option' ],
  data: function () {
    return {
      selectedOption: null,
    }
  },

  methods: {
    optionChanged: function (value) {
      this.$emit('update:option', this.selectedOption);
    }
  }
}
</script>