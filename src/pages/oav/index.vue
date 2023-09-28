<template>
  <section>
    <h1 class="page-title">OAV biz haqimizda</h1>
    <el-table :data="tableData">
      <el-table-column label="Manba" width="120">
        <template #default>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-[#305AB6] cursor-pointer">daryo.uz</a>
        </template>
      </el-table-column> 
      <el-table-column  label="Maqola nomi va havolasi" align="left">
        <template #default="scope">
          <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex-center gap-[10px] text-left">
            <icon-base name="table_link" class="shrink-0"/>
            {{ scope.row.name }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Sanasi" width="130" />
      <el-table-column prop="lang" label="Til" width="80" />
    </el-table>
    <Pagination :total="50" />
  </section>
</template>

<script>
import News from '@/components/card/News.vue'
import Pagination from '@/components/common/Pagination.vue'
import IconBase from '@/components/common/IconBase.vue'
export default {
  components: { News, Pagination, IconBase },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Suv ta’minoti va kanalizatsiya tizimlari rivojlantiriladi va Suv ta’minoti va kanalizatsiya tizimlari rivojlantiriladi',
          lang: 'uzb'
        },
        {
          date: '2016-05-02',
          name: 'Suv ta’minoti va kanalizatsiya tizimlari rivojlantiriladi va Suv ta’minoti va kanalizatsiya tizimlari rivojlantiriladi',
          lang: 'eng'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
