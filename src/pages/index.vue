<template>
  <main class="main">
    <!-- MAIN -->
    <section class="main-slider">
      <div class="logo">
        <icon-base name="nav_drop" />
        <h1>O‘ZSUVTA’MINOT</h1>
        <p>aksiyadorlik jamiyati</p>
      </div>

      <!-- Main Carousel -->
      <Carousel
        v-model="currentSlide"
        ref="mainCarousel"
        :autoplay="5000"
        :transition="1000"
        :wrap-around="true"
        pause-autoplay-on-hover
      >
        <Slide v-for="slide in 3" :key="slide">
          <div class="main-slider__item">
            <img src="https://picsum.photos/1250/900" alt="" />
          </div>
        </Slide>
      </Carousel>

      <!-- Carousel Navigation -->
      <ul class="inline-flex-center-center absolute bottom-5 left-1/2 -translate-x-1/2 z-[5]">
        <li
          @click="handlerSlideTo(index)"
          class="costum-dot cursor-pointer"
          :class="{ active: currentSlide === index }"
          v-for="(item, index) in 3"
          :key="item"
        >
          <icon-base class="child-dot" name="slider_nav" />
          <icon-base class="parent-dot" name="active_slider_nav" />
        </li>
      </ul>
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

        <div class="grid grid-cols-4 mt-[86px] py-4 border-y-2 border-white">
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
        <Vote class="col-span-7" />
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
import Vote from '../components/Vote.vue'
import DownloadApp from '../components/DownloadApp.vue'

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
    Vote,
    DownloadApp
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    handlerSlideTo(index) {
      this.$refs.mainCarousel.slideTo(index)
    }
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
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, rgba(47, 58, 65, 0.51) 0%, rgba(36, 46, 52, 0.24) 100%);
  // overflow: hidden;

  // main-slider__item
  &__item {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.3);
      z-index: 1;
    }
  }
}

.logo {
  position: absolute;
  top: 203px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  h1 {
    font-size: 22px;
    line-height: 1.2;
    font-weight: 600;
  }

  p {
    font-size: 14px;
  }
}

.latest-news {
  background: url('https://uzsuv.uz/img/last-news-bg.jpg') no-repeat center;
  background-size: cover;

  // latest-news__item
  &__item {
    padding: 0 15px;

    &:not(:last-child) {
      border-right: 2px solid hsla(0, 0%, 100%, 0.5);
    }
  }
}
</style>

<style lang="scss">
.logo .icon svg {
  width: 52px;
  height: 70px;
}
// Carousel
.main-slider .carousel {
  width: 100%;
  height: 100vh;
  min-height: 100vh;

  // carousel__viewport
  &__viewport {
    height: 100%;
  }

  // carousel__prev, carousel__next
  &__prev,
  &__next {
    display: none;
  }
}

// Carousel navigation
.costum-dot {
  position: relative;
  line-height: 1;
  .child-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    opacity: 0.5;
    transition: opacity 0.25s ease-in-out;
  }
  .parent-dot {
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }
  &.active .parent-dot,
  &.active .child-dot {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
}
</style>
