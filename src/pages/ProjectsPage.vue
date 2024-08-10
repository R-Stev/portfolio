<template>
  <q-page style="display: flex; align-items: center;">
    <Splide ref="splide" :options="options" aria-label="Projects" >
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
      breakpoints: {
        1023: {perPage: 2},
        674: {perPage: 1}
      },
      // padding: 15,
      // heightRatio: 0.625 * 2/3,
      pagination: false,
      focus: 'center',
      keyboard: 'global',
      gap   : '1rem',
      width: "100%"
    };
    const projectList = [
    {
      image: 'jamming.jpg',
      description: 'A client for managing Spotify playlists, with modified security headers and using PKCE authorisation.',
      tools: ['React', 'Spotify API', 'HTTP headers'],
      demoLink: 'https://spotify-playlist-manage.netlify.app/',
      sourceLink: 'jammming'
    },
    {
      image: 'dwitter.jpg',
      description: 'A backend for a simple Twitter clone, with API documentation.',
      tools: ['Django', 'REST API'],
      demoLink: '',
      sourceLink: 'socialnetwork'
    },
    // {
    //   image: 'jamming.jpg',
    //   description: 'satellite description',
    //   tools: ['CesiumJS'],
    //   demoLink: '',
    //   sourceLink: ''
    // },
    {
      image: 'stats.jpg',
      description: 'A site visually displaying data created in SQL, with python scripts to facilitate updating through automation.',
      tools: ['Quasar', 'ECharts', 'PostgreSQL', 'Automation'],
      demoLink: 'https://r-stev.github.io/denuvostats/',
      sourceLink: 'denuvostats'
    }
  ]

    return { options, projectList };
  }
});
</script>
