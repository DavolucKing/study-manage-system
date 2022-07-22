<template>
  <div>
    <my-table :option="teachersOptions"></my-table>
  </div>
</template>

<script>
import myTable from "../myTable";
import teachersOptions from "../../lib/options/teachersOptions";
export default {
  name: "studentsTable",
  data(){
    return{
      teachersOptions:teachersOptions
    }
  },
  components: {myTable}

}
</script>

<style scoped>

</style>
