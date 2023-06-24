<template>
  <div class="date inline-flex-center gap-2">
    <span class="inline-flex-center gap-1">
      <icon-base name="calendar" />
      27 Iyul 2020
    </span>
    <span class="inline-flex-center gap-1">
      <icon-base name="article_view" color="#5B7293" />
      420
    </span>
  </div>
</template>

<script>
import IconBase from './IconBase.vue'
export default {
  components: {
    IconBase
  },
  props: {
    publish: {
      type: String,
      default: () => ''
    },
    view: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style lang="scss" scoped>
.date span {
  color: #5b7293;
  text-align: right;
  font-size: 13px;
  opacity: .5;
  &:last-child .icon span {
    width: 20px;
    height: 20px;
  }
}
</style>

<style>
.date span:last-child .icon svg {
  width: 20px;
  height: 20px;
}
</style>
