<template>
  <section>
    <div class="flex-center-between">
      <h1 class="page-title">Tarif va meyorlar</h1>
      <div class="flex-center mb-6">
        <span class="costum-radio">
          <input v-model="key" value="0" type="radio" name="water" id="waste" />
          <label class="costum-radio__item" for="waste">Oqova suv</label>
        </span>
        <span class="costum-radio">
          <input v-model="key" value="1" type="radio" name="water" id="drinking" />
          <label class="costum-radio__item active" for="drinking">Ichimlik suvi</label>
        </span>
      </div>
    </div>

    <el-table :data="tableData">
      <el-table-column label="Hudud" prop="area" align="left"></el-table-column>
      <el-table-column label="Axoli" prop="population"></el-table-column>
      <el-table-column label="Byudjet" prop="budget"></el-table-column>
      <el-table-column label="Boshqa" prop="other"></el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      key: 1,
      tableData: [
        {
          area: 'Respublikada (o‘rtacha)',
          population: '125',
          budget: '550',
          other: '5.250'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
