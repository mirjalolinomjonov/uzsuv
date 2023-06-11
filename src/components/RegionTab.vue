<template>
    <div class="mt-24">
        <el-tabs type="card">
            <div class="container">
                <el-tab-pane v-for="item in 3" :key="item">
                    <template #label>
                        <span class="custom-tabs-label inline-flex-center-center gap-2">
                            <icon-base name="nav_drop" />
                            <span>“Toshkent suv ta’minoti” MCHJ</span>
                        </span>
                    </template>
                    <div class="grid grid-cols-4 py-8">
                        <div class="panel-item" v-for="(item, index) of user" :key="index">
                            <span class="block text-[19px] font-normal leading-[23px] text-[#9CB8E0] mb-2">
                                {{ item?.title }}
                            </span>
                            <p class="text-[22px] text-white leading-[140%] font-semibold">{{ item?.name }}</p>
                            <p class="text-[22px] text-white leading-[140%] font-semibold">
                                {{ item?.day_of_admission?.from }}
                            </p>
                            <p class="text-[22px] text-white leading-[140%] font-semibold">
                                {{ item?.day_of_admission?.to }}
                            </p>
                            <a :href="`tel:${item?.num}`" class="text-[22px] text-white leading-[140%] font-semibold">{{ item?.num }}</a>
                            <p class="text-[22px] text-white leading-[140%] font-semibold">{{ item?.address }}</p>
                        </div>
                    </div>
                </el-tab-pane>
            </div>
        </el-tabs>
    </div>
</template>

<script>
import IconBase from './common/IconBase.vue';
export default {
    components: {
        IconBase,
    },
    data() {
        return {
            user: {
                who: {
                    title: "Raxbar",
                    name: "Mirdjamalov Suxrob Albertovich",
                },
                admission: {
                    title: "Qabul kunlari",
                    day_of_admission: {
                        from: "Chorshanba 15:00 - 17:00",
                        to: "Shanba 11:00 - 13:00"
                    }
                },
                phone: {
                    title: "Telefon",
                    num: "+998711505600"
                },
                email: {
                    title: "Elektron pochta",
                    address: "toshkent.sh@uzsuv.uz"
                }
            }
        }
    },
}
</script>

<style lang="scss">
.el-tabs--card>.el-tabs__header {
    bottom: 0 !important;
}

.el-tabs {

    // el-tabs__header
    &__header {
        max-width: 1200px;
        margin: 0 auto;
    }

    // el-tabs__content
    &__content {
        background: #305AB6;
        // margin-top: 1px;
    }

    // el-tabs__nav
    &__nav {
        margin: 0 40px;
        gap: 17px;
        border: none !important;
    }

    // el-tabs__item
    &__item {
        padding: 0 !important;
        border: none;
        border-radius: 4px 4px 0 0 !important;
        overflow: hidden;
        opacity: 0.7;
        transition: opacity .25s ease-in-out;

        &:hover {
            opacity: 1;
        }

        &.is-active {
            opacity: 1;
            border: none !important;

            .custom-tabs-label {
                color: #fff;
                background: #305AB6;

                .icon svg path {
                    fill: #fff;
                }
            }
        }
    }
}

.custom-tabs-label {
    height: 100%;
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #3E4D63;
    background: #fff;
    box-shadow: inset -1px 0px 0px rgba(48, 90, 182, 0.12), inset 1px 1px 0px rgba(48, 90, 182, 0.12);

    .icon svg {
        width: 24px;
        height: 24px;

        path {
            fill: #305AB6;
            // fill: linear-gradient(90deg, #61E0FF 0%, #0055EB 100%);
        }
    }
}

.panel-item {
    padding: 0 24px;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    &:not(:last-child) {
        border-right: 1px solid #fff;
    }
}
</style>