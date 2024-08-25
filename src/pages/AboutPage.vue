<template>
  <q-page>
    <div id="aboutBlock" class="column items-center justify-end">
      <div class="textBlock">
        <div class="q-mb-md">About</div>
        <p>I am Rowan Stevenson, a full stack web developer with an interest in continual learning.  I have worked mostly with Django, Quasar and React.  Some of what I have made is shown under projects.</p>
        <p>Current subject of learning: data analytics.</p>
      </div>
    </div>
    <div class="q-pt-md column items-center justify-start">
      <div class="q-mb-md">Skills</div>
      <div class="row listBlock">
        <div v-for="item in skillList" :key="item" class="col-4 col-sm-3 listItem">{{ item }}</div>
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