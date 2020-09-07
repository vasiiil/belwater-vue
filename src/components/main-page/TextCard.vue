<template>
  <v-card
    :class="{scroll: isCarousel}"
    :height="isCarousel ? '418' : undefined"
    :width="isCarousel ? undefined : 400"
    :outlined="isCarousel ? true : undefined"
    class="ma-4 pa-0"
    light
  >
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-subtitle>{{ item.date }}</v-card-subtitle>
    <v-card-text>
      <slot name="sub-header"></slot>
      {{ item.text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TextCard',
  props: {
    item: Object,
    isCarousel: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .scroll {
    overflow-y: auto;
  }
</style>
