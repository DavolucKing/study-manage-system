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
            <my-el-menu :menu-data="menuData"></my-el-menu>
<!--            <el-menu-->
<!--                default-active="1"-->
<!--                class="el-menu-vertical-demo"-->
<!--                background-color="#545c64"-->
<!--                text-color="#fff"-->
<!--                active-text-color="#ffd04b" style="height: 670px">-->
<!--              <el-menu-item index="1">-->
<!--                <i class="el-icon-location"></i>-->
<!--                <span slot="title">学生管理</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="2">-->
<!--                <i class="el-icon-location"></i>-->
<!--                <span slot="title">教师管理</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="3">-->
<!--                <i class="el-icon-location"></i>-->
<!--                <span slot="title">课程管理</span>-->
<!--              </el-menu-item>-->
<!--            </el-menu>-->
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
<!--        <router-view></router-view>-->
        <my-table :option="option"></my-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyTable from "./myTable";
import option from '../lib/options/studentsOptions'
import menuData from "../lib/options/menuData";
import MyElMenu from "./myElMenu";
export default {
  name: "mainPage",
  components: {MyElMenu, MyTable},
  data(){
    return{
      option:option,
      menuData:menuData
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
