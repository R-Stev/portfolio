<!-- TODO
merge InternalLink & ExternalLink?
adjust or remove splash page -->

<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="lt-md">
      <q-toolbar>
        <q-space></q-space>
        <InternalLink v-for="link in internalList" :key="link.title" v-bind="link" />
        <div id="darkModeButton" class="q-ml-xs">
          <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer id="sidebar" class="gt-sm" :width="125"
      show-if-above no-swipe-open no-swipe-close no-swipe-backdrop
      >
      <q-list>
        <div id="topSidebarSpace" class="transition"></div>
        <InternalLink v-for="link in internalList" :key="link.title" v-bind="link"
        @changeRoute="updateSidebar" />
        <div id="bottomSidebarSpace" class="transition"></div>
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
    <div id="darkModeButton" class="gt-sm q-mt-xs q-mr-sm absolute-top-right">
      <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"/>
    </div>

    <q-page-container id="pageContainer">
      <router-view />
    </q-page-container>
    <q-footer class="lt-md">
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
const sidebarOffset = 244
let initialX = null
let initialY = null
let currentX = null
let currentY = null
let initialTime = null
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  $q.dark.set(true)
}

defineOptions({
  name: 'MainLayout'
})

function setSidebarSpacing(n) {
  document.getElementById("topSidebarSpace").style.height = (sidebarOffset - n).toString() + 'px';
  document.getElementById("bottomSidebarSpace").style.height = n.toString() + 'px';
}
// TODO?: Could not get either of new Function(...) or window[...] to work for calling a
// function from a string, so using a switch statement for now.
function updateSidebar(value) {
  switch(value) {
    case 'Home':
      setSidebarSpacing(0);
      break;
    case 'About':
      setSidebarSpacing(48);
      break;
    case 'Projects':
      setSidebarSpacing(96);
      break;
    default:
      throw new Error(`Error: the function ${value} does not exist.`)
  }
}
function changeNav(dir) {
  if(dir == "down") {
    if(route.fullPath == '/') {
        router.push({path: '/about'});
        setSidebarSpacing(48);
      }
      else if(route.fullPath == '/about') {
        router.push({path: '/projects'});
        setSidebarSpacing(96);
      }
  }
  else if (dir == "up") {
    if(route.fullPath == '/about') {
        router.push({path: '/'});
        setSidebarSpacing(0);
      }
      else if(route.fullPath == '/projects') {
        router.push({path: '/about'});
        setSidebarSpacing(48);
      }
  }
}

window.addEventListener(
  "keydown", (event) => {
    const keyName = event.key;
    if (["ArrowDown", "PageDown"].includes(keyName)) {
      changeNav("down");
    }
    if (["ArrowUp", "PageUp"].includes(keyName)) {
      changeNav("up");
    }
  }, false
)
window.addEventListener(
  "touchstart", (event) => {
    initialX = event.touches[0].clientX;
    initialY = event.touches[0].clientY;
    initialTime = Date.now();
  }, false
)
window.addEventListener(
  "touchmove", (event) => {
    if (!initialX || !initialY) {
        return;
    }
    currentX = event.touches[0].clientX;
    currentY = event.touches[0].clientY;
  }, false
)
window.addEventListener(
  "touchend", (event) => {
    let xDiff = initialX - currentX;
    let yDiff = initialY - currentY;
    let timeDiff = Date.now() - initialTime;
    // console.log(xDiff, yDiff, timeDiff);
    if ((Math.abs(xDiff) < Math.abs(yDiff)) && (Math.abs(yDiff) > 150) && (timeDiff < 200)){
      if (yDiff > 0){
        changeNav("down");
      } else {
        changeNav("up");
      }
    }
    initialX = null;
    initialY = null;
    initialTime = null;
  }, false
)

const internalList = [
  {name: 'Home', route: '/', icon: 'fa-solid fa-house'},
  {name: 'About', route: '/about', icon: 'fa-solid fa-address-card'},
  {name: 'Projects', route: '/projects', icon: 'fa-solid fa-file-code'}
]
const externalList = [
  {
    title: 'Github',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/R-Stev'
  },
  {
    title: 'Linkedin',
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/rowanstevenson/'
  },
  {
    title: 'Source',
    icon: 'fa-solid fa-code',
    link: 'https://github.com/R-Stev/portfolio'
  }
]
</script>

<style>
ul {
  list-style-type: square;
}
ul li::marker {
  color: #306E57;
}
.body--light, .body--light .q-drawer {
  background: #efefef;
}
.body--light header, .body--light footer {
  background: #dfdfdf;
}
.body--dark {
  --q-primary: #439979;
}
.body--dark header, .body--dark footer {
  background: #202020;
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
    height: 244px;
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
    padding-right: 125px;
  }
}
.textBlock {
  max-width: 90vw;
}
.listBlock {
  min-width: 200px;
  max-width: min(350px, 85vw);
}
@media only screen and (min-width: 600px) {
  .textBlock {
    max-width: 65vw;
  }
  .listBlock {
    max-width: 450px;
  }
}
.listItem::before {
  color: #306E57;
  content: '+';
  position: relative;
  right: 5px;
}
.body--dark .listItem::before {
  color: #439979;
}
</style>