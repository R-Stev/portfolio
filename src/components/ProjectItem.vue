<template>
    <SplideSlide>
      <div class="column">
        <div class="col">
          <img :src="`src/assets/${props.image}`" style="max-height: 100%; max-width: 100%" alt="Sample 1">
        </div>
        <div class="col">
          {{ props.description }}
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
  