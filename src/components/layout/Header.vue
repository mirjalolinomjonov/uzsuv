<template>
  <header class="header">
    <div class="container flex-center-between">
      <div class="inline-flex-center gap-3">
        <div class="header__lang inline-flex items-center gap-2">
          <icon-base name="uz_flag" />
          <span> UZB </span>
          <icon-base name="select_arrowe" />
        </div>
        <div class="header__call-center inline-flex items-center gap-2">
          <a href="tel:+998712343920">+998 (71) 234 39 20</a>
          <span></span>
          <span>O‘zbekiston hududida qo‘ng‘iroq bepul</span>
        </div>
      </div>

      <!-- social networks -->
      <div class="inline-flex-center gap-5">
        <social-networks />
        <icon-base class="cursor-pointer" name="widget" />
      </div>
    </div>
  </header>
</template>

<script>
import IconBase from '@/components/common/IconBase.vue'
import SocialNetworks from '@/components/common/SocialNetworks.vue'

export default {
  components: {
    IconBase,
    SocialNetworks
  },
  data() {
    return {
      language: [
        {
          icon: 'uz_flag',
          text: 'O‘zbekcha'
        },
        {
          icon: 'ru_flag',
          text: 'Русский'
        },
        {
          icon: 'en_flag',
          text: 'English'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background: rgba(36, 46, 52, 0.64);
  backdrop-filter: blur(4px);
  padding: 8px 0;
  z-index: 2;

  // header__lang
  &__lang {
    padding: 4px 8px;
    border-radius: 6px;
    background: rgba($color: #fff, $alpha: 0.1);
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
  }

  // header__call-center
  &__call-center {
    color: #fff;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    & > a {
      cursor: pointer;
    }
    // dot seperate
    & > a + span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #fff;
    }
  }
}
</style>
