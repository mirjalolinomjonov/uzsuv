<template>
  <header class="header bg-gray-300">
    <div class="container">
      <div class="inline-flex items-center gap-3">
        <icon-base name="uz_flag" />
        <span> UZB </span>
        <icon-base name="select_arrowe" />
      </div>
    </div>
  </header>
</template>

<script>
import IconBase from '@/components/common/IconBase.vue'

export default {
  components: {
    IconBase
  },
  data() {
    return {
      language: [
        {
          icon: 'uz_flag',
          text: 'O‘zbekcha'
        },
        {
          icon: 'ru_flag',
          text: 'Русский'
        },
        {
          icon: 'en_flag',
          text: 'English'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
