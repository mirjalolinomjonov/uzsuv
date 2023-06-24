<template>
  <section class="pt-10 pb-8">
    <div class="container">
      <!-- Header -->
      <div class="flex-center-between mb-6">
        <h2 class="text-[#25272B] text-2xl leading-[29px] font-semibold">Foydali havolalar</h2>
        <div class="inline-flex-center gap-4">
          <div class="inline-flex-center gap-2 text-[#5B7293] text-sm leading-[17px] font-normal">
            {{ currentSlide + 1 }}
            <span class="inline-block h-[2.5px] w-8 bg-[#5B7293] opacity-40"></span>
            7
            <!-- array length -->
          </div>
          <div class="inline-flex-center gap-2">
            <icon-base @click="prev" class="control-btn" name="circle_arrowe" />
            <icon-base @click="next" class="control-btn rotate-180" name="circle_arrowe" />
          </div>
        </div>
      </div>

      <!-- Carousel -->
      <Carousel
        ref="usefulLink"
        v-model="currentSlide"
        :wrapAround="true"
        :snapAlign="'start'"
        :items-to-show="5"
        :wrap-around="true"
        class="costum-carousel"
      >
        <Slide v-for="slide in 7" :key="slide">
          <div class="mx-[12px]">
            <div class="carousel__item">
              <icon-base name="emblem_of_uzb" />
              <a
                href="#"
                target="_blank"
                class="block text-[#3C73E0] text-[15px] leading-[18px] font-medium mt-[13px] mb-4"
              >
                president.uz
              </a>
              <p class="text-[#5B7293] text-[15px] leading-[18px] font-medium">
                O‘zbekiston respublikasi Prezidentining matbuot xizmati
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import IconBase from './IconBase.vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    IconBase,
    Carousel,
    Slide
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    prev() {
      this.$refs.usefulLink.prev()
    },
    next() {
      this.$refs.usefulLink.next()
    }
  }
})
</script>

<style lang="scss">
.control-btn {
  cursor: pointer;
  svg path {
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }
  &:hover svg path {
    opacity: 1;
  }
}

.carousel__item {
  background: #ffffff;
  border: 1px solid #ececec;
  // border: 1px solid #222;
  border-radius: 4px;
  padding: 30px 20px 20px;
  text-align: center;
  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
}
</style>
