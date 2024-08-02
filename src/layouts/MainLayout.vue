<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="lt-md">
      <q-toolbar>
        <q-list>
        <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-toolbar>
    </q-header>

    <q-drawer id="sidebar" :width="115" :breakpoint="1024"
      show-if-above no-swipe-open no-swipe-close no-swipe-backdrop
      >
      <q-list>
        <q-item id="homeBtn" class="transition" to="/" exact @click="goHome()">
          <q-item-section avatar ></q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item id="aboutBtn" to="/about" exact @click="goAbout()">
          <q-item-section avatar ></q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
        <q-item id="projectsBtn" class="transition" to="/projects" exact @click="goProjects()">
          <q-item-section avatar ></q-item-section>
          <q-item-section>
            <q-item-label>Projects</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <div id="marker" class="gt-sm">
      <q-icon name="fa-solid fa-caret-left"  />
    </div>

    <q-page-container id="pageContainer">
      <router-view />
    </q-page-container>
    <q-footer class="lt-md">
      <q-toolbar>
        <q-space ></q-space>
        <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import NavItem from 'components/NavItem.vue'

defineOptions({
  name: 'MainLayout'
})

function goHome() {
  console.log('home')
  document.getElementById("homeBtn").style.marginTop='196px';
  document.getElementById("projectsBtn").style.marginBottom = '0px';
}
function goAbout() {
  console.log('about')
  document.getElementById("homeBtn").style.marginTop='148px';
  document.getElementById("projectsBtn").style.marginBottom = '48px';
}
function goProjects() {
  console.log('projects')
  document.getElementById("homeBtn").style.marginTop='100px';
  document.getElementById("projectsBtn").style.marginBottom = '96px';
}

const linksList = [
  {
    title: 'Github',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Linkedin',
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/rowanstevenson/'
  }
]
</script>

<style>
.q-item {
  padding: 8px 12px;
}
.q-item__section--avatar {
  min-width: 36px;
}
.q-item__section--side {
  padding-right: 8px;
}
#sidebar {
  display: flex;
  place-items: center;
}
#homeBtn {
  margin-top: 196px;
}
.transition {
  transition: margin 0.5s linear;
}
#marker {
  position:absolute;
  top: calc(50% - 10.5px);
  left: 105px;
  z-index: 3001;
}
@media only screen and (min-width: 1024px) {
  #pageContainer {
    padding-right: 115px;
  }
}
</style>