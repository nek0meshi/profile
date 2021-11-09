<template>
  <li class="flex flex-row items-stretch">
    <div class="timeline-date">
      <span class="timeline-icon"></span>
      <span class="timeline-period">{{ period }}</span>
    </div>
    <div>
      <h3 class="mt-6">{{ title }}</h3>
      <div>{{ description }}</div>
      <p class="tech-stack-title pt-3">使用技術</p>
      <div>{{ techStacks.join(', ') }}</div>
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
.tech-stack-title {
  font-weight: bold;
}
.timeline-date {
  position: relative;
  width: 1px;
  margin: 0 30px -30px;
  background-color: $gray-3;
}
.timeline-icon {
  position: absolute;
  top: 5px;
  left: -5px;
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background-color: $main-3;
}
.timeline-period {
  position: absolute;
  top: 2px;
  left: 15px;
  width: 200px;
  font-size: 12px;
  color: $main-2;
}
li {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
    .timeline-date {
      margin-bottom: 0;
    }
  }
}
</style>
