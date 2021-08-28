<template>
  <div class="auth">
    <component :is="currentComponent" />
  </div>
</template>

<script>
export default {
  name: 'AuthUser',

  components: {
    LoginForm: () => import('./Components/LoginForm.vue'),
    RegisterForm: () => import('./Components/RegisterForm.vue')
  },

  computed: {
    currentComponent() {
      const name = this.$route.query.auth
      const componentName = name[0].toUpperCase() + name.slice(1)

      return `${componentName}Form`
    }
  },

  created() {
    if (!this.$route.query.auth) {
      this.$router.push('?auth=login')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.auth {
  background-color: $white;
  flex-basis: 500px;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(97, 127, 152, 0.2), 1px 0 0 rgba(97, 127, 152, 0.1),
    -1px 0 0 rgba(97, 127, 152, 0.1);
}
</style>
