<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  filePath: string
  hasLeft: boolean
  hasRight: boolean
}>()

const emit = defineEmits<{
  close: []
  'go-left': []
  'go-right': []
}>()
</script>

<template>
  <transition name="fade">
    <div
      v-show="filePath"
      class="light-box flex flex-row justify-around items-center"
      @click="emit('close')"
    >
      <button
        class="arrow-button left-arrow"
        :class="{ hasNext: props.hasLeft }"
        @click.stop="emit('go-left')"
      />
      <img class="image" :src="props.filePath" @click.stop />
      <button
        class="arrow-button right-arrow"
        :class="{ hasNext: props.hasRight }"
        @click.stop="emit('go-right')"
      />
    </div>
  </transition>
</template>

<style scoped>
.light-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: #000;
  cursor: pointer;
}
.image {
  max-width: calc(100% - 150px);
  max-height: 90%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .image {
    max-width: 100%;
  }
}

.arrow-button {
  position: relative;
  background-color: #333;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0;

  &::after {
    content: '';
    position: absolute;
    top: calc(50px / 2 - 15px);
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }

  &.left-arrow::after {
    border-right: 15px solid #aaa;
    left: calc(50px / 2 - 15px * 2 / 3);
  }

  &.right-arrow::after {
    border-left: 15px solid #aaa;
    right: calc(50px / 2 - 15px * 2 / 3);
  }

  &.hasNext {
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .arrow-button {
    position: fixed;
    top: 0;
    width: 100px;
    height: 100%;
    border-radius: 0;

    &::after {
      display: none;
    }

    &.left-arrow {
      left: 0;
    }

    &.right-arrow {
      right: 0;
    }

    &.hasNext {
      opacity: 0;
    }
  }
}

.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
