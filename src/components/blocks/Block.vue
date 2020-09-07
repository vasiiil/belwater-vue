<template>
  <v-row>
    <v-col>
      <v-sheet
        elevation="8"
      >
        <slot name="title"></slot>
        <v-divider></v-divider>
        <slot name="content"></slot>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Block'
}
</script>

<style scoped>

</style>
