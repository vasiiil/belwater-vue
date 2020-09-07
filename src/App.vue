<template>
  <v-app :class="{preloader_showed: preloader_show}">
    <app-preloader></app-preloader>
    <app-alert></app-alert>
    <app-header></app-header>
    <div class="b-header-divider mt-3"></div>
    <v-row justify="end">
      <v-col cols="2">
        <app-left-block></app-left-block>
      </v-col>
      <v-col cols="9">
        <router-view>
          <app-home></app-home>
        </router-view>
      </v-col>
    </v-row>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/template/Header'
import LeftBlock from './components/template/LeftBlock'
import Footer from './components/template/Footer'
import Home from './components/main-page/Home'
import Preloader from './components/template/Preloader'
import Alert from './components/blocks/Alert'

import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    appHeader: Header,
    appLeftBlock: LeftBlock,
    appFooter: Footer,
    appHome: Home,
    appPreloader: Preloader,
    appAlert: Alert
  },

  data: () => ({
  }),
  created () {
    this.$store.dispatch('userAuth/tryAutoLogin')
  },
  computed: {
    ...mapGetters('preloader', ['preloader_show'])
  }
}
</script>

<style scoped>
  .b-header-divider {
    height: 40px;
    background-color: #183e6b;
  }
  .preloader_showed {
    opacity: 0.3;
  }
</style>
