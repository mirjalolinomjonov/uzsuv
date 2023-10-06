<template>
  <section class="error">
    <div class="error__content">
      <h1>404</h1>
      <h4>Ushbu sahifa topilmadi !</h4>
      <p>Izlayotgan sahifangizga qaytadan kirishga urunib ko‘rishingizni tavfsiya qilamiz</p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.error {
  background: url('@/static/img/404_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
  // error__content
  &__content {
    width: 550px;
    padding-top: 164px;
    padding-left: 124px;
    h1 {
      color: #3e4d63;
      font-size: 156.8px;
      font-weight: 700;
      line-height: 83%; /* 130.144px */
      margin-bottom: 48px;
    }
    h4 {
      color: #3e4d63;
      font-size: 24px;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 12px;
    }
    p {
      color: #5b7293;
      text-align: justify;
      font-size: 18.4px;
      font-weight: 400;
      line-height: 150%; /* 27.6px */
    }
  }
}
</style>
