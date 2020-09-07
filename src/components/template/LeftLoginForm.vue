<template>
  <form class="mt-5">
    <v-text-field
      v-model="email"
      placeholder="Логин"
      color="white"
      solo
    ></v-text-field>
    <v-text-field
      v-model="password"
      placeholder="Пароль"
      color="white"
      solo
      type="password"
    ></v-text-field>

    <v-btn class="mr-4 d-block" @click="onSubmit">Войти</v-btn>
    <router-link :to="{name: 'signup'}" class="white--text mt-3 d-block">Регистрация</router-link>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LeftLoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('userAuth', ['login']),
    ...mapActions('preloader', ['show_preloader']),
    onSubmit () {
      this.show_preloader()
      const formData = {
        email: this.email,
        password: this.password
      }
      this.login(formData)
    }
  }
}
</script>

<style scoped>
  .v-btn {
    text-transform: none;
  }
</style>
