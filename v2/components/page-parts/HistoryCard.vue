<template>
  <div class="card-wrap">
    <div class="flex flex-row justify-between">
      <h3>{{ title }}</h3>
      <span class="pt-2">{{ period }}</span>
    </div>
    <div>{{ description }}</div>
    <p class="tech-stack-title pt-3">使用技術</p>
    <div>{{ techStacks.join(', ') }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    period: {
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
  },
}
</script>

<style scoped lang="scss">
* {
  text-align: left;
}
h3 {
  font-size: 24px;
}
.card-wrap {
  width: 90%;
}
.tech-stack-title {
  font-weight: bold;
}
</style>
