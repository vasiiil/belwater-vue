<template>
  <v-card
    class="ma-4 pa-0"
    width="300"
  >
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>
      <v-row justify="center" class="ma-0" align="center" style="height: 100%">
        <v-col cols="3" align-self="start">
          <v-img
            width="75"
            :src="item.img ? item.img : require('../../../public/img/images/logo.png')"
          ></v-img>
        </v-col>
        <v-col
          cols="9"
          class="pa-0"
        >
          {{ item.text }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TextImgCard',
  props: ['item']
}
</script>

<style scoped>

</style>
