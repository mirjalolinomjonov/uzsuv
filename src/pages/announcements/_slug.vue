<template>
  <section>
    <h1 class="page-title">⚠️ «O‘zsanoatqurilishbank» ATB aksiyadorlari diqqatiga!</h1>
    <hr class="mt-6 mb-4"/>
    <publish-and-view class="mb-4"/>
    <p class="content__description mb-6">
      “O‘zsanoatqurilishbank” ATB 2015 yil yakunlari bo‘yicha hamda o‘tgan yillar davomida oddiy va
      imtiyozli aksiyalar bo‘yicha hisoblangan dividendlarni olmagan aksiyadorlarni Bankning bosh
      ofisiga yoki hududiy filiallariga murojaat etishini so‘raydi. O‘zbekiston Respublikasining
      “Aksiyadorlik jamiyatlari va aksiyadorlarning huquqlarini himoya qilish to‘g‘risida”gi
      qonuniga asosan egasi yoki egasining qonuniy huquqiy vorisi yoxud merosxo‘ri tomonidan uch yil
      ichida talab qilib olinmagan dividend aksiyadorlarning umumiy yig‘ilishi qaroriga binoan
      jamiyat ixtiyorida qolinishini ma’lum qiladi. Qo‘shimcha ma’lumot olish uchun quyidagi
      manzilga “O‘zsanoatqurilishbank” ATB Bosh ofisiga murojaat etishingizni so‘raymiz: 100000,
      O‘zbekiston Respublikasi, Toshkent shahri, Yunusobod tumani, Shahrisabz ko‘chasi, 3 uy.
    </p>
    <hr class="devider" />
    <br />
    <share class="mt-[25px] mb-16" />

    <!-- OTHER ANNOUNCEMENTS -->
    <h2 class="page-title">Boshqa e’lonlar</h2>
    <div class="grid grid-cols-3 gap-6">
      <announcement v-for="item in 3" :key="item" />
    </div>
  </section>
</template>

<script>
import PublishAndView from '@/components/common/PublishAndView.vue'
import Share from '@/components/common/Share.vue'
import Announcement from '@/components/card/Announcement.vue'

export default {
  components: {
    PublishAndView,
    Share,
    Announcement
  }
}
</script>

<style lang="scss" scoped>
.content__description {
  font-weight: 400;
  font-size: 18px;
  color: #626469;
  text-align: justify;
  line-height: 150%;
}
</style>
