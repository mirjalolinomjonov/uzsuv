<template>
  <section>
    <h1 class="page-title">Fotogalereya</h1>
    <div class="grid grid-cols-9 gap-6 lg:grid-cols-4">
      <photo-gallery class="col-span-3 lg:col-span-2 sm:col-span-4" v-for="item in 9" :key="item" />
    </div>
    <pagination :total="50" />
  </section>
</template>

<script>
import PhotoGallery from '@/components/card/PhotoGallery.vue'
import Pagination from '@/components/common/Pagination.vue'
export default {
  components: {
    PhotoGallery,
    Pagination
  }
}
</script>

<style lang="scss" scoped></style>
