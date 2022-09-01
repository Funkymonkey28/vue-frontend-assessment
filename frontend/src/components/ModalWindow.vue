<template>
  <transition name='modal-fade'>
    <div 
      class='fixed top-0 bottom-0 left-0 right-0 bg-backdrop flex justify-center items-center'
      @click='close'
    >
      <div
        class='bg-white rounded-xl w-1/4 p-3'
        role='dialog'
        aria-labelledby='modalTitle'
        aria-describedby='modalDescription'
        @click.stop
      >
        <header
          id='modalTitle'
          class='modal-header'
        >
          <slot name='header'>
            <!--Default Header-->
          </slot>
        </header>

        <main
          id='modalDescription'
          class='relative pt-4 pb-2'
        >
          <slot name='body'>
            <!--Default body content-->
          </slot>
        </main>

        <footer class='flex flex-end flex-col'>
          <slot name='footer'>
            <!--Default Footer!-->
          </slot>
          <button
            v-if='loginFail'
            type='button'
            class='bg-violet-500 p-1 mt-3 shadow-md text-white rounded-full'
            aria-label='Close Modal'
            @click='close'
          >
            Close
          </button>
          <router-link
            v-if='loginSucess'
            to='/profile'
            class='underline'
          > 
            Continue to profile
          </router-link>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
export default {
  name: 'ModalWindow',
  emits: [ 'close' ],
  data() {
    return{
      loginSucess: true,
      loginFail: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>