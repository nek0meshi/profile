<template>
  <header>
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item py-0" href="#">
          <span class="nm-brand">Portfolio</span>
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showingBurgerMenu = !showingBurgerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showingBurgerMenu }"
      >
        <div class="navbar-start">
          <a href="#aboutSection" class="navbar-item">
            About
          </a>
          <a href="#skillsSection" class="navbar-item">
            Skill
          </a>
          <a href="#favoritesSection" class="navbar-item">
            Favorites
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showingBurgerMenu: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nm-brand {
  font-size: 2rem;
}
nav.navbar {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
