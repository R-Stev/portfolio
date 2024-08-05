<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="lt-md">
      <q-toolbar>
        <q-list>
        <ExternalLink
            v-for="link in externalList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-toolbar>
    </q-header>

    <q-drawer id="sidebar"  class="gt-sm" :width="115"
      show-if-above no-swipe-open no-swipe-close no-swipe-backdrop
      >
      <q-list>
        <InternalLink v-for="link in internalList" :key="link.title" v-bind="link"
        @changeRoute="handleChangeRoute" />
        <q-separator />

        <ExternalLink
          v-for="link in externalList"
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
        <ExternalLink
            v-for="link in externalList"
            :key="link.title"
            v-bind="link"
          />

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import InternalLink from 'components/InternalLink.vue'
import ExternalLink from 'components/ExternalLink.vue'
import NavItem from 'components/NavItem.vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

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
// TODO?: Could not get either of new Function(...) or window[...] to work for calling a
// function from a string, so using a switch statement for now.
function handleChangeRoute(value) {
  console.log('handleChange:', value);
  switch(value) {
    case 'Home':
      goHome();
      break;
    case 'About':
      goAbout();
      break;
    case 'Projects':
      goProjects();
      break;
    default:
      throw new Error(`Error: the function ${vallue} does not exist.`)
  }
}

window.addEventListener(
  "keydown", (event) => {
    const keyName = event.key;
    if (["ArrowDown", "PageDown"].includes(keyName)) {
      if(route.fullPath == '/') {
        router.push({path: '/about'});
        goAbout();
      }
      else if(route.fullPath == '/about') {
        router.push({path: '/projects'});
        goProjects();
      }
    }
    if (["ArrowUp", "PageUp"].includes(keyName)) {
      if(route.fullPath == '/about') {
        router.push({path: '/'});
        goHome();
      }
      else if(route.fullPath == '/projects') {
        router.push({path: '/about'});
        goAbout();
      }
    }
  }, false
)

const internalList = [
  {name: 'Home', route: '/'},
  {name: 'About', route: '/about'},
  {name: 'Projects', route: '/projects'}
]
const externalList = [
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