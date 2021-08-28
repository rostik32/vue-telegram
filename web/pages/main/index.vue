<template>
  <div class="main-page">
    <LeftSidebar @open-modal="openModal" />
    <CurrentChat />
    <MainModal ref="mainModal" />
  </div>
</template>

<script>
import LeftSidebar from '@/components/mainChat/LeftSidebar.vue'
import CurrentChat from '@/components/mainChat/CurrentChat.vue'
import MainModal from '@/components/mainChat/MainModal.vue'

export default {
  name: 'MainPage',

  components: {
    LeftSidebar,
    CurrentChat,
    MainModal
  },

  middleware: ['auth'],

  methods: {
    openModal() {
      this.$refs.mainModal.openModal()
    }
  },
}
</script>

<style lang="scss">
.main-page {
  display: flex;
}
</style>
