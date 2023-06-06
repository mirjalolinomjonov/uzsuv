<template>
  <main class="main">
    <Header />
    <navigation-bar />
    <!-- <icon-base name="uz_flag"/> -->
  </main>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import NavigationBar from '../components/layout/NavigationBar.vue'
import IconBase from '../components/common/IconBase.vue'
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  // background: linear-gradient(180deg, rgba(47, 58, 65, 0.51) 0%, rgba(36, 46, 52, 0.24) 100%);
  background: url('https://picsum.photos/1500/980') center no-repeat;
}
</style>
