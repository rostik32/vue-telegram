<template>
  <transition name="fade">
    <div v-if="isOpen" class="modal">
      <div class="modal__overlay" @click="close"></div>
      <slot name="content" :close="close"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CModal',

  popupOpenControler: null,

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    open() {
      this.isOpen = true;

      const popupPromise = new Promise((resolve, reject) => {
        this.$options.popupOpenControler = { resolve, reject };
      });

      return popupPromise;
    },

    close() {
      this.isOpen = false;
      this.$options.popupOpenControler.resolve(true);
    }
  }
};
</script>

<style lang="scss">
.modal {
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
    cursor: pointer;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
