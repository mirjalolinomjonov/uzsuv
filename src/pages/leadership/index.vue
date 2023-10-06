<template>
  <section>
    <h1 class="page-title">Rahbariyat</h1>
    <div class="flex flex-col gap-6">
      <Leadership
        v-for="item in 5"
        :key="item"
        v-bind="{
          id: item,
          img: 'https://picsum.photos/200/180',
          position: 'position',
          fullName: 'full name',
          receptionDays: 'reception days',
          phone: 'phone',
          bio: 'bio',
          duty: 'duty'
        }"
      />
    </div>
  </section>
</template>

<script>
import Leadership from '@/components/card/Leadership.vue'
export default {
  components: {
    Leadership
  }
}
</script>

<style lang="scss">
.leadership {
  &:first-child {
    background: url('@/static/img/vector-leadership1.png') #3e4d63 no-repeat 100%;
    // leadership__fullname
    .leadership__fullname {
      color: #fff;
    }
    .leadership__position,
    .leadership__reception-day,
    .leadership__phone {
      color: #ffffff80 !important;
      span {
        color: #fff;
      }
    }
  }
}
</style>
