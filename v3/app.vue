<script setup lang="ts">
import AppFooter from './components/page-parts/AppFooter.vue'
import AppHeader from './components/page-parts/AppHeader.vue'
import AboutSection from './components/page-parts/AboutSection.vue'
import HeroSection from './components/page-parts/HeroSection.vue'
import HistorySection from './components/page-parts/HistorySection.vue'
import SkillsSection from './components/page-parts/SkillsSection.vue'
import LinksSection from './components/page-parts/LinksSection.vue'
import PhotosSection from './components/page-parts/PhotosSection.vue'
</script>

<template>
  <div>
    <AppHeader />
    <HeroSection />
    <AboutSection />
    <HistorySection />
    <SkillsSection />
    <LinksSection />
    <PhotosSection />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono&family=Zen+Kaku+Gothic+Antique&display=swap');

* {
  font-family: 'Red Hat Mono', 'Zen Kaku Gothic Antique', monospace, sans-serif;
  text-align: center;
  font-size: 16px;
  color: $text-1;
}

.h3 {
  font-size: 24px;
}
</style>
