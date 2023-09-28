<template>
  <div v-if="total > 1" class="example-pagination-block flex justify-end mt-8">
    <el-pagination
      v-model:currentPage="currentPage"
      :default-page-size="1"
      :total="total"
      layout="prev, pager, next"
      @click="changeUrl"
      :pager-count="5"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: Number
  },
  emits: ['currentPage'],

  data() {
    return {
      currentPage: 1
    }
  },

  watch: {
    currentPage() {
      this.$emit('currentPage', this.currentPage)
    }
  },

  mounted() {
    this.currentPage = +this.$route.query.page || 1 // + sign means convert to number
  },

  methods: {
    changeUrl(val) {
      console.log(val, 'pagination')
      // this.addParams("page", this.currentPage);
    }
  }
}
</script>

<style lang="scss">
.example-pagination-block .el-pager .number {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #626469;
  opacity: 0.5;
  background: #f7f8fa;
  border-radius: 2px;
  margin: 0 4px;
  transition: all 0.3s ease-in-out;
  border: 0px solid #eeeff1;
  transition: all 0.3s ease-in-out;

  &:hover,
  &.is-active {
    color: #3e4d63;
    opacity: 1;
    background: #ffffff;
    border: 1px solid #eeeff1;
  }
}
</style>
