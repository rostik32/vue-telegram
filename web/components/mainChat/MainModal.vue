<template>
  <div>
    <CModal ref="modal">
      <template v-if="isMounted" #content>
        <Component :is="currentComponent"></Component>
      </template>
    </CModal>
  </div>
</template>

<script>
import CModal from '../Common/CModal.vue'

export default {
  name: 'MainModal',

  components: {
    CModal,
    NavigationMenu: () => import('./components/Modal/NavigationMenu.vue')
  },

  data() {
    return {
      isMounted: false
    }
  },

  computed: {
    currentComponent() {
      return 'navigation-menu'
    }
  },

  mounted() {
    this.isMounted = true;
  },

  methods: {
    openModal() {
      this.$refs.modal.open()
    }
  },
}
</script>
