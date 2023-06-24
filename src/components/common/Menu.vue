<template>
  <nav class="app-sidebar">
    <ul class="app-sidebar-list">
      <li class="app-sidebar__title">Axborot xizmati</li>
      <li v-for="item in 5" :key="item">
        <router-link class="app-sidebar-list__item-link" :to="`/news/${item}`">
          <icon-base name="sidebar_item_drop" />
          link {{ item }}
        </router-link>
      </li>
    </ul>

    <div class="banner mt-6">
      <figure class="banner__logo">
        <img src="@/static/img/sidebar_logo.svg" alt="" />
      </figure>
      <div class="my-10">
        <h2 class="banner__title">Sohada korrupsiyaga guvoh bo‘ldingizmi?</h2>
        <p class="banner__subtitle my-3">
          U holda korrupsiyaga qarshi kurashish agentligi mas’ullari bilan onlayn bog‘laning.
        </p>
        <p class="banner__subtitle">Shaxsingiz sir tutilishi kafolatlanadi.</p>
      </div>

      <!-- get in touch -->
      <div class="banner__item">
        <span>Telefon:</span>
        <a href="tel:+998555031055">+998 (55) 503 10 55</a>
        <icon-base name="banner_phone" />
      </div>
      <div class="banner__item">
        <span>Telegram bot:</span>
        <a href="https://t.me/anticoruzsuv">@anticoruzsuv</a>
        <icon-base name="banner_telegram" />
      </div>
      <div class="banner__item">
        <span>Elektron pochta:</span>
        <a href="mailto:anticorruption@uzsuv.uz">anticorruption@uzsuv.uz</a>
        <icon-base name="banner_mail" />
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import IconBase from './IconBase.vue'
export default defineComponent({
  components: {
    IconBase
  },
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.app-sidebar {
  // app-sidebar__title
  &__title {
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 500;
    background: #305ab6;
    color: #fff;
    border-radius: 4px;
  }
  // app-sidebar-list
  &-list {
    // app-sidebar-list__item-link
    &__item-link {
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
      color: #3e4d63;
      transition: all 0.2s ease-in-out;
      &::first-letter {
        text-transform: uppercase;
      }

      &:hover {
        background: rgba(238, 239, 241, 0.5);
        .icon svg path {
          fill: red;
        }
      }
      &.router-link-exact-active {
        font-weight: 600;
        background: #eaf0fd;
      }
    }
  }
}

.banner {
  padding: 24px;
  border-radius: 4px;
  background: #305ab6;
  opacity: 0.85;

  // banner__logo
  &__logo img {
    margin: 0 auto;
  }

  // banner__title
  &__title,
  &__subtitle {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
  &__title {
    font-weight: 600;
  }
  // banner__item
  &__item {
    background: hsla(0, 0%, 100%, 0.2);
    border-radius: 4px;
    margin-bottom: 12px;
    padding: 8px;
    position: relative;
    overflow: hidden;
    span {
      display: block;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }
    a {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      margin-top: 4px;
      transition: all .15s ease-in-out;
      &:hover{
        text-decoration: underline;
      }
    }
    .icon {
      position: absolute;
      right: 0;
      bottom: 0;
      opacity: 0.2;
    }
  }
}
</style>

<style lang="scss">
.app-sidebar-list__item-link.router-link-exact-active .icon svg path {
  fill: #305ab6;
}
</style>
