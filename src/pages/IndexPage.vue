<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px" >
      <div id="navIcons" class="absolute-bottom-right q-gutter-sm q-ma-sm">
        <q-icon name="fa-solid fa-arrows-up-down-left-right" />
        <q-icon name="fa-solid fa-hand-pointer" />
        <q-icon name="fa-solid fa-keyboard" />
      </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style>
  #navIcons {
    font-size: 1.5rem;
  }
</style>