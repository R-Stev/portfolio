<template>
  <q-page>
    <div id="aboutBlock" class="q-pb-sm column items-center justify-end">
      <div>About</div>
    </div>
    <div class="q-pt-sm column items-center justify-start">
      <div>Skills</div>
      <div class="row listBlock">
        <div v-for="item in skillList" :key="item" class="col-6 col-sm-3 listItem">{{ item }}</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'AboutPage'
});

const skillList = [
  'HTML', 'CSS', 'Javascript', 'Quasar', 'React', 'Python', 'Django', 'PostgreSQL', 'Git'
];
</script>

<style>
#aboutBlock {
   height: calc(50vh - 50px);
}
@media only screen and (min-width: 1024px) {
  #aboutBlock {
    height: 50vh;
  }
}
.listItem::before {
  font-size: 1.5em;
}
</style>