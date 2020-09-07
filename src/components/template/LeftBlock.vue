<template>
  <v-container
    fluid
    class="b-left-block"
  >
    <v-icon color="#f58968" size="50">mdi-key-variant</v-icon>
    <app-left-user-block v-if="isAuthenticated"></app-left-user-block>
    <app-left-login-form v-else></app-left-login-form>
  </v-container>
</template>

<script>
import LeftLoginForm from './LeftLoginForm'
import LeftUserBlock from './LeftUserBlock'
import { mapGetters } from 'vuex'

export default {
  name: 'LeftBlock',
  components: {
    appLeftLoginForm: LeftLoginForm,
    appLeftUserBlock: LeftUserBlock
  },
  computed: {
    ...mapGetters('userAuth', ['isAuthenticated'])
  }
}
</script>

<style scoped>
  .b-left-block {
    min-height: 600px;
    background-color: #183e6b;
    height: 100%;
  }
</style>
