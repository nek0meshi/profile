<script setup lang="ts">
import AppFooter from './components/page-parts/AppFooter.vue'
import AppHeader from './components/page-parts/AppHeader.vue'
import AboutSection from './components/page-parts/AboutSection.vue'
import Hero from './components/page-parts/Hero.vue'
import HistorySection from './components/page-parts/HistorySection.vue'
import SkillsSection from './components/page-parts/SkillsSection.vue'
import LinksSection from './components/page-parts/LinksSection.vue'
import PhotosSection from './components/page-parts/PhotosSection.vue'
</script>

<template>
  <div>
    <AppHeader />
    <Hero />
    <AboutSection />
    <HistorySection />
    <SkillsSection />
    <LinksSection />
    <PhotosSection />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/main.scss';

section {
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>
