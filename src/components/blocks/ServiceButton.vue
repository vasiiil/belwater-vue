<template>
  <v-col
    cols="3"
    xl="2"
    md="3"
    sm="6"
    class="text-center"
  >
    <v-card
      class="d-inline-block service-button"
      width="200"
      height="65"
      hover
      color="#dae6ef"
      :to="item.link ? {name: item.link} : undefined"
    >
        <v-row justify="center" class="ma-0" align="center" style="height: 100%">
          <v-col cols="3">
            <v-icon
              size="40"
              color="#1b4792"
            >{{ item.icon }}</v-icon>
          </v-col>
          <v-col
            cols="9"
            class="text-center pa-0"
          >
            {{ item.text }}
          </v-col>
        </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ServiceButton',
  props: ['item']
}
</script>

<style scoped>
  .service-button {
    word-wrap: break-word;
    color: #183e6b !important;
    font-weight: bold;
    font-size: 16px;
  }
</style>
