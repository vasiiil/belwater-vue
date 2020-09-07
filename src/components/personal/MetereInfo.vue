<template>
  <v-container fluid>
    <v-sparkline
      :fill="true"
      :gradient="['#00c6ff', '#F0F', '#FF0']"
      :line-width="2"
      :padding="8"
      :smooth="10"
      :value="values"
      :auto-draw="true"
      :label-size="3"
    ></v-sparkline>
    <app-data-table v-if="metereInfo" :headers="metereInfo.headers" :items="metereInfo.items"></app-data-table>
  </v-container>
</template>

<script>
import DataTable from './DataTable'

export default {
  name: 'MetereInfo',
  props: {
    metereInfo: { required: true }
  },
  data: () => ({
    labels: [],
    values: []
  }),
  components: {
    appDataTable: DataTable
  },
  created () {
    this.labels = []
    this.values = []
    this.metereInfo.items.map(item => {
      this.labels.push(item.date)
      this.values.push(item.expense)
    })
  },
  watch: {
    metereInfo (val) {
      this.labels = []
      this.values = []
      val.items.map(item => {
        this.labels.push(item.date)
        this.values.push(item.expense)
      })
    }
  }
}
</script>

<style scoped>

</style>
