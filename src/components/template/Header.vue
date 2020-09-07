<template>
  <v-app-bar
    height="160"
    color="white"
    elevation="0"
  >
    <v-container fluid mt-3>
      <v-row align="center">
        <v-col cols="1" offset="1">
          <router-link :to="{name: 'home'}">
            <v-img
              alt="Белгородский областной водоканал"
              class="shrink mr-2"
              contain
              :src="require('../../../public/img/images/logo.png')"
              transition="scale-transition"
              height="145"
              width="145"
            />
          </router-link>
        </v-col>
        <v-col cols="8">
          <v-row justify="end">
            <v-col cols="10">
              <v-row no-gutters align="center">
                <v-col cols="1">
                  <v-icon size="60" color="#1b4792">mdi-phone-in-talk</v-icon>
                </v-col>
                <v-col class="ml-4" style="max-width: 240px">
                  оперативно-диспетчерский отдел
                  134 (с мобильного 8(4722)134)
                  <span style="color: #1b4792;">круглосотучно</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-text-field
            outlined
            clearable
            label="Поиск"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular
                  v-if="loading"
                  size="24"
                  color="info"
                  indeterminate
                ></v-progress-circular>
                <v-icon v-else size="32" color="#1b4792" class="mt-n1">mdi-magnify</v-icon>
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style scoped></style>
