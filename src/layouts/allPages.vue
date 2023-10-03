<template>
  <main>
    <div class="container grid grid-cols-12 gap-6">
      <aside class="col-span-3 md:col-span-12 md:order-2">
        <Menu />
      </aside>
      <section class="col-span-9 md:col-span-12">
        <RouterView />
      </section>
    </div>

    <div v-if="!hidden">
      <other-news v-if="getSlugRouter" />
      <useful-links v-else />
    </div>
    <Footer :class="{ 'mt-8': hidden }" />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Menu from '@/components/common/Menu.vue'
import OtherNews from '@/components/common/OtherNews.vue'
import UsefulLinks from '@/components/common/UsefulLinks.vue'
import Footer from '@/components/layout/Footer.vue'

/* DATA */
const route = useRoute()
const getSlugRouter = computed(() => {
  return route.params.slug ? true : false
})

const hidden = computed(() => {
  return route.name === 'announcementSlug' || route.name === 'pollsSlug'
})
</script>

<style lang="scss" scoped></style>
