<template>
  <el-form label-width="80px" :model="option.model" >
    <el-form-item v-for="(item,index) in option.itemList" :key="index" :label="item.name" :label-width="option.labelWidth">
      <component :is="item.type" :option="item.option"></component>
    </el-form-item>
  </el-form>
</template>

<script>
import myInput from "./myInput";
import mySwitch from "./mySwitch";
import myRadio from "./myRadio";
import myCheckBox from "./myCheckBox";
import mySelect from "./mySelect";
import myDatePicker from "./myDatePicker";
export default {
  name: "myForm",
  components: {myInput,mySwitch,myRadio,myCheckBox,mySelect,myDatePicker},
  props:['option'],

  data() {
    return {

    }
  },
  mounted() {

  }

}
</script>

<style scoped>

</style>
