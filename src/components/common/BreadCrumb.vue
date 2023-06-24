<template>
  <nav class="container">
    <ul class="bread-crumb flex-center gap-1">
      <li
        v-for="(item, index) in links"
        :key="index"
        class="bread-crumb__item inline-flex-center gap-1"
      >
        <!-- router-link -->
        <router-link v-if="item.link" :to="item.link" class="bread-crumb__item-link">
          <icon-base name="bread_crumb_logo" class="logo mr-1" />
          {{ item.name }}
        </router-link>
        <!-- last child -->
        <span v-else class="bread-crumb__item-link">
          {{ item.name }}
        </span>
        <!-- seperate -->
        <icon-base name="bread_crumb_seprate" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      links: [
        {
          link: '/',
          name: 'Asosiy'
        },
        {
          link: '#',
          name: 'link 1'
        },
        {
          link: '',
          name: 'link 2'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.bread-crumb {
  padding: 1.5rem 0;
  // bread-crumb__item
  &__item {
    line-height: 0;
    &:not(:first-child) .logo {
      display: none;
    }
    // bread-crumb__item-link
    &-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #3e4d63;
      cursor: pointer;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    &:last-child {
      .icon {
        display: none;
      }
      .bread-crumb__item-link {
        color: #5b7293;
        opacity: 0.5;
        cursor: text;
      }
    }
  }
}
</style>
