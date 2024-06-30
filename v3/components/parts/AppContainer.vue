<script setup lang="ts">
import { computed, ComputedRef, defineProps, withDefaults } from 'vue'
import ClassBinding from '~/src/common'
const { id, title, isGray } = withDefaults(
  defineProps<{
    id: string
    title: string
    isGray?: boolean
  }>(),
  {
    isGray: false,
  },
)

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

<style scoped lang="scss">
.app-container {
  padding-top: 70px;
  padding-bottom: 70px;

  &.is-gray {
    background-color: $bg-1;
  }

  .app-container-inner {
    width: $tablet-max-width;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (max-width: $tablet-max-width) {
      width: $mobile-max-width;
    }
    @media (max-width: $mobile-max-width) {
      width: 100%;
    }

    .section-title {
      font-size: 40px;
      margin-bottom: 30px;
      @media (max-width: $mobile-max-width) {
        font-size: 32px;
      }
    }

    .h2 {
      font-size: 40px;
    }
  }
}
</style>
