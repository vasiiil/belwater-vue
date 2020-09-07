<template>
  <div>
    <app-header-row :item="service"></app-header-row>
    <app-data-table v-if="meteresInfo" :headers="meteresInfo.headers" :items="meteresInfo.items" :without-footer="true" :expandable="false"></app-data-table>
    <div v-if="meteresInfo">
      <v-row class="ma-0" align="start" v-if="meteresInfo">
        <v-col cols="6" class="pt-0 pb-0">
          <v-row>
            <v-col cols="6">
              <v-menu
                v-model="dateFromMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFromFormat"
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="dateFrom"
                  :show-current="true"
                  type="month"
                  @input="dateFromMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-menu
                v-model="dateToMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateToFormat"
                    prepend-icon="mdi-trending-neutral"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="dateTo"
                  :show-current="true"
                  type="month"
                  @input="dateToMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-select
            :items="meteresInfo.items"
            v-model="selected"
            item-value="id"
            item-text="name"
            label="Прибор учета"
            @change="alert = false"
          >
          </v-select>
        </v-col>
        <v-col cols="3">
          <v-btn @click="getMetereInfoClick">Показать</v-btn>
        </v-col>
      </v-row>
      <app-metere-info v-if="metereInfo" :metere-info="metereInfo"></app-metere-info>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DataTable from './DataTable'
import HeaderRow from './HeaderRow'
import MetereInfo from './MetereInfo'

export default {
  name: 'MeteresInfo',
  data: () => ({
    dateFrom: null,
    dateFromMenu: false,
    dateFromFormat: null,
    dateTo: null,
    dateToMenu: false,
    dateToFormat: null,
    selected: null
  }),
  props: {
    service: { required: true }
  },
  components: {
    appDataTable: DataTable,
    appHeaderRow: HeaderRow,
    appMetereInfo: MetereInfo
  },
  methods: {
    ...mapActions('personalCommon', [
      'getMeteresInfo',
      'getMetereInfo'
    ]),
    ...mapActions('preloader', ['show_preloader']),
    ...mapActions('alert', ['showAlert']),
    formatDate (date) {
      if (!date) return null

      const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ]

      date = new Date(date)
      const year = date.getFullYear()
      const month = date.getMonth()
      return monthNames[month] + `, ${year}`
    },
    getMetereInfoClick () {
      if (!this.selected) {
        this.showAlert({
          text: 'Необходимо указать прибор учета!'
        })
      } else {
        this.show_preloader()
        this.getMetereInfo({
          dateFrom: this.dateFrom,
          dateTo: this.dateTo,
          deviceId: this.selected
        })
      }
    }
  },
  computed: {
    ...mapGetters('personalCommon', {
      meteresInfo: 'meteresInfo',
      metereInfo: 'metereInfo'
    })
  },
  watch: {
    dateFrom (val) {
      this.dateFromFormat = this.formatDate(val)
    },
    dateTo (val) {
      this.dateToFormat = this.formatDate(val)
    }
  },
  created () {
    this.show_preloader()
    this.getMeteresInfo()
  }
}
</script>

<style scoped>

</style>
