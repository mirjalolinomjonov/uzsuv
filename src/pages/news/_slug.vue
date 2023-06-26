<template>
  <section>
    <h1 class="page-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio!</h1>
    <div class="devider my-4"></div>
    <publish-and-view class="mb-4" />

    <!-- content -->
    <div class="content">
      <figure class="w-full h-[450px] rounded-lg overflow-hidden mb-5">
        <img class="w-full object-cover" src="https:picsum.photos/1200/980" alt="" />
      </figure>

      <p class="content__description">
        Prezidentimizning parlamentga murojaatida 2020-yilda hududlardagi aholining markazlashgan
        ichimlik suvi bilan ta’minlanganlik darajasi 70,8 foizdan 73,0 foizga yetkazilgani alohida
        ta’kidlandi. Ya’ni ushbu yilda 1,2 million nafar yurtdoshimiz ilk bor markazlashgan ichimlik
        suvidan bahramand bo‘lgan. Shu o‘rinda alohida qayd etish kerakki, bugungi kunda suv
        ta’minoti sohasi davlatimiz rahbari boshchiligida tubdan o‘zgarmoqda. Sohaga zamonaviy
        boshqaruv usuli kirib keldi. Xususan, davlatimiz rahbarining 2019-yil 26-noyabrdagi
        farmoniga muvofiq, "O‘zsuvta’minot" aksiyadorlik jamiyati tashkil etilib, uning tashkiliy
        tuzilmasiga kiruvchi MChJlar yangi korporativ boshqaruv tizimiga o‘tkazildi. Natijada bir
        vaqtlar o‘z holiga tashlab qo‘yilgan sohada mas’ul paydo bo‘ldi. Sodda tilda aytganda,
        qarovsiz, tarqoq bo‘lib kelgan suv ta’minoti korxonalarining boshini qovushtiradigan,
        tizimdagi muammolarni o‘z vaqtida aniqlab, ularning yechimini ishlab chiqadigan, zarur
        chora-tadbirlar va ularning ijrosini ta’minlaydigan yetakchi tashkilot shakllantirildi. Shu
        bilan birga, hududlarda aholining suv ta’minoti bo‘yicha shart-sharoitlarini yaxshilash
        ishlari yangicha usullarda olib borilmoqda. Masalan, ilgari sohadagi muammolar viloyatlar
        kesimida o‘rganilgan bo‘lsa, endilikda shaxsan yurtboshimizning tashabbusi bilan eng quyi
        tizimgacha kirib borilmoqda. Jumladan, "O‘zsuvta’minot" rahbariyati, mutaxassislari va
        hududiy korxonalar vakillaridan iborat ishchi guruhlar mahallalar, ko‘chalar, xonadonlarda
        bo‘lib, aholining suv ta’minoti bo‘yicha sharoitlari, muammo va takliflarini o‘rganmoqda.
        Natijada aniqlangan ko‘plab masalalar joyining o‘zida hal etilmoqda, shuningdek, sohani
        rivojlantirish, xizmat ko‘rsatish sifati va ko‘lamini oshirishga qaratilgan loyihalarni
        yanada puxta tayyorlash imkonini bermoqda. Prezidentimiz o‘z murojaatnomasida tizim
        rahbarlarining malakasi, bilimini oshirish masalasiga alohida to‘xtalib o‘tdi. Darhaqiqat,
        bugun har qanday sohaning rivoj topishi avvalo tizimda lokomotiv bo‘lgan mutaxassislarning
        salohiyatiga chambarchas bog‘liq. Ayni maqsadda "O‘zsuvta’minot" AJ tizimidagi rahbar
        kadrlar va boshqa mutaxassislar suv ta’minoti, iqtisodiy, moliyaviy, biznes, xorijiy tillar
        yo‘nalishlarida bilim va malakasini oshirishni o‘z oldiga maqsad qo‘ygan. Ayni vaqtda bu
        borada tizimli ishlar boshlangan. Maqsadimiz – suv ta’minoti sohasida olib borilayotgan
        islohotlar, ularning natijalari yurtimizdagi har bir xonadongacha kirib borsin. Bu yo‘lda
        bor imkoniyatimizni safarbar etmoqdamiz. Zero, olis-olis qishloqlarimizda suvni o‘nlab
        chaqirim masofadan tashib ichgan yoki boshqa manbalardan olishga majbur bo‘lgan
        yurtdoshlarimizning muammolari hal etilishi, suv ta’minoti misolida minglab xonadonlarga
        qut-baraka, farovonlik kirishi, turmush darajalari yaxshilanishi biz uchun eng muhim
        natijadir.
      </p>
    </div>

    <!-- #hashtag -->
    <div class="flex-center gap-6 mt-2">
      <router-link to="#" class="hashtag"> #uzsuv </router-link>
    </div>

    <div class="devider mt-4 mb-6"></div>
    <share />
  </section>
</template>

<script>
import PublishAndView from '@/components/common/PublishAndView.vue'
import Share from '@/components/common/Share.vue'
export default {
  components: {
    PublishAndView,
    Share
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

.hashtag {
  display: inline-block;
  padding: 4px 8px;
  color: #305ab6;
  font-size: 19px;
  border-radius: 4px;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #eaf0fd;
  }
}
</style>
