<template>
  <section>
    <h1 class="page-title">Aksiyadorlarning umumiy yig‘ilishi</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur perferendis
      quaerat sit neque facilis dicta asperiores rem? Quam, tenetur. Atque neque provident earum rem
      incidunt nobis sit veniam voluptas.
    </div>
    <div class="mt-6">
      <h2 class="page-title">Biriktirilgan hujjatlar</h2>
      <div class="grid grid-cols-3 gap-6">
        <download-file v-for="item in 4" :key="item" />
      </div>
    </div>
  </section>
</template>

<script>
import DownloadFile from '@/components/common/DownloadFile.vue'
export default {
  components: { DownloadFile }
}
</script>

<style lang="scss" scoped></style>
