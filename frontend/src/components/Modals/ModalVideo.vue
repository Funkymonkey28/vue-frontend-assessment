<template>
  <transition name='modal-fade'>
    <div 
      class='fixed top-0 bottom-0 left-0 right-0 bg-backdrop flex justify-center items-center'
      @click='close'
    >
      <div
        class='bg-black rounded-xl w-fit p-3 border-solid border-gray-500 border-2 drop-shadow-xl'
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
            <div
              class='text-5xl text-center'
            >
              😁
            </div>
          </slot>
        </header>

        <main
          id='modalDescription'
          class='relative pt-4 pb-2'
        >
          <slot name='body'>
            <!--Default body content-->
            <video
              id='myVideo'
              width='1280'
              height='960'
              controls
              autoplay
              class='text-white min-w-full min-h-full'
              @playing='update'
            >
              <source
                src='../../assets/video.mp4'
                type='video/mp4'
              >
              Video is not supported
            </video>
          </slot>
        </main>

        <footer class='flex flex-end flex-col'>
          <slot 
            name='footer'
            class='flex justify-center'
          >
            <!--Default footer content-->
            <div
              class='flex justify-center'
            >
              <button
                type='button'
                class='bg-violet-500 p-1 mt-3 shadow-md text-white rounded-full h-18 w-1/6 text-lg'
                aria-label='Close Modal'
                @click='close'
              >
                Close
              </button>
            </div>
          </slot>
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
      myVideo: null,
    }
  },
  methods: {
    update(event) {
      this.myVideo = event.target;
    },
    close() {
      myVideo.pause();
      this.$emit('close');
    },
  }
};
</script>