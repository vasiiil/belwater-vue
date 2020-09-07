<template>
  <v-snackbar
    v-model="show"
    :color="color"
    right
    top
    :timeout="5000"
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="show = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      show: false,
      color: 'error',
      text: ''
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'alert/SHOW_MESSAGE') {
        this.text = state.alert.text
        this.color = state.alert.color
        this.show = true
      }
    })
  }

}
</script>

<style scoped>

</style>
