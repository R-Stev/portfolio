<template>
  <q-page>
    <div class="q-pb-sm column items-center justify-end" style="height: 50vh">
      About
    </div>
    <div class="q-pt-sm column items-center justify-start" style="height: 50vh">
      Skills
      <div class="row" id="skillBlock">
        <div v-for="item in skillList" :key="item" class="col-6 col-sm-4 col-md-3 skillItem">{{ item }}</div>
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
#skillBlock {
  /* wfg */
}
.skillItem {
  /* wfg */
}
.skillItem::before {
  color: #3C896D;
  content: '+';
  font-size: 1.5em;
  position: relative;
  right: 5px;
}
</style>