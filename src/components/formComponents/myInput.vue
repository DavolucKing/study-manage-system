<template>
<div>
  <el-input :type="option.type"
            v-model="option.value"
            :placeholder="option.placeholder"
            :prefix-icon="option.prefixIcon"
            :suffix-icon="option.suffixIcon"
            :style="option.style"></el-input>
</div>
</template>

<script>
export default {
  name: "myInput",
  props:['option']
}
</script>

<style scoped>

</style>
