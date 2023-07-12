<template>
  <div class="container app grid grid-cols-12 gap-6  relative z-[1]">
    <div class="col-span-6">
      <h2 class="app__title">Mobil ilovamizni yuklab oling</h2>
      <div class="mt-[18px] mb-[66px]">
        <p class="app__subtitle">
          Tizim qulayliklari va funksiyalaridan yaxshiroq foydalanish maqsadida mobil versiyadan
          foydalaning.
        </p>
        <p class="app__subtitle">
          Mobil qurulmangizga mo'ljallangan ilovamizni Play Market yoki App Store platformalaridan
          yuklab oling.
        </p>
      </div>
      <!-- app link -->
      <div class="flex-center gap-5">
        <a v-for="(item, index) in usApps" :key="index" :href="item.link"
          class="app-link bg-white rounded-[4px] py-[6px] px-3 inline-flex-center gap-3 border border-white transition hover:bg-transparent">
          <icon-base :name="item.logo" />
          <div class="inline-flex flex-col">
            <icon-base class="text" :name="item.text" />
            <span class="text-[10px] text-[#202124]">orqali yuklab oling</span>
          </div>
        </a>
      </div>
    </div>
    <!-- phone img -->
    <figure class="relative col-span-6 flex-center-center pointer-events-none">
      <img class="w-[230px] absolute" src="../static/img/phone1.webp" alt="" />
      <img class="w-[196px] absolute left-[62%] -top-[36%]" src="../static/img/phone2.webp" alt="" />
    </figure>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      usApps: [
        {
          logo: 'google_play_icon',
          text: 'google_play',
          link: '#'
        },
        {
          logo: 'app_store_icon',
          text: 'app_store',
          link: '#'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.app {
  &__title {
    font-weight: 600;
    font-size: 42px;
    line-height: 130%;
    color: #ffffff;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    color: rgba(255, 255, 255, 0.7);

    &:first-child {
      margin-bottom: 16px;
    }
  }

  &-link {
    span {
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover span {
      color: #ffffff;
    }
  }
}
</style>

<style lang="scss">
.app-link {

  .app-store path,
  .text svg path {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover .app-store path,
  &:hover .text svg path {
    fill: #fff;
  }
}
</style>
