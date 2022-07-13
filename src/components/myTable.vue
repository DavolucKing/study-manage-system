<template>
  <el-container class="my-table">
    <el-header class="el-header">{{ title }}</el-header>
    <el-main class="el-main">
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="id"
            label="学号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
            width="180">
        </el-table-column>
        <el-table-column
            prop="class"
            label="班级">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="180">
          <template slot-scope="scope">
            <el-button  type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-main>
    <el-footer class="el-footer">
      <el-input class="el-input" v-model="searchValue" ></el-input>
      <el-button type="primary" class="btn2" @click="search(searchValue)">搜索</el-button>
      <el-button type="primary" class="btn1">新增</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import BaseTableController from "../lib/controller/baseTableController";

export default {
  name: "myTable",
  props:['option'],
  data(){
    return{
      controller:new BaseTableController(this.option),
      searchValue:'',
      title:'学生信息'
    }
  },
  computed:{
    tableData() {
      return this.controller.tableData
    }
  },
  methods: {
    search(value){
      debugger
      this.controller.searchTableItem(value)
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.el-main{
  height:510px;
  padding: 0;
}
.my-table{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.el-header{
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.el-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-input{
  width: 400px;
  padding-right: 5px;
}
.btn1{
  height: 40px;
}
.btn2{
  height: 40px;
}
</style>
