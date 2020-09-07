<template>
  <v-row>
    <app-service-button :item="service" :key="index" v-for="(service, index) in services"></app-service-button>
  </v-row>
</template>

<script>
import ServiceButton from './ServiceButton'
export default {
  name: 'Services',
  props: ['services'],
  components: {
    appServiceButton: ServiceButton
  }
}
</script>

<style scoped>

</style>
