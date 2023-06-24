<template>
  <div class="share-wrap flex-center-between">
    <div class="inline-flex-center gap-2">
      <span class="share-wrap__title mr-1">Ulashish:</span>
      <button class="share-wrap__button" :class="item" v-for="(item, index) in share" :key="index">
        <icon-base :name="item" color="#305AB6" />
      </button>
    </div>
    <div @click="print" class="inline-flex-center gap-2 cursor-pointer">
      <button class="share-wrap__button print">
        <icon-base name="print" />
      </button>
      <span class="share-wrap__title"> Chop etish </span>
    </div>
  </div>
</template>

<script>
import IconBase from './IconBase.vue'
export default {
  components: {
    IconBase
  },
  data() {
    return {
      share: ['facebook', 'twitter', 'telegram']
    }
  },
  methods: {
    print(){
      window.print()
    }
  },
}
</script>

<style lang="scss" scoped>
.share-wrap {
  // share-wrap__title
  &__title {
    display: inline-block;
    color: #3e4d63;
    font-size: 19px;
    font-weight: 500;
  }
  // share-wrap__button
  &__button {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background: #305ab633;
    display: grid;
    place-content: center;
    transition: background 0.2s ease-in-out;
    span {
      width: 12px;
      height: 12px;
    }
  }
}
</style>

<style lang="scss">
.share-wrap__button {
  svg path {
    transition: all 0.2s ease-in-out;
  }
  &:not(.print):hover svg path {
    fill: #fff;
  }
  &:hover.facebook {
    background: #1877f2;
  }
  &:hover.twitter {
    background: #55ace3;
  }
  &:hover.telegram {
    background: #2f89ce;
  }
}
</style>
