<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="lt-md"
    :style="`background: ${$q.dark.isActive ? '#202020' : '#dfdfdf'};`" >
      <q-toolbar>
        <q-space></q-space>
        <InternalLink v-for="link in internalList" :key="link.title" v-bind="link" />
        <div id="darkModeButton" class="q-ml-xs">
          <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer id="sidebar"  class="gt-sm" :width="115"
      show-if-above no-swipe-open no-swipe-close no-swipe-backdrop
      :style="`background: ${$q.dark.isActive ? '#101010' : '#efefef'};`"
      >
      <q-list>
        <div id="topSidebarSpace" class="transition"></div>
        <InternalLink v-for="link in internalList" :key="link.title" v-bind="link"
        @changeRoute="handleChangeRoute" />
        <q-separator />

        <ExternalLink
          v-for="link in externalList"
          :key="link.title"
          v-bind="link"
        />
        <div id="bottomSidebarSpace" class="transition"></div>
      </q-list>
    </q-drawer>
    <div id="marker" class="gt-sm">
      <q-icon name="fa-solid fa-caret-left"  />
    </div>
    <div id="darkModeButton" class="gt-sm q-mt-xs q-mr-sm absolute-top-right">
      <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"/>
    </div>

    <q-page-container id="pageContainer">
      <router-view />
    </q-page-container>
    <q-footer class="lt-md"
    :style="`background: ${$q.dark.isActive ? '#202020' : '#dfdfdf'};`">
      <q-toolbar>
        <q-space></q-space>
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
import { useQuasar } from 'quasar'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()

defineOptions({
  name: 'MainLayout'
})

function goHome() {
  console.log('home')
  document.getElementById("topSidebarSpace").style.height='196px';
  document.getElementById("bottomSidebarSpace").style.height = '0px';
}
function goAbout() {
  console.log('about')
  document.getElementById("topSidebarSpace").style.height='148px';
  document.getElementById("bottomSidebarSpace").style.height = '48px';
}
function goProjects() {
  console.log('projects')
  document.getElementById("topSidebarSpace").style.height='100px';
  document.getElementById("bottomSidebarSpace").style.height = '96px';
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
      throw new Error(`Error: the function ${value} does not exist.`)
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
ul {
  list-style-type: square;
}
ul li::marker {
  color: #3C896D;
}
.body--light {
  background: #efefef;
}
.body--dark {
  --q-primary: #4FB286;
}
.body--light .q-header, .body--light .q-footer {
  color: #000000;
}
.q-toolbar {
  padding: 0 8px;
}
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
#topSidebarSpace {
    height: 196px;
}
#bottomSidebarSpace {
    height: 0px;
}
.transition {
  transition: height 0.5s linear;
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