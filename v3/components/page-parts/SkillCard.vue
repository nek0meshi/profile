<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  experience: string
  description: string
}>()
</script>

<template>
  <li class="card-wrap">
    <h3 class="h3 mb-2">{{ props.title }}</h3>
    <p class="experience mb-1">{{ props.experience }}</p>
    <p class="description">{{ props.description }}</p>
  </li>
</template>

<style lang="scss" scoped>
.card-wrap {
  margin-bottom: 20px;
  padding: 15px 20px;
  border: solid 1px $gray-3;
  border-radius: 10px;
  .experience {
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
