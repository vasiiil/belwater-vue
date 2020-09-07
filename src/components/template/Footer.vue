<template>
  <v-footer
    height="72"
    color="#183e6b"
  >
    <v-row justify="end">
      <v-col cols="11" class="white--text">
        © ГУП «Белоблводоканал» г.Белгород {{ new Date().getFullYear() }} г.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
