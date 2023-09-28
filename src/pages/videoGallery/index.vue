<template>
  <section>
    <h1 class="page-title">Videogalereya</h1>
    <div class="grid grid-cols-9 gap-6 lg:grid-cols-4">
      <video-gallery class="col-span-3 lg:col-span-2 sm:col-span-4" v-for="item in 10" :key="item" />
    </div>
    <Pagination :total="50" />
  </section>
</template>

<script>
import VideoGallery from '@/components/card/VideoGallery.vue'
import Pagination from '@/components/common/Pagination.vue'
export default {
  components: { VideoGallery, Pagination }
}
</script>

<style lang="scss" scoped></style>
