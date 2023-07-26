<template>
  <figure class="card-wrapper w-full h-[190px] cursor-pointer">
    <img
      src="https://picsum.photos/300/250"
      alt=""
      class="card-wrapper__img w-full h-full object-cover"
    />
  </figure>
</template>

<script>
export default {
  name: 'PhotoGalerySlug',
  props: {
    id: Number,
    img: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.card-wrapper {
  background: #3e4d63;
  opacity: 0.8;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  // card-wrapper__img
  &__img {
    position: relative;
    z-index: 1;
    transition: all 0.25s linear;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #3e4d6380;
    backdrop-filter: blur(4px);
    transform: scale(0);
    opacity: 0;
    z-index: 2;
    transition: all 0.25s linear;
  }
  
  &:hover {
    &::before {
      transition: all 0.35s linear;
      transform: scale(1);
      opacity: 1;
    }
    .card-wrapper__img {
      transform: scale(1.1);
      vertical-align: middle;
    }
  }
}
</style>
