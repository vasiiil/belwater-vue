<template>
  <app-block>
    <h1 slot="title" class="pa-3">Отключения</h1>
    <v-carousel slot="content" show-arrows-on-hover>
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <app-text-card :item="item" :isCarousel="true">
          <p class="sub-header" slot="sub-header">{{ item.subHeader }}</p>
        </app-text-card>
      </v-carousel-item>
    </v-carousel>
  </app-block>
</template>

<script>
import Block from '../blocks/Block'
import TextCard from './TextCard'
export default {
  name: 'Shutdowns',
  components: {
    appBlock: Block,
    appTextCard: TextCard
  },
  data () {
    return {
      items: [
        {
          title: '01 мая 2020',
          date: '',
          subHeader: 'бул.Народный, д.34, 48, ул.Кн.Трубецкого, д.47, пр.Белгородский, д.50',
          text: 'порыв водопровода\n' +
            'с 17-30 до 21-30\n' +
            '(работы продлены до 00-00)\n' +
            'На время проведения работ организован подвоз воды. Автоцистерна перемещается по адресам согласно полученным заявкам'
        },
        {
          title: '04 мая 2020',
          date: '',
          subHeader: 'мкр.Таврово-8, 9, 15/2',
          text: 'переврезка участков ИЖС\n' +
            'с 09-30до 14-00'
        },
        {
          title: '30 апреля 2020',
          date: '',
          subHeader: 'г.Белгород, ул.Первомайская, д.11, Белгородский просп., д.48, Народный бул., д.48, 52, 52А, 43, 32, 34, 36, 36А, 38, ул.Кн.Трубецкого, д.47, ул.Белгородского полка, д.50',
          text: 'ремонтные работы\n' +
            'с 09-00 до 13-00'
        },
        {
          title: '29 апреля 2020',
          date: '',
          subHeader: 'г.Белгород, пер.Дальний, ул.Луначарского, д.129',
          text: 'ремонтные работы\n' +
            'с 09-00 до 16-00'
        },
        {
          title: '28 апреля 2020',
          date: '',
          subHeader: 'г.Белгород, пр.Белгородский, д.104Б, ул.Н.Островского, д.19Б, 19В',
          text: 'реконструкция водопровода\n' +
            'с 09-00 до 13-00'
        },
        {
          title: '29 апреля 2020',
          date: '',
          subHeader: 'мкр.Крутой Лог-24',
          text: 'ремонтные работы на сетях\n' +
            '10-00 до 18-00'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .sub-header {
    font-size: 1.2em;
  }
</style>
