<template>
  <div class="grid grid-cols-2 gap-6">
    <div v-for="(item, index) in info" :key="index" class="card h-[164px]">
      <span class="card__bg"></span>
      <div class="card__icon float-right relative z-[2]">
        <img :src="item.icon" alt="icon" />
      </div>
      <div class="relative clear-none z-[2]">
        <div>
          <h3 class="card__title">{{ item.title }}</h3>
          <p v-if="!!item.subtitle" class="card__subtitle w-[159px]">{{ item.subtitle }}</p>
        </div>
        <div v-if="!!item.phone" class="mt-[45px]">
          <p class="text-[#3C73E0] font-semibold text-[26px] leading-[130%] mb-[2px]">
            {{ item.phone }}
          </p>
          <p class="text-[#8C97AB] font-normal text-[13px] leading-[130%]">
            O‘zbekiston hududida qo‘ng‘iroq bepul
          </p>
        </div>

        <div v-if="!!item.router">
          <ul class="flex flex-col gap-[6px] mt-[9px] mb-[18px]">
            <li
              v-for="child in item.childeren"
              :key="child"
              class="flex-center gap-[4px] text-[#5B7293] font-normal text-[12px] leading-[14px]"
            >
              <i>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_6790)">
                    <path
                      d="M5.60014 2.87988C2.86459 2.87988 0.640137 5.10434 0.640137 7.83988C0.640137 10.5754 2.86459 12.7999 5.60014 12.7999C8.33568 12.7999 10.5601 10.5754 10.5601 7.83988C10.5601 5.10434 8.33568 2.87988 5.60014 2.87988ZM8.32014 5.75988C8.40198 5.75988 8.48383 5.79107 8.54639 5.85363C8.67151 5.97875 8.67151 6.18101 8.54639 6.30613L4.70639 10.1461C4.64399 10.2085 4.56206 10.2399 4.48014 10.2399C4.39822 10.2399 4.31629 10.2085 4.25389 10.1461L2.65389 8.54613C2.52877 8.42101 2.52877 8.21875 2.65389 8.09363C2.77901 7.96851 2.98127 7.96851 3.10639 8.09363L4.48014 9.46738L8.09389 5.85363C8.15645 5.79107 8.2383 5.75988 8.32014 5.75988ZM12.1601 7.67988C12.0753 7.67988 11.9939 7.7136 11.9339 7.77361C11.8739 7.83362 11.8401 7.91501 11.8401 7.99988C11.8401 8.08475 11.8739 8.16615 11.9339 8.22616C11.9939 8.28617 12.0753 8.31988 12.1601 8.31988H16.0001V7.67988H12.1601Z"
                      fill="#3C73E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6790">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              {{ child }}
            </li>
          </ul>
          <router-link
            class="block w-full text-center p-3 bg-[#3C73E0] rounded-[4px] transition hover:opacity-80 cursor-pointer text-white text-[14px] leading-[17px] font-semibold"
            to="#"
            >Kabinetga kirish
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          title: 'Tarif va meyorlar',
          subtitle: 'Suv va Oqova suv tizimi narxlari',
          icon: './src/static/img/tarif.png',
          slug: '/tariffs'
        },
        {
          title: 'Kalkulyator',
          subtitle: 'Suv narxini hisoblash kalkulyatori',
          icon: './src/static/img/calculator.png',
          slug: '/calculator'
        },
        {
          title: 'Call markaz',
          phone: '1225',
          icon: './src/static/img/call.png'
        },
        {
          title: 'Shaxsiy kabinet',
          router: '#',
          icon: './src/static/img/login.png',
          childeren: ['Xarajatlar nazorati', 'To‘lovlar haqida SMS xabarnoma']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  border: 1px solid #eeeff1;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .card__bg {
      width: 400px;
      height: 400px;
      top: -64px;
      right: -64px;
    }
  }

  &__bg {
    position: absolute;
    top: -56px;
    right: -56px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #eaf0fd;
    transition: all 0.25s linear;
    z-index: 1;
  }

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    color: #3e4d63;
    margin-bottom: 10px;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
    color: #8c97ab;
  }
}
</style>
