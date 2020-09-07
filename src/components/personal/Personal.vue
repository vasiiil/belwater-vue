<template>
  <v-container>
    <app-services :services="services"></app-services>
    <router-view></router-view>
  </v-container>
</template>

<script>
import Services from '../blocks/Services'
export default {
  name: 'Personal',
  components: {
    appServices: Services
  },
  data () {
    return {
      services: [
        {
          text: 'История платежей',
          icon: 'mdi-file-document-outline',
          link: 'paymentHistory'
        },
        {
          text: 'История показаний',
          icon: 'mdi-file-document-outline',
          link: 'indicationsHistory'
        },
        {
          text: 'Оплатить услуги',
          icon: 'mdi-database',
          link: 'payment'
        },
        {
          text: 'Распечатать квитанцию',
          icon: 'mdi-printer',
          link: 'receipt'
        },
        {
          text: 'Передать показания',
          icon: 'mdi-speedometer',
          link: 'meteres'
        },
        {
          text: 'Взаиморасчеты',
          icon: 'mdi-calculator',
          link: 'mutualSettlements'
        },
        {
          text: 'Информация о приборах учета',
          icon: 'mdi-home',
          link: 'meteresInfo'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
