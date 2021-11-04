<template>
  <section>
    <h2 id="links" class="section-title">LINKS</h2>
    <ul
      class="flex flex-row flex-wrap justify-between"
    >
      <LinkCard
        v-for="link in links"
        :key="link.title"
        :title="link.title"
        :url="link.url"
        :description="link.description"
        :tech-stacks="link.techStacks"
        :file-name="link.fileName"
        class="link-card mb-5"
      />
    </ul>
  </section>
</template>

<script>
import LinkCard from './LinkCard.vue'

export default {
  components: {
    LinkCard,
  },
  computed: {
    links() {
      return [
        {
          title: '将棋盤',
          url: 'https://github.com/nek0meshi/shogi-board',
          description: '',
          techStacks: [
            'Vue.js3',
            'TypeScript',
          ],
          fileName: 'shogi.png',
        },
        {
          title: '将棋盤',
          url: 'https://github.com/nek0meshi/shogi-board',
          description: '',
          techStacks: [
            'Vue.js3',
            'TypeScript',
          ],
          fileName: 'shogi.png',
        },
      ]
    },
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: $bg-1;
}

</style>
