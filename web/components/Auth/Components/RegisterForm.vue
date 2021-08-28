<template>
  <div class="register">
    <h1 class="login__title">Registration</h1>
    <p class="login__text">
      Do you have an account ?
      <nuxt-link to="/?auth=login"> Sign in </nuxt-link> now!
    </p>

    <CInput v-model="formFields.name" name="name" placeholder="Name" />
    <CInput v-model="formFields.username" name="username" placeholder="Username" />
    <CInput
      v-model="formFields.password"
      name="password"
      placeholder="Password"
      type="password"
    />

    <CButton :disabled="!isRegisterDisabled" @click="register">Register</CButton>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',

  data() {
    return {
      formFields: {
        name: '',
        username: '',
        password: ''
      }
    }
  },

  computed: {
    isRegisterDisabled() {
      return Boolean(this.formFields.username && this.formFields.password && this.formFields.name)
    }
  },

  methods: {
    async register() {
      await this.$axios.post('/auth/registration', { ...this.formFields })
      await this.$auth.loginWith('local', { data: { username: this.formFields.username, password: this.formFields.password } })
      this.$router.push('/main')
    }
  }
}
</script>

<style lang="scss">
</style>
