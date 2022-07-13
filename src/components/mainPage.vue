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
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b" style="height: 670px">
              <el-menu-item index="1">
                <i class="el-icon-location"></i>
                <span slot="title">学生管理</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-location"></i>
                <span slot="title">教师管理</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-location"></i>
                <span slot="title">课程管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "mainPage"
}
</script>

<style scoped>
.el-header{
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  background:#545c64;
  color: aliceblue;
}
.el-menu-vertical-demo{
  height: 100%;
}
</style>
