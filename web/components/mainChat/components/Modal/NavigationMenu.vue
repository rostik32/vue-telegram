<template>
  <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
    <div v-if="isMounted" class="navigation-menu">
      <div class="navigation-menu__header">
        <div class="navigation-menu__avatar-wrapper">
          <img class="navigation-menu__avatar" src="/images/default-avatar.png">
        </div>

        <div class="navigation-menu__info">
          <div class="navigation-menu__info-user">
            <span class="navigation-menu__info-name">{{ $auth.user.name }}</span>
            <span class="navigation-menu__info-username">{{ $auth.user.username }}</span>
          </div>

          <CCircleButton
            icon="logout"
            fill="#ffffff"
            @click="$auth.logout()"
          ></CCircleButton>
        </div>
      </div>

      <ul class="navigation-menu__list">
        <CIntemList
          v-for="item in menuItems"
          :key="item.text"
          :icon="item.icon"
        >
          {{ item.text }}
        </CIntemList>
      </ul>
    </div>
  </transition>
</template>

<script>
import CIntemList from '@/components/Common/CItemList.vue'

export default {
  name: 'NavigationMenu',

  components: {
    CIntemList
  },

  data() {
    return {
      menuItems: [
        {
          text: 'Contacts',
          icon: 'contacts'
        },
        {
          text: 'Settings',
          icon: 'settings'
        }
      ],

      isMounted: false
    }
  },

  mounted() {
    this.isMounted = true;
  },

  beforeDestroy() {
    this.isMounted = false;
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

  .navigation-menu {
    display: flex;
    flex-direction: column;
    max-width: 280px;
    width: 100%;
    height: 100%;
    background-color: $white;

    &__header {
      display: flex;
      flex-direction: column;
      padding: 20px 15px 15px 20px;
      background: url("/images/chat-bcg.jpg") no-repeat center / cover;
    }

    &__avatar {
      max-width: 100%;

      &-wrapper {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 15px;
      }
    }

    &__info {
      display: flex;
      justify-content: space-between;

      &-user {
        display: flex;
        flex-direction: column;
        color: $white;
      }

      &-name {
        font-weight: bold;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      margin: 0;
      margin-top: 10px;
      padding: 0;
      cursor: pointer;
    }
  }

  // .fadeLeft-enter, .fadeLeft-leave-to {
  //   transform: translateX(-100%);
  // }

  // .fadeLeft-enter-active, .fadeLeft-leave-active {
  //   transition: transform 2s;
  // }

  // .fadeLeft-enter-active {
  //   transform: translateX(0);
  // }

//   .fadeLeft-enter-active, .fadeLeft-leave-active {
//   transition: opacity 10s;
// }
// .fadeLeft-enter, .fadeLeft-leave-to /* .fade-leave-active до версии 2.1.8 */ {
//   opacity: 0;
// }
</style>
