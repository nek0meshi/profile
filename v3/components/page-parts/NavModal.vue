<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  links: {
    label: string
    href: string
  }[]
  show: boolean
}>()

const emit = defineEmits<{
  close: []
  jump: [href: string]
}>()

const navClass = computed(() => ({
  show: props.show,
}))
</script>

<template>
  <div
    class="nav-modal flex justify-center items-center"
    :class="navClass"
    @click="emit('close')"
  >
    <ul class="ul flex flex-col justify-between">
      <li v-for="link in props.links" :key="link.label">
        <a @click="emit('jump', link.href)">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav-modal {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9000;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.5s;
  opacity: 0;
  pointer-events: none;

  &.show {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.5s;
  }
  * {
    font-size: 30px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
}
.ul {
  height: 40%;
}
</style>
