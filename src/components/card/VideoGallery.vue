<template>
  <article class="video-box w-full">
    <figure
      class="video-box__img-wrapper flex-center-center w-full h-[170px] overflow-hidden"
      :style="{ backgroundImage: 'url(https://picsum.photos/250/200)' }"
    >
      <icon-base name="video_player" class="cursor-pointer" />
    </figure>
    <div class="video-box__description">
      <p class="video-box__description-text">Yer ostiga singib, yo‘qolib ketayotgan suvlar</p>
      <span class="video-box__description-published flex-center gap-1">
        <icon-base name="calendar" color="#fff" class="w-4 h-4" /> 27 Iyul 2020
      </span>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.video-box {
  &:hover {
    .video-box__img-wrapper,
    .video-box__description {
      background-color: #fff;
    }
    .video-box__description {
      box-shadow: 0 10px 12px 0px #d1d5db;
    }
    .video-box__img-wrapper .icon {
      border-radius: 50%;
      box-shadow: 0 10px 12px 0px #d1d5db;
      background: #d1d5db;
    }
    .video-box__description-text,
    .video-box__description-published {
      color: #3e4d63;
    }
  }
  // video-box__img-wrapper
  &__img-wrapper {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #5685ec;
    transition: background-color 0.2s ease-in-out;
    border-radius: 4px 4px 0 0;
  }
  // video-box__description
  &__description {
    background-color: #3e4d63;
    padding: 12px 16px;
    transition: background-color 0.2s ease-in-out;
    border-radius: 0 0 4px 4px;
    // video-box__description-text
    &-text {
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      line-height: 130%; /* 19.5px */
      transition: color 0.2s ease-in-out;
    }
    // video-box__description-published
    &-published {
      margin-top: 12px;
      color: #eeeff1;
      font-size: 13px;
      font-weight: 400;
      line-height: normal;
      transition: color 0.2s ease-in-out;
    }
  }
}
</style>

<style lang="scss">
.video-box {
  &__description-published .icon svg path {
    transition: fill 0.2s ease-in-out;
  }
  &:hover &__description-published .icon svg path {
    fill: #3e4d63;
  }
}
</style>
