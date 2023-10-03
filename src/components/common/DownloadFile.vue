<template>
  <a href="#" download="file" class="file flex-center gap-2">
    <icon-base name="file" class="shrink-0" />
    <div>
      <span class="file__name">nizom-final1.pdf</span>
      <span class="file__download flex-center gap-[6px]">
        Yuklab olish <icon-base name="table_download" />
      </span>
    </div>
  </a>
</template>

<script>
import IconBase from './IconBase.vue'
export default {
  components: { IconBase }
}
</script>

<style lang="scss" scoped>
.file {
  border-radius: 4px;
  background: #f7f8fa;
  padding: 12px;
  cursor: pointer;
  // file__name
  &__name {
    display: block;
    color: #3e4d63;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    margin-bottom: 2px;
  }
  // file__download
  &__download {
    color: #3c73e0;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
}
</style>
