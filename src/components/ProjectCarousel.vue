<template>
    <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      swipeable
      control-color="primary"
      control-type="flat"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="300px"
    >
      <q-carousel-slide :name="1" img-src="~assets/jamming.png">
        <div class="absolute-bottom-left q-pa-md">
          <q-btn color="white" text-color="black" label="Demo"
          href="https://spotify-playlist-manage.netlify.app/" />
        </div>
        <div class="absolute-bottom-right q-pa-md">
          <q-btn color="white" text-color="black" label="Source"
          href="https://github.com/R-Stev/jammming" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/jamming.png" />
      <q-carousel-slide :name="3" img-src="~assets/jamming.png" />
      <q-carousel-slide :name="4" img-src="~assets/dwitter.png" />
      <!-- <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
    </q-carousel>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ProjectCarousel',
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>
<style>
.q-carousel__arrow .q-icon {
  font-size: 20px;
}
</style>
