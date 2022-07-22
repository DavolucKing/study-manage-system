/**
* 功能描述：管理系统主页面
* @author Zya
* @date 2022/7/16
*/
<template>
  <el-container>
    <el-header>
      <div class="el-header">
        学生信息管理系统
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" class="el-aside">
        <el-row style="height: 670px">
          <el-col :span="24">
            <my-el-menu :menu-data="menuData" @menuChange="menuChange"></my-el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
<!--        <my-table :option="option"></my-table>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import studentsOption from '../lib/options/studentsOptions'
import menuData from "../lib/options/menuData";
import MyElMenu from "./myElMenu";
import router from "../router";
export default {
  name: "mainPage",
  components: {MyElMenu},
  data(){
    return{
      option:studentsOption,
      menuData:menuData
    }
  },
  methods:{
    menuChange(path) {
      router.push(path)
    }
  }
}
</script>

<style scoped>
.el-header{
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  background:#545c64;
  color: aliceblue;
}
.el-menu-vertical-demo{
  height: 100%;
}
</style>
