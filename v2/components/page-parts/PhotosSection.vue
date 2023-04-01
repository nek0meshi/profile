<template>
  <section id="photo">
    <div class="app-container">
      <h2 id="photos" class="section-title">PHOTOS</h2>
      <ul class="flex flex-row flex-wrap justify-between">
        <li v-for="photo in photos" :key="photo" class="photo-card">
          <img :src="'photos/' + photo" @click="select(photo)" />
        </li>
      </ul>
    </div>
    <LightBox :file-path="selectedPath" @close="clearSelection" />
  </section>
</template>

<script>
import LightBox from '../parts/LightBox.vue'

export default {
  components: {
    LightBox,
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    photos() {
      return [
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
    },
    selectedPath() {
      return this.selected ? 'photos/' + this.selected : ''
    },
  },
  methods: {
    select(target) {
      this.selected = target
    },
    clearSelection() {
      this.selected = null
    },
  },
}
</script>

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
