<template>
  <q-page id="projComp">
    <ProjectCarousel />
  </q-page>
</template>

<script setup>
import ProjectCarousel from 'components/ProjectCarousel.vue';
</script>

<style>
#projComp {
  margin-left: calc(50vw - 270px);
  margin-right: calc(50vw - 270px);
}
</style>