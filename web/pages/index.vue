<template>
  <div class="auth-page">
    <AuthUser />
  </div>
</template>

<script>
import AuthUser from '~/components/Auth/AuthUser.vue'

export default {
  name: 'MainPage',

  components: {
    AuthUser
  },
}
</script>

<style lang="scss">
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(86, 130, 163, 1) 250px,
    rgba(231, 235, 240, 1) 250px
  );
}
</style>
