<template>
<div>
  <el-input :type="option.type"
            v-model="option.value"
            :placeholder="option.placeholder"
            :prefix-icon="option.prefixIcon"
            :suffix-icon="option.suffixIcon"
            :style="option.style"
            @change="valueChange">
  </el-input>
</div>
</template>

<script>
export default {
  name: "myInput",
  props:['option'],
  methods:{
    valueChange(){
      this.$emit('valueChange')
    }
  }
}
</script>

<style scoped>

</style>
