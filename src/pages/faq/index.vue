<template>
  <section>
    <h1 class="page-title">Ko‘p uchraydigan savollar</h1>
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item
          v-for="(item, index) in faq"
          :key="index"
          :title="item.title"
          :name="item.id"
        >
          <p>
            {{ item.content }}
          </p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeName: 1,
      faq: [
        {
          title: 'Suv ta’minoti tarifini almashtirish jarayoni qay tarzda amalga oshiriladi?',
          content:
            'Tarifni almashtirish uchun UzSuvTa’minot aksiyadorlik jamiyatining rasmiy veb sahifasi orqali rasmiy so‘rovnoma qoldirasiz va 15 ish kuni davomida bizning xodimlarimiz siz bilan bog‘lanishadi. Tarifni almashtirish uchun UzSuvTa’minot aksiyadorlik jamiyatining rasmiy veb sahifasi orqali rasmiy so‘rovnoma qoldirasiz va 15 ish kuni davomida bizning xodimlarimiz siz bilan bog‘lanishadi'
        },
        {
          title: 'Ichimlik suvi bilan necha nafar aholi ta’minlangan?',
          content:
            'Tarifni almashtirish uchun UzSuvTa’minot aksiyadorlik jamiyatining rasmiy veb sahifasi orqali rasmiy so‘rovnoma qoldirasiz va 15 ish kuni davomida bizning xodimlarimiz siz bilan bog‘lanishadi. Tarifni almashtirish uchun UzSuvTa’minot aksiyadorlik jamiyatining rasmiy veb sahifasi orqali rasmiy so‘rovnoma qoldirasiz va 15 ish kuni davomida bizning xodimlarimiz siz bilan bog‘lanishadi'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.el-collapse {
  border: none;

  &-item {
    &__header {
      color: #3e4d63;
      background: #f7f8fa;
      border-radius: 4px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
      padding: 16px 16px 16px 24px;
      border-bottom: none;
    }
    &__wrap {
      border: none;
    }

    &__content {
      padding: 24px 24px 0;
      background: #ffffff;

      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #5b7293;
      }
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}
</style>
