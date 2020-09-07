<template>
  <div>
    <app-header-row :item="service"></app-header-row>
    <app-data-table v-if="payments" :headers="payments.headers" :items="payments.items" :without-footer="true"></app-data-table>
    <v-row class="pa-3 row-header" justify="end" style="height: 100%" v-if="sum > 0">
      ИТОГО: {{ sum }}
    </v-row>
    <v-row justify="end" class="pa-3">
      <v-btn
        :disabled="!(sum > 0)"
        @click="payClick"
      >
        Оплатить
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderRow from './HeaderRow'
import DataTable from './DataTable'

export default {
  name: 'Payment',
  props: {
    service: { required: true }
  },
  data: () => ({
    paymentItems: [],
    sum: 0
  }),
  components: {
    appHeaderRow: HeaderRow,
    appDataTable: DataTable
  },
  methods: {
    ...mapActions('personalCommon', [
      'getPayments',
      'pay'
    ]),
    ...mapActions('preloader', ['show_preloader']),
    setPayments (payments, serviceId = null, serviceName = null) {
      for (let i = 0; i < payments.length; i++) {
        if (payments[i].children) {
          this.setPayments(payments[i].children, payments[i].id, payments[i].name)
        } else if (payments[i].sum > 0) {
          /* eslint no-unneeded-ternary: ["error", { "defaultAssignment": true }] */
          this.paymentItems.push({
            serviceId: serviceId ? serviceId : payments[i].id,
            deviceId: serviceId ? payments[i].id : null,
            serviceName: serviceName ? serviceName : payments[i].name,
            deviceName: serviceId ? payments[i].name : null,
            value: payments[i].sum
          })
          this.sum += payments[i].sum
        }
      }
    },
    payClick () {
      this.show_preloader()
      this.pay({
        devices: this.paymentItems,
        sum: this.sum
      })
    }
  },
  computed: {
    ...mapGetters('personalCommon', ['payments'])
  },
  watch: {
    payments (val) {
      this.setPayments(val.items)
      if (this.sum > 0) {
        this.sum = parseFloat(this.sum.toFixed(2))
      }
    }
  },
  created () {
    this.show_preloader()
    this.getPayments()
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
