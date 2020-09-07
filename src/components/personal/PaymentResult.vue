<template>
  <div>
    <app-header-row :item="service"></app-header-row>
    <v-alert v-if="success && success === 'ok'" type="success">
      Оплата получена!
    </v-alert>
    <v-alert v-else type="error">
      Оплата не произведена!
    </v-alert>
    <app-data-table v-if="paymentResult" :headers="paymentResult.headers" :items="paymentResult.items" :without-footer="true"></app-data-table>
    <v-row class="pa-3 row-header" justify="end" style="height: 100%" v-if="paymentResult && paymentResult.sum > 0">
      ИТОГО: {{ paymentResult.sum }}
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderRow from './HeaderRow'
import DataTable from './DataTable'

export default {
  name: 'PaymentResult',
  data: () => (
    {
      service: {
        text: 'Данные об оплате',
        icon: 'mdi-database'
      }
    }
  ),
  props: {
    paymentId: { required: true },
    success: { default: false }
  },
  components: {
    appHeaderRow: HeaderRow,
    appDataTable: DataTable
  },
  methods: {
    ...mapActions('personalCommon', ['getPaymentResult']),
    ...mapActions('preloader', ['show_preloader'])
  },
  computed: {
    ...mapGetters('personalCommon', ['paymentResult'])
  },
  created () {
    this.show_preloader()
    this.getPaymentResult(this.paymentId)
  }
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
