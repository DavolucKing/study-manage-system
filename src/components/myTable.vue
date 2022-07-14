<template>
  <el-container class="my-table">
    <el-header class="el-header">
      <div >
        {{title}}
      </div>
    </el-header>
    <el-main class="el-main">
      <el-table
          :data="tableData"
          border
          style="width: 100%">
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

    </el-main>
    <el-footer class="el-footer">
      <el-input class="el-input" v-model="searchValue" ></el-input>
      <el-button type="primary" class="btn2" @click="search(searchValue)">搜索</el-button>
      <el-button type="primary" class="btn1" @click="dialogFormVisible=true">新增</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="学号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio v-model="form.sex" label="男">男</el-radio>
            <el-radio v-model="form.sex" label="女">女</el-radio>
          </el-form-item>
          <el-form-item label="班级" :label-width="formLabelWidth">
            <el-input v-model="form.class" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleAdd(myIndex)">确 定</el-button>
        </div>
      </el-dialog>
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
      title:'学生信息',
      dialogFormVisible:false,
      dialogFormFlag:false,
      myIndex:0,
      form: {
        id:'',
        name: '',
        sex:'',
        class:''
      },
      formLabelWidth: '120px'
    }
  },
  computed:{
    tableData() {
      return this.controller.tableData
    }
  },
  methods: {
    search(value){
      this.controller.searchTableItem(value)
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row
      this.myIndex = index
      this.dialogFormFlag = true
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      this.$confirm('确认删除此条信息？')
          .then(() => {
            console.log(index, row);
            this.controller.deleteTableItem(index)
          })
          .catch(() => {});
    },
    handleAdd(){
      this.dialogFormVisible = false
      if(this.dialogFormFlag == false){
        // this.tableData.push(this.form)
        this.controller.addTableItem(this.form)
        this.dialogFormVisible = false
      }else{
        // this.tableData.splice(this.myIndex,1)
        // this.tableData.splice(this.myIndex,0,this.form)
        this.controller.editTableItem(this.myIndex,this.form)
        this.dialogFormFlag = false
        this.form={
          id:'',
          name: '',
          sex:'',
          class:''
        }
      }
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
  border: 1px solid #EBEEF5;
}
.el-footer{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EBEEF5;
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
