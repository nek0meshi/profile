<template>
  <header class="md:container mx-auto py-4 text-white">
    <ul class="flex flex-row gap-4 justify-end">
      <li v-for="link in links" :key="link.label">
        <a :href="link.href" class="text-white">{{ link.label }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    links() {
      return [
        {
          href: '#about',
          label: 'ABOUT',
        },
        {
          href: '#history',
          label: 'HISTORY',
        },
        {
          href: '#skills',
          label: 'SKILLS',
        },
        {
          href: '#links',
          label: 'LINKS',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: -56px;
}
</style>
