<template>
  <ul class="social-networks inline-flex-center gap-2">
    <li v-for="(item, index) in socials" :key="index" class="social-networks__item">
      <a class="social-networks__item-link inline-flex-center-center" :class="item.icon" href="#">
        <icon-base :name="item.icon" />
      </a>
    </li>
  </ul>
</template>

<script>
import IconBase from './IconBase.vue'
export default {
  components: {
    IconBase
  },
  data() {
    return {
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
  },
}
</script>

<style lang="scss" scoped>
// social-networks
.social-networks {
  list-style: none;

  // social-networks__item-link
  &__item-link {
    width: 24px;
    height: 24px;
    background: rgba($color: #fff, $alpha: 0.25);
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &:hover.linkedin {
      background: #2878b7;
    }

    &:hover.facebook {
      background: #1877f2;
    }

    &:hover.instagram {
      background: linear-gradient(43.94deg, #eea054 16.16%, #d64763 50.11%, #b62a99 83.68%);
    }

    &:hover.youtube {
      background: #f40000;
    }

    &:hover.twitter {
      background: #55ace3;
    }

    &:hover.telegram {
      background: #2f89ce;
    }
  }
}
</style>
