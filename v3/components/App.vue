<script setup lang="ts">
import AppFooter from './page-parts/AppFooter.vue'
import AppHeader from './page-parts/AppHeader.vue'
import AboutSection from './page-parts/AboutSection.vue'
import HeroSection from './page-parts/HeroSection.vue'
import HistorySection from './page-parts/HistorySection.vue'
import SkillsSection from './page-parts/SkillsSection.vue'
import LinksSection from './page-parts/LinksSection.vue'
import PhotosSection from './page-parts/PhotosSection.vue'
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
