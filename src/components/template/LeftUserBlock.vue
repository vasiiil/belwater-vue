<template>
  <v-container>
    <p class="b-orange-text font-weight-bold">{{ this.user ? this.user.surname + ' ' + this.user.name : '' }}</p>
    <p class="white--text">Лицевой счет ГУП «Белоблводоканал»</p>
    <p class="b-orange-text font-weight-bold">{{ this.user ? this.user.accountNumber : '' }}</p>
    <router-link :to="{name: 'indicationsHistory'}" class="white--text">
      <v-icon left color="white">mdi-cog-outline</v-icon>Личный кабинет
    </router-link>
    <div class="mt-3 b-exit-btn" @click="onLogout">
      <v-icon left color="white">mdi-exit-to-app</v-icon>Выход
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LeftUserBlock',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('userAuth', ['user'])
  },
  methods: {
    ...mapActions('userAuth', ['logout']),
    onLogout () {
      this.logout()
    }
  }
}
</script>

<style scoped>
  .b-orange-text {
    color: #f58968;
  }
  .b-exit-btn {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
