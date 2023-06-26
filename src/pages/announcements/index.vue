<template>
  <section>
    <h1 class="page-title">E'lonlar</h1>

    <Pagination :total="50" />
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import Pagination from '@/components/common/Pagination.vue'

export default defineComponent({
  components: {
    Pagination
  }
})
</script>

<style lang="scss" scoped></style>
