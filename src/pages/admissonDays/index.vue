<template>
  <section>
    <h1 class="page-title">Fuqarolarni qabul qilish</h1>
    <el-table :data="tableData">
      <el-table-column
        prop="fullName"
        label="Rahbarlar FISh"
        width="240"
        align="left"
      ></el-table-column>
      <el-table-column prop="position" label="Lavozimi" width="380" align="left"></el-table-column>
      <el-table-column prop="admissonDay" label="Qabul kunlari"></el-table-column>
      <el-table-column prop="admissonTime" label="Qabul vaqti"></el-table-column>
    </el-table>

    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut omnis alias ratione provident
      unde dolores deleniti deserunt commodi temporibus, numquam tempore voluptates tempora
      veritatis enim? Repudiandae delectus nobis doloremque saepe!
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          fullName: 'Saidov Ulug‘bek Xusanovich',
          position: 'Boshqaruv raisi',
          admissonDay: 'Juma',
          admissonTime: '17.00 - 19.00'
        },
        {
          fullName: 'Saidov Ulug‘bek Xusanovich',
          position: 'Boshqaruv raisi birinchi o‘rinbosari — bosh muhandis',
          admissonDay: 'Juma',
          admissonTime: '17.00 - 19.00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
