<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
const props = defineProps<{
  title: string
  period: string
  description: string
  techStacks: string[]
}>()

onMounted(() => {
  // 要素の位置までスクロールしたらフェードインする.
  // ref. https://cony-tas.com/javascript-scroll-event01
  const element = document.querySelectorAll('.history-card-fade-in')
  const windowH = window.innerHeight

  window.addEventListener('scroll', () => {
    // 係数
    const k = 1.1

    for (const e of element) {
      if (windowH > e.getBoundingClientRect().top * k) {
        e.classList.add('show')
      } else {
        e.classList.remove('show')
      }
    }
  })
})
</script>

<template>
  <li class="flex flex-row items-stretch history-card-wrap">
    <div class="timeline-date">
      <span class="timeline-icon"></span>
      <span class="timeline-period history-card-fade-in">{{
        props.period
      }}</span>
    </div>
    <div class="history-card-fade-in">
      <h3 class="mt-7 title">{{ props.title }}</h3>
      <div class="mb-3">{{ props.description }}</div>
      <p class="tech-stack-title">使用技術</p>
      <div>{{ props.techStacks.join(', ') }}</div>
    </div>
  </li>
</template>

<style scoped>
* {
  text-align: left;
}

@keyframes fadein-top {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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
  margin: 0 30px -30px 5px;
  background-color: var(--gray-3);
}

.timeline-icon {
  position: absolute;
  top: 5px;
  left: -5px;
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background-color: var(--main-3);
}

.title {
  margin-bottom: 8px;
}

.timeline-period {
  position: absolute;
  top: 2px;
  left: 20px;
  width: 200px;
  font-size: 12px;
  color: var(--main-2);
}

.history-card-wrap {
  margin-bottom: 30px;
}

.history-card-wrap:last-child {
  margin-bottom: 0;
}

.history-card-wrap:last-child .timeline-date {
  margin-bottom: 0;
}

.history-card-wrap .history-card-fade-in {
  opacity: 0;
}

.history-card-wrap .history-card-fade-in.show {
  animation: fadein-top 1s 0.1s ease-in forwards;
}
</style>
