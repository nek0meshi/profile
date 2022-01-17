<template>
  <li class="card-wrap">
    <a :href="url" target="_blank" class="p-5 flex flex-col items-center">
      <h3 class="h3 mb-3">{{ title }}</h3>
      <div class="flex flex-row mb-3">
        <img :src="filePath" class="image mr-3">
        <div class="flex flex-col">
          <p v-if="techStacks.length">{{ techStacks.join(', ') + '。' }}</p>
          <p class="description">{{ description }}</p>
        </div>
      </div>
      <small class="url">{{ url }}</small>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    techStacks: {
      type: Array,
      default: () => [],
    },
    fileName: {
      type: String,
      default: '',
    },
  },
  computed: {
    filePath() {
      return 'links/' + this.fileName
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  text-align: left;
  text-decoration: none;
}
.card-wrap {
  background-color: #fff;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 50px -10px $gray-2;
    transition: 0.5s;
  }
}
.image {
  height: 150px;
  width: 150px;
  object-fit: contain;
  border: solid 1px $gray-3;
}
.url {
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: $gray-2;
}
</style>
