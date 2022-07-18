<template>
<div>
  <el-checkbox v-for="(item,index) in option.itemList"
               :key="index" v-model="item.value"
               :border="option.border"
               :disabled="item.disabled">{{item.text}}</el-checkbox>
</div>
</template>

<script>
export default {
  name: "myCheckBox",
  props:['option']
}
</script>

<style scoped>

</style>
