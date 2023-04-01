<template>
  <transition name="fade">
    <div
      v-if="filePath"
      class="light-box flex justify-center items-center"
      @click="$emit('close')"
    >
      <img class="image" :src="filePath" />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    filePath: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.light-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: #000;
  cursor: pointer;
}
.image {
  width: 90%;
  height: 90%;
  object-fit: contain;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
