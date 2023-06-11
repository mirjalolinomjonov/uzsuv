<template>
    <div class="question">
        <div class="flex-center gap-3 text-2xl leading-[29px] font-semibold text-white px-8 py-6">
            <icon-base name="question_mark" />
            So‘rovnoma
        </div>
        <h2 class="question__title px-8 py-6">
            Ichimlik suviga to‘lovlarni onlayn tarzda amalga oshirganmisiz?
        </h2>
        <div class="question-body px-8 py-6">
            <form>
                <label v-for="item in 5" :key="item" class="label flex-center gap-4" :for="item">
                    <input type="radio" name="question" :id="item" :value="item">
                    <span class="label__mark"></span>
                    <span>Ha, onlayn to‘layman</span>
                </label>
            </form>
            <div class="question__result px-6 py-4 mt-5 bg-[#506585]">
                Umumiy ovozlar: 3284 ta
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.question {
    background: #5B7293;
    border-radius: 4px;

    // question__title
    &__title {
        font-weight: 500;
        font-size: 22px;
        line-height: 130%;
        color: #FFFFFF;
        background: #506585;
    }

    // question__result
    &__result {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        opacity: 0.5;
    }
}

.label {
    padding: 8px 6px;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #FFFFFF;
    cursor: pointer;
    transition: all .25s ease-in-out;
    border-radius: 4px;

    &:not(:last-child) {
        margin-bottom: 6px;
    }

    &:hover {
        background-color: #506585;
    }

    &:hover .label__mark::before {
        opacity: 1;
    }



    input {
        position: absolute;
        top: 0;
        left: 0;
        display: none;

        &:checked+.label__mark::before {
            opacity: 1;
        }
    }

    // input

    // label__mark
    &__mark {
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 3px solid #ffffff80;
        position: relative;

        &::before {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity .25s ease-in-out;
        }
    }
}
</style>