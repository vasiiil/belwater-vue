<template>
  <v-card
    class="row-header"
    width="100%"
    color="#aaaaaa"
  >
    <v-row class="ma-0" align="start" style="height: 100%">
      <v-col cols="1" class="pt-0 pb-0">
        <v-icon
          size="40"
          color="#1b4792"
        >{{ item.icon }}</v-icon>
      </v-col>
      <v-col
        cols="11"
        class="text-start pa-0"
      >
        {{ item.text }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'HeaderRow',
  props: ['item']
}
</script>

<style scoped>
  .row-header {
    min-height: 50px;
    border-radius: 5px;
    background-color: #aaaaaa;
    font: bold 20px/50px sans-serif;
    margin: 20px 0;
    color: #183e6b !important;
  }
</style>
