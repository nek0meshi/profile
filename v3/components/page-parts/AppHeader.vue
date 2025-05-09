<script setup lang="ts">
import { computed, onMounted, ref, ComputedRef } from 'vue'
import ClassBinding from '../../src/common'
import NavModal from './NavModal.vue'

const links = [
  {
    href: '#about',
    label: 'ABOUT',
  },
  {
    href: '#history',
    label: 'HISTORY',
  },
  {
    href: '#skills',
    label: 'SKILLS',
  },
  {
    href: '#links',
    label: 'LINKS',
  },
  {
    href: '#photos',
    label: 'PHOTOS',
  },
]

const showNavModal = ref(false)
const isScrolled = ref(false)

const headerClass: ComputedRef<ClassBinding> = computed(() => ({
  scrolled: isScrolled.value,
}))
const hamburgerWrapClass: ComputedRef<ClassBinding> = computed(() => ({
  'show-modal': showNavModal.value,
}))

const clickHamburger = () => (showNavModal.value = !showNavModal.value)

const scrollLink = (href: string) => {
  // https://www.fenet.jp/dotnet/column/language/javascript/7491#JavaScript
  const target = document.querySelector<HTMLElement>(href)

  const top: string = target.offsetTop - 80
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.hero-image')

    if (!header) {
      console.error('header is null')

      return
    }

    isScrolled.value = window.scrollY > header.clientHeight - 50
  })
})
</script>

<template>
  <header class="header fixed w-full" :class="headerClass">
    <div class="header-wrap mx-auto text-white relative">
      <ul
        class="flex flex-row gap-4 justify-end items-center header-content header-links"
      >
        <li v-for="link in links" :key="link.label">
          <a class="header-link-a text-white" @click="scrollLink(link.href)">{{
            link.label
          }}</a>
        </li>
      </ul>
      <nav
        class="flex flex-row justify-end items-center header-content hamburger-wrap"
        :class="hamburgerWrapClass"
      >
        <a class="hamburger" @click="clickHamburger">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </a>
      </nav>
    </div>
    <NavModal
      :show="showNavModal"
      :links="links"
      @close="showNavModal = false"
      @jump="scrollLink($event)"
    />
  </header>
</template>

<style scoped>
.header {
  z-index: 8000;
}

.header .header-wrap > * {
  transition: 1s;
}

.header.scrolled .header-wrap > * {
  background-color: var(--main-1);
}

.header-content {
  position: absolute;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  height: 56px;
}

.header-content a {
  cursor: pointer;
}

.header-links {
  display: flex;
}

@media (max-width: 768px) {
  .header-links {
    display: none;
  }
}

.header-link-a {
  display: block;
  position: relative;
  text-decoration: none;
}

.header-link-a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  border-bottom: solid 2px var(--white);
  transition: 0.5s;
}

.header-link-a:hover::after {
  transition: 0.5s;
  width: 100%;
}

.hamburger-bar {
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: #eee;
  transition: 0.5s;
}

.hamburger-bar:nth-child(1) {
  top: calc(50% - 10px);
}

.hamburger-bar:nth-child(2) {
  top: 50%;
}

.hamburger-bar:nth-child(3) {
  top: calc(50% + 10px);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 24px;
  width: 24px;
  z-index: 10000;
}

.hamburger-wrap {
  display: none;
}

@media (max-width: 768px) {
  .hamburger-wrap {
    display: flex;
  }
}

.hamburger-wrap.show-modal .hamburger-bar {
  background-color: #000;
  transform: rotateZ(45deg);
  transition: 0.5s;
}

.hamburger-wrap.show-modal .hamburger-bar:nth-child(1) {
  top: 50%;
}

.hamburger-wrap.show-modal .hamburger-bar:nth-child(2) {
  top: 50%;
}

.hamburger-wrap.show-modal .hamburger-bar:nth-child(3) {
  top: 50%;
  transform: rotateZ(-45deg);
}
</style>
