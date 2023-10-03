<template>
  <section>
    <h1 class="page-title">Mahalla fuqarolar yig’ini joylashgan binoda kutubxona kerakmi?</h1>
    <div class="vote">
      <!-- Questions form -->
      <form v-if="!isVote">
        <span class="costum-radio" v-for="item in 5" :key="item">
          <input type="radio" name="vote" :id="item" :value="item" />
          <label class="label flex-center gap-4" :for="item">
            <span class="label__mark"></span>
            <span>Ha, onlayn to‘layman</span>
          </label>
        </span>
      </form>

      <!-- Answer progress -->
      <ul v-else class="vote-answer">
        <li v-for="item in 5" :key="item" class="vote-answer__item">
          <div class="progress">
            <div
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-valuenow="20 * item"
              class="progress__bar"
              :style="{ width: `${20 * item}%` }"
            ></div>
          </div>
          <span>Lorem ipsum dolor sit amet consectetur - {{ 20 * item }}%</span>
        </li>
      </ul>

      <!-- Answer total -->
      <div class="mt-8 flex-center-between">
        <div>
          <button @click="onSubmit" v-if="!isVote" class="vote__btn vote__btn_px">
            Tasdiqlash
          </button>
          <router-link v-else to="/polls" class="vote__btn inline-flex-center gap-[10px]">
            <icon-base name="back_arrowe" /> Boshqa so‘rovnomalarga qaytish
          </router-link>
        </div>
        <span class="vote__total"> Umumiy ovozlar: <span> 3284 ta</span> </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVote: false
    }
  },
  methods: {
    onSubmit() {
      this.isVote = true
    }
  }
}
</script>

<style lang="scss" scoped>
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
    background-color: #3971c2;
  }
}

.costum-radio {
  position: relative;
  display: block;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    display: none;

    &:checked {
      & + .label {
        background: #3971c2;
        color: #fff;
        .label__mark {
          border-color: #fff;
          &::before {
            opacity: 1;
            background: #fff;
          }
        }
      }
    }
  }
}
.label {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  padding: 18px 24px;
  line-height: 140%; /* 25.2px */
  color: #3e4d63;
  background: #f7f8fa;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  border-radius: 4px;

  &:hover {
    background-color: rgba(60, 115, 224, 0.15);
  }

  &:hover .label__mark::before {
    opacity: 1;
  }

  // label__mark
  &__mark {
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 3px solid #a1b7c6;
    position: relative;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #a1b7c6;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
    }
  }
}
.vote {
  // vote-answer
  &-answer {
    // vote-answer__item
    &__item {
      background: #9bb7e0;
      border-radius: 4px;
      line-height: 36px;
      position: relative;
      padding: 18px 24px;
      overflow: hidden;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      span {
        position: relative;
        z-index: 2;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        line-height: 140%; /* 25.2px */
      }
    }
  }

  // vote__total
  &__total {
    color: #a1b7c6;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    span {
      color: #3971c2;
    }
  }

  // vote__btn
  &__btn {
    color: #fff;
    background: #3971c2;
    padding: 16px 32px;
    border-radius: 4px;
    font-size: 22px;
    font-weight: 500;
    line-height: 130%; /* 28.6px */
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }

    // vote__btn_px
    &_px {
      padding: 16px 64px;
    }
  }
}
</style>
