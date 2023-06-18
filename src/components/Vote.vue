<template>
  <div class="vote">
    <div class="flex-center gap-3 text-2xl leading-[29px] font-semibold text-white px-8 py-6">
      <icon-base name="question_mark" />
      So‘rovnoma
    </div>
    <h2 class="vote__title px-8 py-6">
      Ichimlik suviga to‘lovlarni onlayn tarzda amalga oshirganmisiz?
    </h2>

    <div class="vote-body px-8 py-6">
      <!-- Questions form -->
      <form v-if="!isVote">
        <label v-for="item in 5" :key="item" class="label flex-center gap-4" :for="item">
          <input @change="isVote = true" type="radio" name="vote" :id="item" :value="item" />
          <span class="label__mark"></span>
          <span>Ha, onlayn to‘layman</span>
        </label>
      </form>

      <!-- Answer progress -->
      <ul v-else class="vote-answer">
        <li v-for="item in 5" :key="item" class="vote-answer__item">
          <div class="progress">
            <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" class="progress__bar"
              style="width: 42%"></div>
          </div>
          <span>Lorem ipsum dolor sit amet consectetur - 42%</span>
        </li>
      </ul>

      <!-- Answer total -->
      <div class="vote__total px-6 py-4 mt-5 bg-[#506585]">Umumiy ovozlar: 3284 ta</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      isVote: false
    }
  },
})
</script>

<style lang="scss" scoped>
.vote {
  background: #5b7293;
  border-radius: 4px;

  // vote__title
  &__title {
    font-weight: 600;
    font-size: 22px;
    line-height: 130%;
    color: #ffffff;
    background: #506585;
  }

  // vote__total
  &__total {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    opacity: 0.5;
  }

  // vote-answer
  &-answer {

    // vote-answer__item
    &__item {
      background: #506585;
      border-radius: 4px;
      line-height: 36px;
      position: relative;
      padding: 0 12px;
      overflow: hidden;

      &:not(:last-child) {
        margin-bottom: 6px;
      }

      span {
        line-height: 28px;
        // padding-left: 12px;
        position: relative;
        z-index: 2;
        color: #fff;
      }
    }
  }
}

.progress {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;

  // progress__bar
  &__bar {
    height: 100%;
    display: flex;
    color: #fff;
    transition: width 0.6s ease;
    white-space: nowrap;
    background-color: #305ab6;
  }
}

.label {
  padding: 8px 6px;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &:hover {
    background-color: #506585;
  }

  &:hover .label__mark::before {
    opacity: 1;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    display: none;

    &:checked+.label__mark::before {
      opacity: 1;
    }
  }

  // input

  // label__mark
  &__mark {
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 3px solid #ffffff80;
    position: relative;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
    }
  }
}
</style>
