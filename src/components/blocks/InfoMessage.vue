<template>
  <v-alert
    :value="alert"
    type="success"
    prominent
    transition="scale-transition"
  >
    <v-row align="center">
      <v-col class="grow">
        <slot></slot>
      </v-col>
      <v-col class="shrink">
        <v-btn
          outlined
          @click="$emit('closeAlert')"
        >
          OK
        </v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: 'InfoMessage',
  props: {
    alert: {
      default: false
    }
  }
}
</script>

<style scoped>

</style>
