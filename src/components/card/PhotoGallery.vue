<template>
  <router-link
    :to="'/photo-gallery/' + 98"
    class="photo-card rounded-[4px] relative overflow-hidden cursor-pointer transition"
  >
    <span
      class="photo-card__img-count absolute top-4 right-4 rounded-[4px] w-[51px] h-[51px] transition text-white text-[18px] leading-[140%] font-semibold inline-flex flex-col items-center justify-center"
    >
      <span>{{ 7 }}</span>
      <span>foto</span>
    </span>
    <div class="w-full h-[180px] overflow-hidden">
      <img src="https://picsum.photos/200/200" alt="" class="w-full h-full object-cover" />
    </div>
    <div class="photo-card__title transition">
      <h3 class="text-white text-[15px] leading-[130%] font-medium transition">
        «O‘zsanoatqurilishbank» ATB aksiyadorlari diqqatiga!
      </h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PhotoGalery',
  props: {
    id: Number,
    order: Number,
    description: String,
    img: String
  }
}
</script>

<style lang="scss" scoped>
.photo-card {
  cursor: pointer;
  &:hover {
    box-shadow: 0px 12px 16px 0px rgba(111, 111, 111, 0.12);

    .photo-card__img-count {
      background: #fff;
      color: #3e4d63;
    }
    .photo-card__title {
      background: #fff;
      h3 {
        color: #3e4d63;
      }
    }
  }
  &__img-count {
    background: #3e4d63;
    backdrop-filter: blur(8px);
  }

  &__title {
    background: #3e4d63;
    backdrop-filter: blur(8px);
    padding: 12px 16px;
  }
}
</style>
