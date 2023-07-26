<template>
  <section class="pt-16 pb-8">
    <div class="container">
      <h2 class="page-title">Boshqa yangiliklar</h2>
      <div class="grid grid-cols-4 gap-6">
        <news v-for="(item, index) in 4" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import News from '@/components/card/News.vue'
export default {
  components: {
    News
  }
}
</script>

<style lang="scss" scoped></style>
