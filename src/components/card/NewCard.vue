<template>
  <router-link to="/news/1998" class="article-wrapper">
    <div class="img-wrapper rounded-[4px] w-full">
      <div class="h-[180px] overflow-hidden">
        <img src="https:picsum.photos/450/450" alt="" class="w-full h-full object-cover" />
      </div>
      <!-- status -->
      <div class="img-wrapper__status flex-center gap-2">
        <span
          class="inline-flex items-center gap-[4px] text-white text-[13px] leading-4 font-normal"
        >
          <icon-base name="article_view" />
          27 Iyul 2020
        </span>
        <span
          class="inline-flex items-center gap-[4px] text-white text-[13px] leading-4 font-normal"
        >
          <icon-base name="article_share" />
          {{ numberWithSpaces(4585684) }}
        </span>
      </div>
    </div>
    <div class="px-3 pb-3 pt-[13px]">
      <h3 class="mb-3 text-[#202124] text-sm leading-[140%] font-medium">
        {{
          turncate(
            '“Suv bilan farovonlik ham kirib boradi” - Sohib Saifnazarov "O‘zsuvta’minot" A',
            77,
            '...'
          )
        }}
      </h3>
      <p class="text-[#626469] text-[13px] leading-4 font-normal">27 Iyul 2020, 12:20</p>
    </div>
  </router-link>
</template>

<script>
import IconBase from '../common/IconBase.vue'
import { turncate, numberWithSpaces } from '@/utiles/index.js'
export default {
  components: {
    IconBase
  },
  props: {
    img: String,
    published: String,
    share: Number,
    title: String,
    views: Number,
    slug: String,
    path: String
  },
  methods: {
    turncate,
    numberWithSpaces
  }
}
</script>

<style lang="scss" scoped>
// news card styles
.article-wrapper {
  width: 100%;
  border-radius: 4px;
  background: #f7f8fa;
  backdrop-filter: blur(8px);
  cursor: pointer;
  .img-wrapper__status {
    transition: all 0.2s linear;
  }
  &:hover {
    box-shadow: 0px 12px 16px 0px rgba(111, 111, 111, 0.12);

    .img-wrapper__status {
      transform: translateY(0);
    }
  }

  .img-wrapper {
    position: relative;
    z-index: 0;
    overflow: hidden;

    &__status {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(100%);
      width: 100%;
      height: 32px;
      padding: 8px 14px;
      z-index: 1;
      background: rgba(36, 46, 52, 0.64);
      backdrop-filter: blur(8px);
    }
  }
}
</style>
