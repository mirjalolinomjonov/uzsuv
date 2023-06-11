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
        <ul class="social-networks inline-flex-center gap-2">
          <li v-for="(item, index) in socials" :key="index" class="social-networks__item">
            <a class="social-networks__item-link inline-flex-center-center" href="">
              <icon-base :name="item.icon" />
            </a>
          </li>
        </ul>
        <icon-base class="cursor-pointer" name="widget" />
      </div>
    </div>
  </header>
</template>

<script>
import IconBase from '@/components/common/IconBase.vue'

export default {
  components: {
    IconBase
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
      socials: [
        {
          icon: 'linkedin',
          link: '#'
        },
        {
          icon: 'facebook',
          link: '#'
        },
        {
          icon: 'instagram',
          link: '#'
        },
        {
          icon: 'youtube',
          link: '#'
        },
        {
          icon: 'twitter',
          link: '#'
        },
        {
          icon: 'telegram',
          link: '#'
        }
      ]
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

// social-networks
.social-networks {
  list-style: none;
  // social-networks__item-link
  &__item-link {
    width: 24px;
    height: 24px;
    background: rgba($color: #fff, $alpha: 0.25);
    border-radius: 6px;
    transition: all .2s ease-in-out;
    &:hover{
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
}
</style>
