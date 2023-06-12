<template>
  <main class="main">
    <!-- MAIN -->
    <section class="main-slider">
      <Carousel>
        <Slide v-for="slide in 10" :key="slide">
          <div class="main-slider__item">
            {{ slide }}
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>

    <!-- STATISTICS OF APPEALS -->
    <section class="container">
      <div class="py-[72px] grid grid-cols-12 gap-6">
        <statistics-of-appeals class="col-span-6" />
        <info-card class="col-span-6" />
      </div>
    </section>

    <!-- LATEST NEWS -->
    <section class="latest-news pt-10 pb-[140px]">
      <div class="container">
        <!-- section title -->
        <div class="section-title">
          <icon-base name="nav_drop" />
          <h2 class="section-title__text">So‘nggi yangiliklar</h2>
        </div>

        <div class="grid grid-cols-4 mt-[86px] py-4 border-y border-white">
          <div class="latest-news__item" v-for="item in 4" :key="item">
            <last-new />
          </div>
        </div>
      </div>
    </section>

    <!-- REGIONAL ADMINSTRATIONS -->
    <section class="pt-10 bg-[#3971c20a]">
      <!-- section title -->
      <div class="section-title mb-6">
        <icon-base name="nav_drop" color="#3C73E0" />
        <h2 class="section-title__text section-title__text_blue">Hududiy boshqarmalar</h2>
      </div>

      <Map />
      <region-tab />
    </section>

    <!-- LEADER'S SPEECH -->
    <section class="py-10">
      <div class="container grid grid-cols-12 gap-6">
        <leader-speech class="col-span-5" />
        <Questionnaire class="col-span-7" />
      </div>
    </section>

    <!-- DOWNLOAD APP -->
    <section class="relative py-[52px] mt-[108px] bg-[#305ab6b3]">
      <download-app />
      <img
        class="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 h-[399px]"
        src="../static/img/vector_opacity.png"
        alt=""
      />
    </section>

    <useful-links />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import IconBase from '../components/common/IconBase.vue'
import StatisticsOfAppeals from '../components/StatisticsOfAppeals.vue'
import InfoCard from '../components/card/InfoCard.vue'
import LastNew from '../components/card/LastNew.vue'
import Map from '../components/Map.vue'
import RegionTab from '../components/RegionTab.vue'
import Questionnaire from '../components/Questionnaire.vue'
import DownloadApp from '../components/DownloadApp.vue'
import UsefulLinks from '../components/common/UsefulLinks.vue'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    IconBase,
    StatisticsOfAppeals,
    InfoCard,
    LastNew,
    Map,
    RegionTab,
    Questionnaire,
    DownloadApp,
    UsefulLinks
  }
})
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  // section-title__text
  &__text {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;

    // section-title__text_blue
    &_blue {
      color: #3c73e0;
    }
  }
}

.main-slider {
  width: 100%;
  min-height: 100vh;
  // background: linear-gradient(180deg, rgba(47, 58, 65, 0.51) 0%, rgba (36, 46, 52, 0.24) 100%);
  // &::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: linear-gradient(180deg, rgba(47, 58, 65, 0.51) 0%, rgba(36, 46, 52, 0.24) 100%);
  //   z-index: 5;
  // }

  background: url('https://picsum.photos/3600/1280') center no-repeat;

  // main-slider__item
  &__item {
  }
}

.latest-news {
  background: url('https://uzsuv.uz/img/last-news-bg.jpg') no-repeat center;
  background-size: cover;

  // latest-news__item
  &__item {
    padding: 0 15px;

    &:not(:last-child) {
      border-right: 1px solid #fff;
    }
  }
}
</style>
