<template>
  <v-container>
    <app-services :services="services"></app-services>
    <v-row>
      <v-col cols="6"><app-important-info></app-important-info></v-col>
      <v-col cols="6"><app-shutdowns></app-shutdowns></v-col>
    </v-row>
    <app-news></app-news>
    <app-vacancies></app-vacancies>
  </v-container>
</template>

<script>
import Services from '../blocks/Services'
import ImportantInfo from './ImportantInfo'
import News from './News'
import Vacancies from './Vacancies'
import Shutdowns from './Shutdowns'

export default {
  name: 'Home',
  components: {
    appServices: Services,
    appImportantInfo: ImportantInfo,
    appNews: News,
    appVacancies: Vacancies,
    appShutdowns: Shutdowns
  },
  data () {
    return {
      services: [
        {
          text: 'Отключения',
          icon: 'mdi-pipe-disconnected'
        },
        {
          text: 'Вызвать контроллера',
          icon: 'mdi-calendar-month'
        },
        {
          text: 'Подать обращение',
          icon: 'mdi-square-edit-outline'
        },
        {
          text: 'Записаться на прием',
          icon: 'mdi-lead-pencil'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
