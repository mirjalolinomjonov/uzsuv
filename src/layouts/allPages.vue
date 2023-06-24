<template>
  <main>
    <div class="container grid grid-cols-12 gap-6">
      <aside class="col-span-3">
        <Menu />
      </aside>
      <section class="col-span-9">
        <router-view />
      </section>
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/common/Menu.vue'
</script>

<style lang="scss" scoped></style>
