<script setup lang="ts">
import { computed, ref } from 'vue'
import AppContainer from '~/components/parts/AppContainer.vue'
import LightBox from '../parts/LightBox.vue'

const photos = [
  'DSC03381.jpeg',
  'DSC04099.JPG',
  'DSC04722.JPG',
  'DSC04772.JPG',
  'DSC08398.JPG',
  'DSC06286.JPG',
  'DSC08311.JPG',
  'DSC01744.jpeg',
  'DSC01992.jpeg',
  'DSC02177.jpeg',
  'DSC02182.jpeg',
  'DSC04930.JPG',
]

const selectedIndex = ref<null | number>(null)

const selectedPath = computed(() =>
  selectedIndex.value !== null ? 'photos/' + photos[selectedIndex.value] : '',
)

const select = (index: number) => (selectedIndex.value = index)
const clearSelection = () => (selectedIndex.value = null)
const go = (val: number) => {
  const newVal = (selectedIndex.value ?? 0) + val

  if (!hasPhoto(newVal)) {
    return
  }

  selectedIndex.value = newVal
}
const hasPhoto = (val: number): boolean => val >= 0 && val < photos.length
</script>

<template>
  <app-container id="photos" title="PHOTOS">
    <ul class="flex flex-row flex-wrap justify-between">
      <li v-for="(photo, index) in photos" :key="photo" class="photo-card">
        <img :src="'photos/' + photo" @click="select(index)" />
      </li>
    </ul>
    <LightBox
      :file-path="selectedPath"
      :has-left="hasPhoto(selectedIndex !== null && selectedIndex - 1)"
      :has-right="hasPhoto(selectedIndex !== null && selectedIndex + 1)"
      @close="clearSelection"
      @go-left="go(-1)"
      @go-right="go(1)"
    />
  </app-container>
</template>

<style scoped>
.photo-card {
  width: calc(33% - 5px);
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.2s;
}

.photo-card:hover {
  filter: brightness(80%);
}

@media (max-width: 1024px) {
  .photo-card {
    width: calc(50% - 5px);
  }
}

@media (max-width: 768px) {
  .photo-card {
    width: 100%;
  }
}
</style>
