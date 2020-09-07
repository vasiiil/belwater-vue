<template>
  <v-alert
    :value="alert"
    type="error"
    prominent
    transition="scale-transition"
  >
    <v-row align="center">
      <v-col class="grow">
        <slot></slot>
      </v-col>
      <v-col class="shrink">
        <v-icon @click="$emit('closeAlert')">mdi-close-circle</v-icon>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    alert: {
      default: false
    }
  }
}
</script>

<style scoped>

</style>
