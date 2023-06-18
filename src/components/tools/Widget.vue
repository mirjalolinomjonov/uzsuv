<template>
  <div id="widget" class="widget">
    <div class="container">
      <div class="py-3 flex-center gap-5">
        <button @click="isActiveButton = item.value" class="widget__button"
          :class="{ 'invert-btn': item.value === 'invert', active: isActiveButton === item.value }"
          v-for="(item, index) in controlSystemColor" :key="index">
          <span>
            {{ item.name }}
          </span>
        </button>
        <div class="w-[380px]">
          <div class="flex-center-between mb-[27px]">
            <el-checkbox class="special-checkbox" v-model="settings.noImage" label="Rasimsiz" size="large" />
            <el-checkbox class="special-checkbox" v-model="settings.screenPlayer" label="Ekran suxandoni" size="large" />
          </div>
          <div>
            <h3 class="text-[#3E4D63] font-semibold text-[16px] leading-[130%] mb-2">Shrift o‘lchami</h3>
            <div class="flex-center gap-4">
              <span class="text-[#3E4D63] font-semibold text-[12px] leading-[130%]">Aa</span>
              <input v-model="settings.fontSize" min="8" max="24" step="0.1" type="range">
              <span class="text-[#3E4D63] font-semibold text-[23px] leading-[130%]">Aa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      isActiveButton: 'colorful',
      settings: {
        mode: "with-color",
        fontSize: 16,
        noImage: false,
        screenPlayer: false,
      },
      controlSystemColor: [
        {
          name: 'rangli',
          value: 'colorful'
        },
        {
          name: 'rangsiz',
          value: 'colorless'
        },
        {
          name: 'invert',
          value: 'invert'
        },
      ]
    }
  },

  mounted() {
    const rangeInputs = document.querySelectorAll('input[type="range"]')

    function handleInputChange(e) {
      let target = e.target
      if (e.target.type !== 'range') {
        target = document.getElementById('range')
      }
      const min = target.min
      const max = target.max
      const val = target.value

      target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }

    rangeInputs.forEach(input => {
      input.addEventListener('input', handleInputChange)
    })

  },
})
</script>

<style lang="scss" scoped>
.widget {
  max-height: 0;
  overflow: hidden;
  background: #fff;
  transition: max-height 0.25s ease-in-out;

  &__button {
    padding: 32px 64px;
    border: 8px solid #fff;
    border-radius: 4px;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;
    color: #3E4D63;
    transition: all .25s ease-in-out;
    outline: none;

    &.active {
      border-color: #EEEFF1;
    }

    &:hover {
      border-color: #5B729380;
    }

    &.invert-btn span {
      padding: 2px 8px;
      background: #000;
      border-radius: 4px;
      display: inline-block;
      color: #fff;
    }
  }
}

.special-checkbox {
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: #3E4D63;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #EEEFF1;
  border-radius: 5px;
  background-image: linear-gradient(#5B729380, #5B729380);
  background-size: 50% 100%;
  background-repeat: no-repeat;

  display: inline-block;
  vertical-align: middle;
  font-size: 1em;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3E4D63;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .25s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3E4D63;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .25s ease-in-out;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3E4D63;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .25s ease-in-out;
}

// input[type="range"]::-webkit-slider-thumb:hover {
//   background: #ff0200;
// }

// input[type="range"]::-moz-range-thumb:hover {
//   background: #ff0200;
// }

// input[type="range"]::-ms-thumb:hover {
//   background: #ff0200;
// }

/* Input Track */
input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type=range]::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>

<style lang="scss">
.special-checkbox {
  .el-checkbox__inner {
    border: 2px solid #EAF0FD;
    border-radius: 4px;
    width: 24px !important;
    height: 24px !important;

    &::after {
      top: 2px;
      left: 7px;
      border-width: 2px;
      width: 5px;
      height: 10px;
    }
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background: #3C73E0;
    border-color: #3C73E0;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #3E4D63;
  }
}
</style>