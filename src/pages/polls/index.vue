<template>
  <section>
    <h1 class="page-title">So‘rovnomalar</h1>
    <ul class="polls-list">
      <li class="polls-list__item flex-center-between" v-for="item in 5" :key="item">
        <div class="flex gap-[7px]">
          <span class="polls-list__question">{{ item }}.</span>
          <div class="flex flex-col gap-2">
            <h3 class="polls-list__question">
              Ichimlik suviga to‘lovlarni onlayn tarzda amalga oshirganmisiz?
            </h3>
            <span class="polls-list__participants"> Ishtirokchilar: <span>1255 ta</span> </span>
          </div>
        </div>
        <router-link to="/polls/8" class="polls-list__attend flex-center gap-2 shrink-0">
          <icon-base name="attend_user" /> Qatnashish
        </router-link>
      </li>
    </ul>
    <Pagination :total="20"/>
  </section>
</template>

<script>
import IconBase from '@/components/common/IconBase.vue'
import Pagination from '@/components/common/Pagination.vue'
export default {
  components: { Pagination, IconBase },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.polls-list {
  // polls-list__item
  &__item {
    padding: 16px 24px 16px 20px;
    border-radius: 4px;
    background: #f7f8fa;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  // polls-list__question
  &__question {
    color: #3e4d63;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%; /* 25.2px */
  }
  // polls-list__participants
  &__participants {
    color: #a1b7c6;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    span {
      color: #3971c2;
    }
  }
  // polls-list__attend
  &__attend {
    color: #3971c2;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
}
</style>
