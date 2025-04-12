<script setup lang="ts">
import { computed, ComputedRef, defineProps } from 'vue'
import ClassBinding from '~/src/common'
const props = defineProps<{
  id: string
  title: string
  isGray?: boolean
}>()

const { id, title, isGray = false } = props

const classObj: ComputedRef<ClassBinding> = computed(() => [
  {
    'is-gray': isGray,
  },
  'app-container',
])
</script>

<template>
  <section :class="classObj">
    <div class="app-container-inner">
      <h2 :id="id" class="section-title">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.app-container {
  padding-top: 70px;
  padding-bottom: 70px;

  &.is-gray {
    background-color: var(--bg-1);
  }

  & .app-container-inner {
    width: var(--tablet-max-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media (max-width: 1024px) {
  .app-container .app-container-inner {
    width: 768px;
  }
}

@media (max-width: 768px) {
  .app-container .app-container-inner {
    width: 100%;
  }
}

.app-container .app-container-inner .section-title {
  font-size: 40px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .app-container .app-container-inner .section-title {
    font-size: 32px;
  }
}

.app-container .app-container-inner .h2 {
  font-size: 40px;
}
</style>
