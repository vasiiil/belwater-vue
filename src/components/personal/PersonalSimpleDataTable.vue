<template>
  <div>
    <app-header-row :item="service"></app-header-row>
    <app-data-table v-if="loaded" :headers="headers" :items="items"></app-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DataTable from './DataTable'
import HeaderRow from './HeaderRow'

export default {
  name: 'PersonalData',
  props: {
    service: { required: true },
    method: { required: true }
  },
  components: {
    appDataTable: DataTable,
    appHeaderRow: HeaderRow
  },
  watch: {
    method () {
      this.updateData()
    }
  },
  methods: {
    ...mapActions('personalData', ['getData']),
    ...mapActions('preloader', ['show_preloader']),
    updateData () {
      this.show_preloader()
      this.getData(this.method)
    }
  },
  computed: {
    ...mapGetters('personalData', [
      'headers',
      'items',
      'loaded'
    ])
  },
  created () {
    this.updateData()
  }
}
</script>

<style scoped>

</style>
