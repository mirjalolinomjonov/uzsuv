<template>
  <Header />
  <navigation-bar />
  <div :class="[$route.name === 'home' ? 'absolute top-0 left-0 w-full' : '']">
    <RouterView />
    <useful-links />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import NavigationBar from './components/layout/NavigationBar.vue'
import UsefulLinks from './components/common/UsefulLinks.vue'
import Footer from './components/layout/Footer.vue'
</script>
