<template>
  <SplideSlide>
      <div class="column items-center justify-end slideImg">
        <picture>
          <source media="(max-width: 1023px)" :srcset="`thumbs/m_${props.image}`">
          <source media="(min-width: 1024px)" :srcset="`thumbs/${props.image}`">
          <img :src="`thumbs/${props.image}`" :alt="`${props.sourceLink} project thumbnail`">
        </picture>
      </div>
      <div class="column justify-between slideText">
        <div class="col-6">
          {{ props.description }}
          <div v-if="props.tools.length > 0" class="q-pt-sm column items-center">
            <div>Development Tools</div>
            <div class="row listBlock">
              <div v-for="item in props.tools" :key="item" class="col-6 listItem">{{ item }}</div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <q-btn v-if="props.demoLink" outline square label="Demo" class="float-left q-mb-xs"
          :href="props.demoLink" />
          <q-btn v-if="props.sourceLink" outline square label="Source" class="float-right q-mb-xs"
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

<style>
img {
  max-width: 100%;
  /* max-height: calc(60vh - 5px); */
}
/* .slideImg {
  height: calc(65vh - 50px);
} */
@media only screen and (max-width: 1023px) {
  img {
    max-height: calc(100vh - 340px);
  }
  .slideText {
    min-height: 230px;
    /* height: calc(35vh - 50px); */
    padding: 12px 8px 0 8px;
    /* padding-left: 16px;
    padding-right: 16px; */
  }
}
@media only screen and (min-width: 1024px) {
  img {
     max-height: 100%;
     max-width: 100%
  }
  .slideImg {
    height: 50vh;
    padding-bottom: 12px;
  }
  .slideText {
    height: 50vh;
    padding: 12px 0 0 0;
    /* padding-left: 8px;
    padding-right: 8px; */
  }
}

</style>