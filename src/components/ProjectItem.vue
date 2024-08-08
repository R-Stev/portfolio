<template>
    <SplideSlide>
      <div class="column">
        <div class="col">
          <img :src="`src/assets/${props.image}`" style="max-height: 100%; max-width: 100%" alt="Sample 1">
        </div>
        <div class="col q-pt-md">
          {{ props.description }}
          <div v-if="props.tools.length > 0" class="q-pt-sm">
            <div>Development Tools</div>
            <ul>
              <li v-for="item in props.tools" :key="item">{{ item }}</li>
            </ul>
          </div>
          <q-btn v-if="props.demoLink" outline square label="Demo" class="q-ma-xs absolute-bottom-left"
          :href="props.demoLink" />
          <q-btn v-if="props.sourceLink" outline square label="Source" class="q-ma-xs absolute-bottom-right"
          :href="`https://github.com/R-Stev/${props.sourceLink}`" />
        </div>
      </div>
    </SplideSlide>
  </template>
  
  <script setup>
  import { SplideSlide } from '@splidejs/vue-splide';
  defineOptions({
    name: 'ProjectItem'
  })
  
  const props = defineProps({
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tools: {
      type: Array,
      required: true
    },
    demoLink: {
      type: String,
      default: ''
    },
    sourceLink: {
      type: String,
      default: ''
    }
  })
  </script>
  