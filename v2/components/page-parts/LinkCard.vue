<template>
  <li class="card-wrap">
    <a :href="url" target="_blank" class="flex flex-row p-5">
      <img :src="filePath" class="image mr-3">
      <div class="flex flex-col">
        <h3 class="h3">{{ title }}</h3>
        <a class="url" :href="url" target="_blank">{{ url }}</a>
        <p>{{ techStacks.join(', ') }}</p>
        <p class="description">{{ description }}</p>
      </div>
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
  height: 200px;
  width: 200px;
  object-fit: contain;
  border: solid 1px $gray-3;
}
.url {
  font-size: 14px;
}
</style>
