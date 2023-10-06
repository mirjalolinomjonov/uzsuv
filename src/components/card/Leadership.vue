<template>
  <div class="leadership relative w-full flex gap-3 p-5 rounded-[6px] overflow-hidden">
    <!-- img wrapper -->
    <figure class="leadership__img w-[160px] rounded-[4px] overflow-hidden">
      <img :src="img" alt="" class="w-full h-full object-cover" />
    </figure>

    <!-- content -->
    <div>
      <span class="leadership__position">
        {{ position }}
      </span>

      <h2 class="leadership__fullname mt-[4px] mb-[22px]">
        {{ fullName }}
      </h2>

      <p class="leadership__reception-day flex-center gap-2">
        <icon-base name="calendar_gray" :class="[id === 1 ? 'id1' : '', 'm-icon']" />
        Qabul kunlari:
        <span>{{ receptionDays }}</span>
      </p>

      <p class="leadership__phone flex-center gap-2 mt-2">
        <icon-base name="phone_gray" :class="[id === 1 ? 'id1' : '', 'm-icon']" />
        Telefon:
        <span>{{ phone }}</span>
      </p>

      <div class="flex-center gap-4 mt-4">
        <button
          @click="modalBio"
          class="transition hover:opacity-[0.7] cursor-pointer bg-[#5B7293] py-3 px-[44px] text-white text-sm leading-[17px] font-medium rounded-[2px]"
        >
          Biografiya
        </button>
        <button
          @click="modalDuty"
          class="transition hover:opacity-[0.7] cursor-pointer bg-[#5B7293] py-3 px-[44px] text-white text-sm leading-[17px] font-medium rounded-[2px]"
        >
          Vazifalari
        </button>
      </div>
    </div>
    <!-- <Modal
      v-bind="{
        position,
        fullName,
        duty,
        bio,
        isBio,
        openModal
      }"
      @modal="openModal = false"
    /> -->
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    img: String,
    position: String,
    fullName: String,
    receptionDays: String,
    phone: String,
    bio: String,
    duty: String
  },
  data() {
    return {
      isBio: false,
      openModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
.leadership {
  background: url('@/static/img/vector-leadership2.png') #f7f8fa no-repeat 100%;

  // leadership__fullname
  &__fullname {
    color: #3e4d63;
    font-family: 'Fira Sans' Condensed;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
  }
  :is(&__position, &__reception-day, &__phone) {
    color: #3e4d6380;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    span {
      color: #3e4d63;
    }
  }
}
.m-icon.id1 {
  svg {
    path {
      fill: #ffffffe6;
    }
  }
}
</style>
