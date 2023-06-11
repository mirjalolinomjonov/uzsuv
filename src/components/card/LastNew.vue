<template>
  <div class="last-new">
    <router-link to="#">
      <figure class="img-wrap">
        <img src="https:picsum.photos/500/950" alt="" />
      </figure>
      <div class="last-new__inner">
        <h3 class="last-new__title">
          “O‘zsuvtaʼminot” Aksiyadorlik jamiyati, Janubiy Koreya Respublikasining “K-Water”
          korporatsiyasi bilan xamkorlik memarandumi tuzildi
        </h3>
        <span class="last-new__published">22 Avgust 2002</span>
        <span class="last-new__more inline-flex-center gap-[6px]">
          Batafsil
          <icon-base name="in_detail_arrow" />
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import IconBase from '../common/IconBase.vue'
export default {
  components: {
    IconBase
  }
}
</script>

<style lang="scss" scoped>
.last-new {
  position: relative;
  display: grid;
  place-content: center;
  padding: 20px;
  text-align: center;
  // background: rgba(3, 34, 81, 0.65);
  border-radius: 4px;
  height: 417px;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  &:hover{
    transform: translateY(-20px) scale(1.1);

    & .img-wrap{
      opacity: 1;
    }
  }
  
  .img-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.35s ease-in-out;
    
    img{
      width: 100%;
      object-fit: cover;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(0deg, rgba(3, 34, 81, 0.65), rgba(3, 34, 81, 0.65));
      z-index: 2;
    }
  }

  &__inner {
    position: relative;
    z-index: 3;
  }
  // last-new__title
  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 133.5%;
    color: #ffffff;
  }

  // last-new__published
  &__published {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #bfcde8;
    margin: 18px 0 88px;
  }

  // last-new__more
  &__more {
    font-weight: 600;
    font-size: 12px;
    line-height: 139.5%;
    letter-spacing: 0.01em;
    color: #ffffff;
  }
}
</style>
