<template>
  <section>
    <h1 class="page-title">Yangiliklar</h1>
    <div class="grid grid-cols-9 gap-6">
      <new-card class="col-span-3" v-for="item in 10" :key="item" />
    </div>
    <Pagination :total="50"/>
  </section>
</template>

<script>
import Pagination from '@/components/common/Pagination.vue'
export default {
  components: { Pagination }
}
</script>

<style lang="scss" scoped></style>
