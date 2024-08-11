<template>
  <q-page>
    <div id="aboutBlock" class="q-pb-sm column items-center justify-end">
      <div>About</div>
    </div>
    <div class="q-pt-sm column items-center justify-start">
      <div>Skills</div>
      <div class="row justify-between" id="skillBlock">
        <div v-for="item in skillList" :key="item" class="col-6 col-sm-3 skillItem">{{ item }}</div>
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
#skillBlock {
  max-width: 65vw;
  /* wfg */
}
.skillItem {
  /* wfg */
  /* max-width: 120px !important; */
}
.skillItem::before {
  color: #3C896D;
  content: '+';
  font-size: 1.5em;
  position: relative;
  right: 5px;
}
</style>