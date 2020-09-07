<template>
  <div>
    <app-header-row :item="service"></app-header-row>
<!--    <v-btn v-if="data.receipt" @click="$refs.pdfComponent.print()">Печать</v-btn>-->
    <pdf-viewer ref="pdfComponent" v-if="receipt" :src="{data: receipt}"></pdf-viewer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderRow from './HeaderRow'
import pdf from 'vue-pdf'

export default {
  name: 'Receipt',
  props: {
    service: { required: true }
  },
  components: {
    appHeaderRow: HeaderRow,
    pdfViewer: pdf
  },
  methods: {
    ...mapActions('personalCommon', ['getReceipt']),
    ...mapActions('preloader', ['show_preloader']),
    ...mapActions('alert', ['showAlert'])
  },
  computed: {
    ...mapGetters('personalCommon', ['receipt', 'error'])
  },
  created () {
    this.show_preloader()
    this.getReceipt()
  }
}
</script>

<style scoped>

</style>
