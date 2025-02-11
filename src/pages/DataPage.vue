<template>
    <q-page id="dataPage">
      <Splide ref="splide" :options="options" aria-label="Data" >
        <ProjectItem v-for="item in dataList" :key="item.image" v-bind="item" />
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
          1300: {perPage: 2},
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
      const dataList = [
      {
        prefix: 'tableau',
        image: 'tableau1.jpg',
        description: 'A replication of the denuvostats Github project made in Tableau.',
        tools: ['Tableau'],
        demoLink: '',
        sourceLink: 'denuvotemp/Dashboard1'
      },
      {
        prefix: 'kaggle',
        image: 'kaggle.png',
        description: 'Bikeshare',
        tools: ['Kaggle'],
        demoLink: '',
        sourceLink: 'bikeshare'
      },
      {
        prefix: 'kaggle',
        image: 'kaggle.png',
        description: 'Salary analysis',
        tools: ['Kaggle'],
        demoLink: '',
        sourceLink: 'salary-analysis'
      }
    ]
  
      return { options, dataList };
    }
  });
  </script>
  
  <style>
    #dataPage {
      display: flex;
      align-items: center;
      margin-top: 0;
    }
  </style>