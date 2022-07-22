<template>
<div>
  <my-table :option="studentsOptions"></my-table>
</div>
</template>

<script>
import myTable from "../myTable";
import studentsOptions from "../../lib/options/studentsOptions";
export default {
  name: "studentsTable",
  data(){
    return{
      studentsOptions:studentsOptions
    }
  },
  components: {myTable}

}
</script>

<style scoped>

</style>
