<template>
  <v-img v-if="preloader_show"
    alt="Белгородский областной водоканал"
    class="preloader"
    contain
    :src="require('../../../public/img/images/preloader.png')"
    transition="scale-transition"
    height="200"
    width="200"
  />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Preloader',
  computed: {
    ...mapGetters('preloader', ['preloader_show'])
  }
}
</script>

<style scoped>
  .preloader {
    position: fixed;
    left: calc(50vw - 100px);
    top: calc(50vh - 100px);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #eae4ea;
    box-shadow: 0 -2px 2px rgba(0,0,0,.2);
    animation: preloader 3s linear infinite;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 100;
  }
  @keyframes preloader {
    0%
    {
      transform: rotateY(0deg);
    }
    100%
    {
      transform: rotateY(360deg);

    }
  }
</style>
