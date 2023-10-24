<script setup lang="ts">
import { computed, ref } from 'vue'
import AppContainer from '~/components/parts/AppContainer.vue'
import LightBox from '../parts/LightBox.vue'

const photos = [
  'DSC03381.jpeg',
  'DSC02526.jpeg',
  'DSC01741.jpeg',
  'DSC02253.jpeg',
  'DSC01744.jpeg',
  'DSC01992.jpeg',
  'DSC02007.jpeg',
  'DSC02177.jpeg',
  'DSC02182.jpeg',
  'DSC02264.jpeg',
  'DSC00112.jpeg',
  'DSC02261.jpeg',
]

const selectedIndex = ref<null | number>(null)

const selectedPath = computed(() =>
  selectedIndex.value !== null ? 'photos/' + photos[selectedIndex.value] : '',
)

const select = (index) => (selectedIndex.value = index)
const clearSelection = () => (selectedIndex.value = null)
const go = (val) => {
  if (!hasPhoto(selectedIndex.value + val)) {
    return
  }

  selectedIndex.value += val
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

<style lang="scss" scoped>
.photo-card {
  width: calc(33% - 5px);
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(80%);
  }

  @media (max-width: $tablet-max-width) {
    width: calc(50% - 5px);
  }

  @media (max-width: $mobile-max-width) {
    width: 100%;
  }
}
</style>
