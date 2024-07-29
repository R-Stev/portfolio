<template>
    <q-icon name="img:github-mark.svg"></q-icon>
    <!-- <img :src="getImageUrl()"> -->
    <div>{{ props.item }}</div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: String,
    required: true
  }
})
function getImageUrl() {
    return new URL(`../components/icons/${props.item}.svg`, import.meta.url)
}
</script>

