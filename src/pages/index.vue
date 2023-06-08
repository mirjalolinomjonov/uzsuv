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
        <info-card class="col-span-6"/>
      </div>
    </section>

    <!-- LATEST NEWS -->
    <section class="latest-news pt-10 pb-[140px]">
      <div class="container">
        <div class="section-title">
          <icon-base name="nav_drop" />
          <h2 class="section-title__text">So‘nggi yangiliklar</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import IconBase from '../components/common/IconBase.vue'
import Header from '../components/layout/Header.vue'
import NavigationBar from '../components/layout/NavigationBar.vue'
import StatisticsOfAppeals from '../components/StatisticsOfAppeals.vue'
import InfoCard from '../components/card/InfoCard.vue'
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  &__text {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
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
}
</style>
