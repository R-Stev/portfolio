<template>
  <q-page>
    <Splide ref="splide" :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <div class="column">
        <div class="col">
          <img src="~assets/jamming.jpg" style="max-height: 100%; max-width: 100%" alt="Sample 1">
        </div>
        <div class="col">
          wertwertwert
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <img src="~assets/jamming.jpg" style="max-height: 100%; max-width: 100%" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="~assets/dwitter.jpg" style="max-height: 100%; max-width: 100%" alt="Sample 3">
    </SplideSlide>
    <SplideSlide>
      <img src="~assets/stats.jpg" style="max-height: 100%; max-width: 100%" alt="Sample 4">
    </SplideSlide>
  </Splide>

    <!-- <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      swipeable
      control-color="primary"
      control-type="flat"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="600px"
    >
      <q-carousel-slide :name="1" style="background-color: green;">
        <div class="column" style="height: 568px">
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" style="background-color: blue;">
        <div class="column" style="height: 568px">
          <div class="col-4 col-md-6">slide2</div>
          <div class="col-4 col-md-6">slide2</div>
          <div class="col-4 col-md-6">slide2</div>
          <div class="col-4 col-md-6">slide2</div>
        </div>
      </q-carousel-slide>
    </q-carousel> -->
  </q-page>
</template>

<script lang="ts">
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    // TODO? find a way to use Options without typescript
    const options: Options = {
      type      : 'loop',
      perPage   : 3,
      perMove   : 1,
      // breakpoints: {},
      // padding: 15,
      heightRatio: 0.6,
      pagination: false
      // gap   : '1rem',
    };

    return { options };
  }
});
// export default {
//   setup () {
//     return {
//       slide: ref(1)
//     }
//   }
// }
</script>
