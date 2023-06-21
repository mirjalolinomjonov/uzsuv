<template>
  <div class="appeals">
    <h2 class="appeals__title">Murojaatlar statistikasi</h2>
    <div class="appeals__devider"></div>
    <ul class="statistic grid grid-cols-2 gap-8">
      <li class="flex-center gap-[18px]" v-for="(item, index) in statistic" :key="index">
        <div class="statistic__icon">
          <icon-base :name="item.icon" />
        </div>
        <div>
          <h3 class="statistic__result">{{ item.result }}</h3>
          <span class="statistic__subtitle">{{ item.subtitle }}</span>
        </div>
      </li>
    </ul>

    <a
      href="#"
      class="telegram flex-center-between mt-[32px] text-white text-[12px] font-medium leading-[15px] cursor-pointer"
    >
      <div class="flex-center gap-2">
        <icon-base name="telegram_white" />
        Telegram orqali murojaat qiling:
      </div>

      <span class="inline-block bg-[#287EB8] rounded-[3px] py-[2px] px-3"> @suvmuammobot </span>
    </a>
  </div>
</template>

<script>
import IconBase from './common/IconBase.vue'
export default {
  components: {
    IconBase
  },
  data() {
    return {
      statistic: [
        {
          icon: 'doc',
          result: 188,
          subtitle: 'Kelib tushgan arizalar'
        },
        {
          icon: 'time',
          result: 82,
          subtitle: 'Ko‘rib chiqilmoqda'
        },
        {
          icon: 'checked_doc',
          result: 110,
          subtitle: 'Hal qilingan'
        },
        {
          icon: 'rejected_doc',
          result: 2,
          subtitle: 'Rad etilgan'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.appeals {
  height: 352px;
  background: #305ab6;
  border-radius: 4px;
  padding: 31px 32px;

  // appeals__title
  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
  // appeals__devider
  &__devider {
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background: #ffffff;
    opacity: 0.15;
    backdrop-filter: blur(2px);
  }
}

.statistic {
  // statistic__icon
  &__icon {
    padding: 8px;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    line-height: 0;
  }
  // statistic__result
  &__result {
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    color: #ffffff;
  }
  // statistic__subtitle
  &__subtitle {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.5;
  }
}

.telegram {
  padding: 12px;
  background: #4fa4de;
  border-radius: 4px;
}
</style>
