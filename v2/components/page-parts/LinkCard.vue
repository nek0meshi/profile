<template>
  <li class="card-wrap flex flex-row p-5">
    <img :src="filePath" class="image mr-3">
    <div class="flex flex-col">
      <h3 class="h3">{{ title }}</h3>
      <a class="url" :href="url" target="_blank">{{ url }}</a>
      <p>{{ techStacks.join(', ') }}</p>
      <p class="description">{{ description }}</p>
    </div>
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
}
.card-wrap {
  background-color: #fff;
  width: 600px;
}
.image {
  height: 200px;
  width: 200px;
  object-fit: contain;
}
.url {
  font-size: 14px;
}
</style>
