<template>
<div>
  <el-switch v-model="option.value"
             :disabled="option.disabled"
             :width="option.width"
             :style="option.style"></el-switch>
</div>
</template>

<script>
export default {
  name: "mySwitch",
  props:['option']
}
</script>

<style scoped>

</style>
