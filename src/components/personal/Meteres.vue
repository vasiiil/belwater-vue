<template>
  <div>
    <app-header-row :item="service"></app-header-row>
    <v-form v-model="isValid">
      <v-data-table
        v-if="meteres"
        :headers="meteres.headers"
        :items="meteres.items"
        hide-default-footer
        item-key="idRow"
        disable-filtering
        disable-sort
      >
        <template v-slot:item.newIndication="{ item }">
          <v-text-field
            :value="item.newIndication"
            v-model="devices[item.id]"
            :rules="[rules.required, rules.number, rules.minValue(item.indication)]"
          ></v-text-field>
        </template>
      </v-data-table>
      <v-row justify="end" class="pa-3">
        <v-btn
          :disabled="!isValid"
          @click="flushMeteresClick"
        >
          Передать показания
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderRow from './HeaderRow'

export default {
  name: 'Meteres',
  props: {
    service: { required: true }
  },
  data: () => ({
    isValid: true,
    devices: {},
    rules: {
      required: value => !!value || 'Заполните значение.',
      number: value => /^\d+$/.test(value) || 'Введите число',
      minValue (min) {
        return value => value >= min || 'Передача показаний меньше предыдущих невозможна. Обратитесь в управление по реализации услуг!'
      }
    }
  }),
  components: {
    appHeaderRow: HeaderRow
  },
  methods: {
    ...mapActions('personalCommon', [
      'getMeteres',
      'flushMeteres'
    ]),
    ...mapActions('preloader', ['show_preloader']),
    flushMeteresClick () {
      this.show_preloader()
      this.flushMeteres(this.devices)
    }
  },
  computed: {
    ...mapGetters('personalCommon', ['meteres'])
  },
  watch: {
    meteres (val) {
      val.items.map(item => {
        this.devices[item.id] = item.newIndication
      })
    }
  },
  created () {
    this.show_preloader()
    this.getMeteres()
  }
}
</script>
