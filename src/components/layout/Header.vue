<template>
  <header class="relative z-[3]">
    <!-- <Widget /> -->
    <div class="header" :class="{ home: hasHome }">
      <div class="container flex-center-between">
        <div class="inline-flex-center gap-3">
          <!-- LANGUAGE BOX -->
          <div class="header__lang inline-flex items-center gap-2">
            <icon-base :name="curentLang.flag" />
            <span> {{ curentLang.short }} </span>
            <icon-base class="arrowe" name="select_arrowe" />

            <!-- Lang menu dropdown -->
            <ul class="lang-menu">
              <li
                @click="changeLang(item)"
                v-for="(item, index) in language"
                :key="index"
                class="lang-menu__item"
              >
                <icon-base :name="item.flag" />
                {{ item.text }}
              </li>
            </ul>
          </div>

          <!-- CALL CENTER -->
          <div class="header__call-center inline-flex items-center gap-2">
            <a href="tel:1250">1250</a>
            <!-- dot seperate -->
            <span></span>
            <span class="sm:hidden">Yagona call-markaz</span>
          </div>
        </div>

        <!-- SOCIAL NETWORKS -->
        <div class="inline-flex-center gap-5">
          <social-networks />
          <el-tooltip :content="$t('widget')" placement="bottom" effect="dark">
            <icon-base
              @click="handlerWidget"
              class="cursor-pointer shrink-0"
              :name="!showWidget ? 'widget' : 'close_widget'"
            />
          </el-tooltip>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconBase from '@/components/common/IconBase.vue'
import SocialNetworks from '@/components/common/SocialNetworks.vue'
import Widget from '@/components/tools/Widget.vue'

export default {
  components: {
    IconBase,
    SocialNetworks,
    Widget
  },
  data() {
    return {
      showWidget: false,
      language: [
        {
          key: 'uz',
          flag: 'uz_flag',
          text: 'O‘zbekcha',
          short: 'Uzb'
        },
        {
          key: 'ru',
          flag: 'ru_flag',
          text: 'Русский',
          short: 'Рус'
        },
        {
          key: 'en',
          flag: 'en_flag',
          text: 'English',
          short: 'Eng'
        }
      ],
      curentLang: {
        key: 'uz',
        flag: 'uz_flag',
        text: 'O‘zbekcha',
        short: 'Uzb'
      }
    }
  },
  computed: {
    hasHome() {
      return this.$route.name === 'home'
    }
  },
  methods: {
    changeLang(param) {
      this.curentLang = param
    },
    handlerWidget() {
      this.showWidget = !this.showWidget
      const widget = document.querySelector('#widget')
      if (widget.style.maxHeight) {
        widget.style.maxHeight = null
      } else {
        widget.style.maxHeight = widget.scrollHeight + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #305ab6;
  padding: 8px 0;

  // header__lang
  &__lang {
    width: 93px;
    position: relative;
    padding: 4px 8px;
    border-radius: 6px;
    background: rgba($color: #fff, $alpha: 0.1);
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;

    .arrowe {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      .lang-menu {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        z-index: 1;
      }

      .arrowe {
        transform: rotate(-180deg);
      }
    }

    .lang-menu {
      position: absolute;
      left: 0;
      top: calc(100% + 12px);
      width: max-content;
      background: #ffffff;
      border-radius: 6px;
      background: rgba(36, 46, 52, 0.64);
      backdrop-filter: blur(4px);
      transition: all 0.3s ease-in-out;
      z-index: 3;
      transform: translateY(10px);
      overflow: hidden;
      opacity: -1;
      visibility: hidden;
      z-index: -1;

      // lang-menu__item
      &__item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        padding: 6px 12px;
        text-transform: capitalize;
        transition: all 0.25s ease-in-out;
        line-height: 1;
        cursor: pointer;
        z-index: 3;

        .icon {
          width: 24px;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.08);
        }
      }
    }
  }

  // header__call-center
  &__call-center {
    color: #fff;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    & > a {
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
    }

    // dot seperate
    & > a + span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #fff;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  &.home {
    background: rgba(36, 46, 52, 0.64);
    backdrop-filter: blur(4px);
  }
}
</style>
