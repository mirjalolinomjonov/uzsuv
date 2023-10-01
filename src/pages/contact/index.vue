<template>
  <section>
    <div class="container">
      <div class="grid-12">
        <!-- service information -->
        <div class="col-span-4">
          <h1 class="page-title">Bog‘lanish uchun ma’lumotlar</h1>
          <ul class="info">
            <li class="info__item flex-center gap-1" v-for="(item, index) in info" :key="index">
              <span>{{ item.label }}</span>
              {{ item.value }}
            </li>
          </ul>
        </div>

        <!-- map -->
        <div class="col-start-6 col-span-7">
          <h2 class="page-title">Xaritada</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1631566975975!2d69.3147962154411!3d41.348807279267774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef54a716b09f5%3A0x19f381fa6c5ba920!2z0J7QntCeICJNVVNBRkZPIE9CSSBIQVlPVCI!5e0!3m2!1sen!2s!4v1654425712310!5m2!1sen!2s"
            width="100%"
            height="380"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- form -->
        <div class="col-span-8">
          <h2 class="page-title">Qayta aloqa formasi</h2>
          <form @submit.prevent="onSubmit" autocomplete="off">
            <div class="flex-center gap-6 mb-6">
              <input class="form__item" type="text" name="fulname" placeholder="FISH" />
              <input
                v-maska
                data-maska="+998 ## ### ## ##"
                class="form__item"
                type="text"
                name="phone"
                placeholder="+998 99 936 30 98"
              />
            </div>
            <input
              class="form__item mb-6"
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            <textarea
              class="form__item form__item_height mb-6"
              name="message"
              placeholder="Xabaringiz"
            >
            </textarea>
            <button :disabled="true" :class="[false ? 'active' : '', 'form__submit']">
              Yuborish
            </button>
          </form>
        </div>
      </div>

      <useful-links />
    </div>
    <Footer />
  </section>
</template>

<script>
import { vMaska } from 'maska'

import UsefulLinks from '@/components/common/UsefulLinks.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  directives: { maska: vMaska },
  components: { UsefulLinks, Footer },
  data() {
    return {
      info: [
        {
          label: 'Avtobuslar:',
          value: '19, 63, 115'
        },
        {
          label: 'Marshrut taksilari:',
          value: '12,45'
        },
        {
          label: 'Yaqin metro bekatlari:',
          value: '"Bodomzor" bekati'
        },
        {
          label: 'Ish kunlari:',
          value: 'Dushanba-Shanba'
        },
        {
          label: 'Ish vaqti:',
          value: '09:00-18:00 (13:00-14:00 tushlik)'
        },
        {
          label: 'Elektron pochta:',
          value: 'info@uzst.uz'
        },
        {
          label: 'Telefon:',
          value: '1255'
        },
        {
          label: 'Manzil:',
          value: 'Toshkent 100031, Bogishamol kochasi, 151-uy'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.info__item {
  color: #3e4d63;
  font-size: 14px;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  span {
    color: #5b7293;
    font-weight: 400;
    line-height: normal;
  }
}
.form {
  // form__item
  &__item {
    width: 100%;
    padding: 16px 20px;
    border-radius: 4px;
    border: 1px solid #eeeff1;
    background: #fcfcfc;
    color: #5b7293;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    transition: all 0.2s ease-in-out;
    &:focus {
      border-color: #95acdac8;
    }
    &::placeholder {
      opacity: 0.5;
    }
    // form__item_height
    &_height {
      height: 147px;
    }
  }
  // form__submit
  &__submit {
    padding: 14px 48px;
    border-radius: 4px;
    background: #626469;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    cursor: not-allowed;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
    &.active {
      cursor: pointer;
      background: #3c73e0;
    }
  }
}
</style>
