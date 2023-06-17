<template>
  <footer class="footer pt-8 pb-10">
    <div class="container">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-3">
          <router-link to="/">
            <icon-base name="footer_logo" />
          </router-link>
          <div class="info mb-4 mt-[31px]">
            Saytni so‘nggi yangilangan vaqti:
            <span class="info__time">22:12, 28.06.2020 (GMT+5)</span>
          </div>
          <div class="info">
            Saytda xatolikni topdingizmi? Uni belgilang va
            <span class="info__event">CTLR+ENTER</span>
            tugmalari orqali xabar qiling.
          </div>
        </div>

        <div class="flex gap-20 col-start-5 col-end-10">
          <nav class="nav" v-for="item in 2" :key="item">
            <h3 class="nav__title">Bo‘limlar</h3>
            <ul class="nav-list flex flex-col gap-4">
              <li v-for="route in 6" :key="route">
                <router-link class="nav-list__item-link" to="#">- Jamiyat haqida</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-3 flex flex-col gap-8">
          <div>
            <h4 class="title mb-2">Biz ijtimoiy tarmoqlarda</h4>
            <social-networks/>
          </div>

          <div>
            <h4 class="title mb-2">Hisoblagichlar</h4>
            <div class="flex-center gap-2">
              <a href="#"><img src="@/static/img/calculate1.jpg" alt=""></a>
              <a href="#"><img src="@/static/img/calculate2.jpg" alt=""></a>
            </div>
          </div>

          <div>
            <h4 class="title mb-2">Sayt dizayni va ishlab chiquvchisi</h4>
            <a href="#" class="auth-logo flex-center gap-2">
              <icon-base class="auth-logo__icon" name="uic_icon" />
              <icon-base class="auth-logo__name" name="uic_group" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: #5b7293;
  opacity: 0.83;
  .title {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }
}
.info {
  background: #3e4d6380;
  // opacity: 0.5;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.8);

  // info__time
  &__time {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }

  // info__event
  &__event {
    font-weight: 600;
    font-size: 14px;
    line-height: 134.3%;
    color: #ffffff;
  }
}

.nav {
  // nav__title
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ffffff;
  }

  // nav-list
  &-list {
    margin-top: 24px;
    // nav-list__item-link
    &__item-link {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: rgba(255, 255, 255, 0.8);
      transition: color 0.25s ease-in-out;
      &:hover {
        color: #fff;
      }
    }
  }
}

.auth-logo{
  // auth-logo__icon
  // auth-logo__name
  &__name{
    opacity: 0;
    transform: translateX(15px);
    transition: all .25s ease-in-out;
  }

  &:hover{
    .auth-logo__name{
      opacity:1;
      transform: translateX(0);
    }
  }
}
</style>
