<template>
  <el-date-picker
      v-model="option.value"
      type="date"
      :placeholder="option.placeholder">
  </el-date-picker>
</template>

<script>
export default {
  name: "myDatePicker",
  props:['option']
}
</script>

<style scoped>

</style>
