<template>
  <section>
    <div class="flex-center-between">
      <h1 class="page-title">Reestr</h1>
      <div class="flex-center mb-6">
        <span class="costum-radio">
          <input v-model="key" value="0" type="radio" name="reester" id="area" />
          <label class="costum-radio__item" for="area">Hududiy boshqarmalar</label>
        </span>
        <span class="costum-radio">
          <input v-model="key" value="1" type="radio" name="reester" id="system" />
          <label class="costum-radio__item" for="system">Tizimdagi tashkilotlar</label>
        </span>
      </div>
    </div>

    <div class="reester-search">
      <div class="inline-flex-center-center gap-5">
        <button class="reester-search__burger-btn">
          <icon-base name="burger" />
        </button>
        <span class="reester-search__input">
          <input type="text" placeholder="Tashkilot nomi bo‘yicha izlang" />
          <icon-base name="search" color="#fff" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import IconBase from '@/components/common/IconBase.vue'
export default {
  components: { IconBase },
  data() {
    return {
      key: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.reester-search {
  padding: 16px 24px;
  border-radius: 4px;
  background: #5b7293;
  // reester-search__burger-btn
  &__burger-btn {
    border-radius: 4px;
    background: rgba($color: #fff, $alpha: 0.1);
    padding: 7px;
    line-height: 0;
    cursor: pointer;
    transition: backgroun .2s ease-in-out;
    &:hover{
      background: #5982db;
    }
  }
  // reester-search__input
  &__input {
    display: block;
    width: 300px;
    height: 38px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    input[type='text'] {
      padding: 10px 60px 10px 16px;
      background: #516582;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 15px;
      font-weight: 400;
      line-height: normal;
      &::placeholder {
        opacity: 0.4;
      }
    }
    .icon {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>
