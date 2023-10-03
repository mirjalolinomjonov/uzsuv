<template>
  <section>
    <h1 class="page-title">O‘zbekiston Respublikasi Prezidentining farmon va qarorlari</h1>
    <el-table :data="tableData">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column
        prop="docType"
        label="Hujjat turi / kim
          tomonidan berilgan"
      ></el-table-column>
      <el-table-column prop="date" label="Sana" align="left"></el-table-column>
      <el-table-column
        prop="docName"
        label="Hujjat nomi"
        align="left"
        width="380"
      ></el-table-column>
      <el-table-column align="right">
        <template #default>
          <a
            class="view-doc inline-flex-center gap-[6px]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko'rish <icon-base name="eye" />
          </a>
        </template>
      </el-table-column>
    </el-table>

    <Pagination :total="15" />
  </section>
</template>

<script>
import Pagination from '@/components/common/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      tableData: [
        {
          docType: "O'zbekiston Respublikasi Prezidenti farmoni",
          date: '2019 yil 17 Yanvar dagi PF-5635 son',
          docName:
            '2017 — 2021 йилларда Ўзбекистон Республикасини ривожлантиришнинг бешта устувор йўналиши бўйича ҳаракатлар стратегиясини «фаол инвестициялар ва ижтимоий ривожланиш йили»да амалга оширишга оид давлат дастури тўғрисида'
        },
        {
          docType: "O'zbekiston Respublikasi Prezidenti farmoni",
          date: '2019 yil 17 Yanvar dagi PF-5635 son',
          docName:
            '2017 — 2021 йилларда Ўзбекистон Республикасини ривожлантиришнинг бешта устувор йўналиши бўйича ҳаракатлар стратегиясини «фаол инвестициялар ва ижтимоий ривожланиш йили»да амалга оширишга оид давлат дастури тўғрисида'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.view-doc {
  color: #3c73e0;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
}
</style>
