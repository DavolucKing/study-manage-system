<template>
  <el-select v-model="option.value" :placeholder="option.placeholder">
    <el-option
        v-for="item in option.itemList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "mySelect",
  props:['option']
}
</script>

<style scoped>

</style>
