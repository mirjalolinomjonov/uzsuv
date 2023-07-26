<template>
  <article
    class="article w-full flex flex-col justify-between p-4 bg-[#F7F8FA] rounded-[4px] overflow-hidden"
  >
    <div>
      <p class="text-[#5B7293] text-[13px] leading-4 font-normal flex-center gap-2">
        <icon-base class="icon16" name="calendar" />
        27 Iyul 2020, 12:00
      </p>
      <h3 class="pt-4 pb-3 text-[#3E4D63] text-sm leading-[140%] font-medium">
        ⚠️ «O‘zsanoatqurilishbank» ATB aksiyadorlari diqqatiga!
      </h3>
      <p class="text-[#626469] text-sm leading-[17px] font-normal">
        O’zbekiston yoshlar ittifoqiga yagona soliq to’lovingizdan 8% qismini o’tkazing| va shu
        miqdorda imtiyozga ega bo’ling. (savdo korxonalaridan tashqari)
      </p>
    </div>

    <div class="mt-[44px] flex justify-between items-end">
      <div class="inline-flex items-center gap-4">
        <span
          class="inline-flex items-center gap-[4px] text-[#5B7293] text-[13px] leading-4 font-normal"
        >
          <icon-base class="icon16" name="article_view" color="#5B7293" />
          {{ formatNum(46512) }}
        </span>
        <span
          class="inline-flex items-center gap-[4px] text-[#5B7293] text-[13px] leading-4 font-normal"
        >
          <icon-base class="icon16" name="article_share" color="#5B7293" />
          {{ formatNum(465465) }}
        </span>
      </div>
      <router-link
        :to="'/announcements/' + slug"
        class="py-2 px-5 rounded-[4px] bg-[#5B7293] text-[#F6FBFF] text-xs leading-[14px] font-medium transition-all hover:bg-[#305AB6]"
      >
        Batafsil
      </router-link>
    </div>
  </article>
</template>

<!-- !news slug bn posts slug birhil com chiqarish kk. faqat news slug un slot tshlab ketish kk hasjtag bn img ga -->

<script>
import { formatNum } from '@/utiles/index.js'
export default {
  name: 'AdCard',
  props: {
    published: String,
    title: String,
    subtitle: String,
    views: String,
    share: String,
    slug: String
  },
  methods: {
    formatNum
  }
}
</script>

<style lang="scss" scoped>
.article:hover {
  background: #ffffff;
  box-shadow: 0px 12px 16px rgba(111, 111, 111, 0.12);
}
</style>

<style lang="scss">
.icon16 svg {
  width: 16px;
  height: 16px;
}
</style>
