<template>
    <q-item :to="props.route"
    exact @click="$emit('changeRoute', props.name)">
        <q-item-section avatar class="gt-sm">
          <q-icon :name="props.icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ props.name }}</q-item-label>
        </q-item-section>
    </q-item>
  </template>
  
  <script setup>
  defineOptions({
    name: 'InternalLink'
  })

//   Emits an event to pass back to the parent, for calling the go[Route]() functions
  const emit = defineEmits(['changeRoute'])
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  })
  </script>
  