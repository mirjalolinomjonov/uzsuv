<template>
  <section>
    <div class="container">
      <h1 class="page-title">Tenders</h1>

      <el-table :data="tableData">
        <el-table-column type="index" label="#" width="50" />
        <el-table-column prop="name" label="Lot raqami" />
        <el-table-column prop="date" label="Muddati" />
        <el-table-column prop="address" label="Hudud" />
        <el-table-column prop="address" label="Loyiha nomi" />
        <el-table-column prop="address" label="Pudratchi" />
        <el-table-column prop="address" label="Yuklab olish">
          <template #default>
            <a href="#" download="file name" class="table-dowload-btn">
              Yuklab olish <icon-base name="table_download" />
            </a>
          </template>
        </el-table-column>
      </el-table>

      <Pagination :total="20" />
      <useful-links />
    </div>
    <Footer />
  </section>
</template>

<script>
import Pagination from '@/components/common/Pagination.vue'
import UsefulLinks from '@/components/common/UsefulLinks.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  components: { Pagination, UsefulLinks, Footer },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
