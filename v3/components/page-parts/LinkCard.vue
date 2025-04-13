<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  title: string
  url: string
  description: string
  techStacks: string[]
  fileName: string
}>()

const filePath = computed(() => 'links/' + props.fileName)
</script>

<template>
  <li class="card-wrap">
    <a :href="url" target="_blank" class="p-5 flex flex-col items-center">
      <h3 class="h3">{{ props.title }}</h3>
      <div class="card-content mb-3 self-stretch">
        <img :src="filePath" class="image" />
        <div class="flex flex-col">
          <p v-if="techStacks.length">
            {{ props.techStacks.join(', ') + '。' }}
          </p>
          <p class="description">{{ props.description }}</p>
        </div>
      </div>
      <small class="url">{{ props.url }}</small>
    </a>
  </li>
</template>

<style scoped>
* {
  text-align: left;
  text-decoration: none;
}

.card-wrap {
  background-color: #fff;
  transition: 0.5s;
}

.card-wrap:hover {
  box-shadow: 0 0 50px -10px var(--gray-2);
  transition: 0.5s;
}

.card-content {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
    align-items: center;
  }

  .card-content * {
    text-align: center;
  }
}

.h3 {
  border-bottom: solid var(--text-1) 1px;
  margin-bottom: 25px;
}

.image {
  height: 150px;
  width: 150px;
  object-fit: contain;
  border: solid 1px var(--gray-3);
  margin-right: 12px;
}

@media (max-width: 768px) {
  .image {
    margin-right: 0;
    margin-bottom: 12px;
    height: auto;
    min-width: 80%;
  }
}

.url {
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: var(--gray-2);
  word-wrap: break-word;
}
</style>
