<template>
  <section>
    <h1 class="page-title">«O‘zsanoatqurilishbank» ATB aksiyadorlari diqqatiga!</h1>
    <div class="devider my-4"></div>
    <publish-and-view class="mb-4" />

    <!-- CONTENT -->
    <div class="grid grid-cols-9 gap-6">
      <photo-gallery-slug class="col-span-3" v-for="item in 9" :key="item" />
    </div>

    <div class="devider my-6"></div>
    <share />
  </section>
</template>

<script>
import PublishAndView from '@/components/common/PublishAndView.vue'
import Share from '@/components/common/Share.vue'
export default {
  components: {
    PublishAndView,
    Share
  }
}
</script>

<style lang="scss" scoped></style>
