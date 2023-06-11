<template>
  <main class="main">
    <!-- MAIN -->
    <section class="main-section">
      <Header />
      <navigation-bar />
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

    <section class="pt-10 relative bg-[#3971c20a]">
      <div class="section-title">
        <icon-base name="nav_drop" color="#3C73E0" />
        <h2 class="section-title__text section-title__text_blue">Hududiy boshqarmalar</h2>
      </div>
      <Map />
      <img
        class="absolute left-0 top-1/2 -translate-y-1/2"
        src="../static/img/vector_opacity.png"
        alt=""
      />
    </section>
  </main>
</template>

<script setup>
import IconBase from '../components/common/IconBase.vue'
import Header from '../components/layout/Header.vue'
import NavigationBar from '../components/layout/NavigationBar.vue'
import StatisticsOfAppeals from '../components/StatisticsOfAppeals.vue'
import InfoCard from '../components/card/InfoCard.vue'
import LastNew from '../components/card/LastNew.vue'
import Map from '../components/Map.vue'
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
.main-section {
  position: relative;
  min-height: 100vh;
  // background: linear-gradient(180deg, rgba(47, 58, 65, 0.51) 0%, rgba (36, 46, 52, 0.24) 100%);
  background: url('https://picsum.photos/3600/1280') center no-repeat;
  // &::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: linear-gradient(180deg, rgba(47, 58, 65, 0.51) 0%, rgba(36, 46, 52, 0.24) 100%);
  //   z-index: 5;
  // }
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
