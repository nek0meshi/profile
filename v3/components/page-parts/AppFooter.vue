<script setup lang="ts">
const links: {
  title: string
  url: string
  imageFileName: string
  bdColor?: string
}[] = [
  {
    title: 'github',
    url: 'https://github.com/nek0meshi',
    imageFileName: 'GitHub-Mark-Light-120px-plus.png',
    bdColor: '#000',
  },
  {
    title: 'twitter',
    url: 'https://twitter.com/yushi0dev',
    imageFileName: 'Twitter social icons - circle - blue.png',
  },
  {
    title: 'hatena-blog',
    url: 'https://yushi-dev.hatenablog.com',
    imageFileName: 'hatenablog-logo.svg',
  },
]
</script>

<template>
  <footer>
    <ul class="logos flex flex-row">
      <li v-for="link in links" :key="link.title">
        <a :href="link.url" target="_blank">
          <img
            :src="'logo/' + link.imageFileName"
            class="link-logo"
            :style="{ 'background-color': link.bdColor || '#fff' }"
          />
        </a>
      </li>
    </ul>
    <p>©︎ 2021-2025 YUSHI WATANABE</p>
  </footer>
</template>

<style scoped>
* {
  color: #fff;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 180px;
  width: 100%;
  background-color: var(--main-1);
}

.logos {
  gap: 30px;
}

.link-logo {
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  transition: 0.5s;
}

.link-logo:hover {
  transition: 0.5s;
  transform: translateY(-5px);
}
</style>
