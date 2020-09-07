<template>
  <app-block>
    <h1 slot="title" class="pa-3">Вакансии</h1>
    <v-slide-group show-arrows class="pb-4" slot="content">
      <v-slide-item v-for="(item, index) in items" :key="index">
        <app-text-card :item="item"></app-text-card>
      </v-slide-item>
    </v-slide-group>
  </app-block>
</template>

<script>
import Block from '../blocks/Block'
import TextCard from './TextCard'
export default {
  name: 'Vacancies',
  components: {
    appBlock: Block,
    appTextCard: TextCard
  },
  data () {
    return {
      items: [
        {
          title: 'Кадастровый инженер',
          date: '',
          text: 'Заработная плата - 24 000  руб.\n' +
            'Обращаться в управление по работе с персоналом по телефону\n' +
            '8 (4722) 34-69-91'
        },
        {
          title: 'Электрогазосварщик 5 разряда',
          date: '',
          text: 'Заработная плата - от 25 500 руб.\n' +
            'Обращаться в отдел по работе с персоналом по телефону\n' +
            '8 (4722) 34-69-91'
        },
        {
          title: 'Инженер-химик 1 категории',
          date: '',
          text: 'Заработная плата - 21 350 руб.\n' +
            'Обращаться в отдел по работе с персоналом по телефону\n' +
            '8 (4722) 34-69-91'
        },
        {
          title: 'Медицинская сестра',
          date: '',
          text: 'Заработная плата - 18 300 руб.\n' +
            'Обращаться в отдел по работе с персоналом по телефону\n' +
            '8 (4722) 34-69-91'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
