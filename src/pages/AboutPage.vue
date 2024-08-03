<template>
  <q-page>
    <Splide ref="splide" :options="options" aria-label="My Favorite Images">
      <ProjectItem v-for="item in projectList" :key="item.image" v-bind="item" />
    </Splide>
  </q-page>
</template>

<script lang="ts">
import '@splidejs/vue-splide/css';
import { Splide, Options } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import ProjectItem from 'components/ProjectItem.vue'

export default defineComponent({
  components: {
    Splide,
    ProjectItem
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
    const projectList = [
    {
      image: 'jamming.jpg',
      description: 'jamming description',
      demoLink: '',
      sourceLink: ''
    },
    {
      image: 'dwitter.jpg',
      description: 'dwitter description',
      demoLink: '',
      sourceLink: ''
    },
    {
      image: 'jamming.jpg',
      description: 'satellite description',
      demoLink: '',
      sourceLink: ''
    },
    {
      image: 'stats.jpg',
      description: 'stats description',
      demoLink: '',
      sourceLink: ''
    }
  ]

    return { options, projectList };
  }
});
</script>
