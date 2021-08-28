<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <button class="sidebar__burger" @click="$emit('open-modal')">
        <span class="sidebar__burger-line" />
        <span class="sidebar__burger-line" />
        <span class="sidebar__burger-line" />
      </button>
    </div>

    <vue-custom-scrollbar class="scroll-area" :settings="settings">
      <UserItem v-for="item in 5" :key="item" />
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import UserItem from './components/Sidebar/UserItem.vue'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

export default {
  name: 'LeftSidebar',

  components: {
    UserItem,
    vueCustomScrollbar: () => import('vue-custom-scrollbar')
  },

  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
    }
  },

  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/?auth=login')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.sidebar {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;

  &__header {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
  }

  &__burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;

    &-line {
      width: 100%;
      height: 2px;
      background: $grey;
      padding: 0;
    }
  }
}
</style>
