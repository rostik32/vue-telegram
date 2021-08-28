<template>
  <div class="login">
    <h1 class="login__title">Sign in</h1>
    <p class="login__text">
      Do not have an account ?
      <nuxt-link to="/?auth=register"> Register </nuxt-link> now!
    </p>

    <CInput v-model="username" placeholder="Username" name="username" />
    <CInput
      v-model="password"
      placeholder="Password"
      name="password"
      type="password"
    />

    <CButton :disabled="!isLoginDisabled" @click="login">Sign in</CButton>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  computed: {
    isLoginDisabled() {
      return Boolean(this.username && this.password)
    }
  },

  methods: {
    async login() {
      try {
        const userData = await this.$auth.loginWith('local', {
          data: { username: this.username, password: this.password }
        })
        await this.$auth.setUser(userData.data.user)
        // await this.$auth.setUserToken(userData.accessToken, userData.refreshToken)
        console.log(userData.data.user);
        this.$router.push('/main')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  &__title {
    font-size: 20px;
    margin: 0;
  }
}
</style>
