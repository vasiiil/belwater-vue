<template>
  <app-block>
    <h1 slot="title" class="pa-3">Новости</h1>
    <v-slide-group show-arrows class="pb-4" slot="content">
      <v-slide-item v-for="(item, index) in items" :key="index">
        <app-text-img-card :item="item"></app-text-img-card>
      </v-slide-item>
    </v-slide-group>
  </app-block>
</template>

<script>
import Block from '../blocks/Block'
import TextImgCard from './TextImgCard'
export default {
  name: 'News',
  components: {
    appBlock: Block,
    appTextImgCard: TextImgCard
  },
  data () {
    return {
      items: [
        {
          title: '21 апр 2020',
          text: 'Уважаемые абоненты! Просим вас по возможности минимизировать посещение офисов предприятия. Обратите внимание на новый порядок регистрации на сайте',
          img: require('../../../public/img/images/corona.jpg')
        },
        {
          title: '23 мар 2020',
          text: 'ПП «Грайворонский район» Филиала «Западный» ГУП «Белоблводоканал» уведомляет абонентов о прохождении контролеров для снятия контрольных показаний',
          img: ''
        },
        {
          title: '31 янв 2020',
          text: 'Филиал «Западный» ГУП «Белоблводоканал» уведомляет абонентов о прохождении контролеров для снятия контрольных показаний индивидуальных приборов учета',
          img: ''
        },
        {
          title: '21 апр 2020',
          text: 'Уважаемые абоненты! Просим вас по возможности минимизировать посещение офисов предприятия. Обратите внимание на новый порядок регистрации на сайте',
          img: require('../../../public/img/images/corona.jpg')
        },
        {
          title: '23 мар 2020',
          text: 'ПП «Грайворонский район» Филиала «Западный» ГУП «Белоблводоканал» уведомляет абонентов о прохождении контролеров для снятия контрольных показаний',
          img: ''
        },
        {
          title: '31 янв 2020',
          text: 'Филиал «Западный» ГУП «Белоблводоканал» уведомляет абонентов о прохождении контролеров для снятия контрольных показаний индивидуальных приборов учета',
          img: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
