<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%" height="100%">
    <el-table-column
        v-for="(value,key) in tableData[0]" :key="key"
        :prop="key"
        :label="key"
        width="240">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作">
      <template slot-scope="scope">
        <el-button  type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "myElTable",
  props:['tableData'],
  methods:{
    handleEdit(index, row) {
      this.$emit('edit', index,row)
    },
    handleDelete(index,row){
      this.$emit('delete', index,row)
    }
  }
}
</script>

<style scoped>

</style>
