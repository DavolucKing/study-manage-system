<template>
  <div>
    <my-table :option="courseOptions"></my-table>
  </div>
</template>

<script>
import myTable from "../myTable";
import courseOptions from "../../lib/options/courseOptions";
export default {
  name: "studentsTable",
  data(){
    return{
      courseOptions:courseOptions
    }
  },
  components: {myTable}

}
</script>

<style scoped>

</style>
