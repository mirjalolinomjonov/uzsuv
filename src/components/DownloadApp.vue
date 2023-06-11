<template>
    <div class="container app grid grid-cols-12 gap-6">
        <div class="col-span-6">
            <h2 class="app__title">Mobil ilovamizni yuklab oling</h2>
            <div class="mt-[18px] mb-[66px]">
                <p class="app__subtitle">Tizim qulayliklari va funksiyalaridan yaxshiroq foydalanish maqsadida mobil
                    versiyadan
                    foydalaning.</p>
                <p class="app__subtitle">Mobil qurulmangizga mo'ljallangan ilovamizni Play Market yoki App Store
                    platformalaridan yuklab oling.</p>
            </div>

            <div class="flex-center gap-5">
                <a href="#"
                    class="app-link bg-white rounded-[4px] py-[6px] px-3 inline-flex-center gap-3 border border-white transition hover:bg-transparent">
                    <icon-base name="google_play_icon" />
                    <div class="inline-flex flex-col">
                        <icon-base name="google_play" />
                        <span class="text-[10px] text-[#202124]">orqali yuklab oling</span>
                    </div>
                </a>
            </div>
        </div>
        <figure class="col-span-6"></figure>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app {
    &__title {
        font-weight: 600;
        font-size: 42px;
        line-height: 130%;
        color: #FFFFFF;
    }

    &__subtitle {
        font-weight: 400;
        font-size: 17px;
        line-height: 130%;
        color: rgba(255, 255, 255, 0.7);

        &:first-child {
            margin-bottom: 16px;
        }
    }

    &-link {
        div .icon svg path {
            transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover {
            svg path {
                fill: #fff !important;
            }

            span {
                color: #FFFFFF;
            }
        }
    }
}
</style>