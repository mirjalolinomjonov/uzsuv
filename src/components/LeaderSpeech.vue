<template>
    <div class="slider-wrap">
        <div class="slider-wrap__header flex-center-between">
            <h2 class="text-[#25272B] text-2xl leading-[29px] font-semibold">Rahbar nutqlari</h2>
            <div class="inline-flex-center gap-[14px]">
                <button @click="prev" class="slider-wrap__btn prev"><icon-base name="arrowe_right" /></button>
                <button @click="next" class="slider-wrap__btn"><icon-base name="arrowe_right" /></button>
            </div>
        </div>

        <Carousel ref="slider" :wrap-around="true">
            <Slide v-for="slide in 4" :key="slide">
                <div class="content">
                    <figure class="content__figure">
                        <img src="https://picsum.photos/950/600" alt="">
                    </figure>
                    <router-link class="content__title" to="#">Suv bilan farovonlik ham kirib boradi</router-link>
                    <span class="content__published">22 Avgust 2020</span>
                    <p class="content__description">
                        Ma'lumki, Hukumat tomonidan iqtisodiyotning barcha tarmoqlari o'rtasidagi o'zaro kooperatsion
                        aloqalarini
                        yanada chuqurlashtirish, mamlakatimiz korxonalarida import o'rnini bosuvchi va eksportbop yangi
                        mahsulotlarni ishlab chiqarishga katta e'tibor berilmoqda hamda korxonalarning faol ishlashlari
                        uchun
                        barcha
                        sharoitlar yaratilmoqda.
                    </p>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
        }
    },
    methods: {
        prev() {
            this.$refs.slider.prev()
        },
        next() {
            this.$refs.slider.next()
        }
    },
})
</script>

<style lang="scss" scoped>
.slider-wrap {
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 24px;
    // height: 513px;

    // slider-wrap__header
    &__header {
        padding: 0 0 20px;
        border-bottom: 1px solid #EEEFF1;
        margin-bottom: 24px;
    }

    // prev and next
    &__btn {
        padding: 8px;
        background: #F5F7FB;
        border-radius: 4px;
        transition: all .25s ease-in-out;
        line-height: 0;
        cursor: pointer;

        &:hover {
            background: rgba($color: #000, $alpha: .1);
        }

        &.prev {
            transform: rotate(180deg);
        }
    }

}

.content {

    // content__figure
    &__figure {
        width: 100%;
        height: 181px;
        background: #eee;
        overflow: hidden;
        border-radius: 6px;
        margin-bottom: 1rem;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    // content__title
    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 130%;
        color: #3E4D63;
        transition: color .25s ease-in-out;

        &:hover {
            color: #007bff;
        }
    }

    // content__published
    &__published {
        display: block;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #626469;
        margin: 11px 0 12px;
    }

    // content__description
    &__description {
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        text-align: justify;
        color: #3E4D63;
    }
}

.carousel {
    text-align: left;
}
</style>