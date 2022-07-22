<template>
<div>
  <el-radio v-for="(item,index) in option.itemList"
            :key="index" v-model="option.value"
            :border="option.border"
            :label="item.label"
            :disabled="item.disabled"
            @change="valueChange">{{item.text}}</el-radio>
</div>
</template>

<script>
export default {
  name: "myRadio",
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
