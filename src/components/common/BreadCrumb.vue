<template>
  <ul class="bread-crumb flex-center gap-1">
    <li class="bread-crumb__item">
      <router-link to="/" class="bread-crumb__item-link inline-flex-center gap-1">
        <icon-base name="bread_crumb_logo" class="mr-1" />
        Asosiy
      </router-link>
    </li>
    <li class="bread-crumb__item">
      <span class="bread-crumb__item-link not-link inline-flex-center gap-1">
        <icon-base name="bread_crumb_seprate" />
        Matbuot markazi
      </span>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      links: []
    }
  }
})
</script>

<style lang="scss" scoped>
.bread-crumb {
  padding: 1.5rem 0;
  // bread-crumb__item-link
  &__item-link {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #3e4d63;
    cursor: pointer;
    &.not-link {
      color: #5b7293;
      opacity: 0.5;
      cursor: text;
    }
  }
}
</style>
