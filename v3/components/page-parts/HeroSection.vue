<template>
  <div
    class="hero-image bg-no-repeat bg-cover flex justify-center items-center"
  >
    <h1 class="h2 text-white">YUSHI WATANABE</h1>
  </div>
</template>

<style scoped>
.hero-image {
  width: 100%;
  height: 100vh;
  background-image: url('/hero.jpg');
}

.hero-image h1 {
  color: #fff;
  font-size: 72px;
}

@media (max-width: 768px) {
  .hero-image h1 {
    font-size: 50px;
  }
}
</style>
