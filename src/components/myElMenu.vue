<template>
  <el-menu
      :default-active="menuData.defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" style="height: 670px">
    <el-menu-item v-for="(item,index) in menuData.itemList" :key="index" :index="index">
      <i class="el-icon-location"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "myElMenu",
  props:['menuData']
}
</script>

<style scoped>

</style>
