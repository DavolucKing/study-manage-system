/**
* 功能描述：数据展示图表
* @author Zya
* @date 2022/7/25
*/
<template>
  <el-container class="my-echarts">
    <el-header class="el-header">
      <div >
        数据展示
      </div>
    </el-header>
    <el-main class="el-main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="师生比例" name="first"></el-tab-pane>
        <el-tab-pane label="性别比例" name="second"></el-tab-pane>
      </el-tabs>
      <div class="chart" id="chart1" v-show="activeName === 'first'"></div>
      <div class="chart" id="chart2" v-show="activeName === 'second'"></div>
    </el-main>
  </el-container>
</template>

<script>
import studentsOptions from "../lib/options/studentsOptions";
import teachersOptions from "../lib/options/teachersOptions";
import chartOptions from "../lib/options/chartOptions";
export default {
  name: "myEcharts",
  data(){
    return{
      studentsOptions:studentsOptions,
      teachersOptions:teachersOptions,
      chartOptions:chartOptions,
      chart1option:{},
      chart2option:{},
      activeName: 'first'
    }
  },
  computed:{
    studentsNum(){
      return this.getNumber(studentsOptions.pageData)
    },
    teachersNum(){
      return this.getNumber(teachersOptions.pageData)
    },
    manNum(){
      return this.getSex(studentsOptions.pageData,'男')+this.getSex(teachersOptions.pageData,'男')
    },
    womanNum(){
      return this.getSex(studentsOptions.pageData,'女')+this.getSex(teachersOptions.pageData,'女')
    },
  },
  methods:{
    drawChart1(option){
      let myChart = this.$echarts.init(document.getElementById('chart1'))
      this.setChart1Data(option)
      this.chart1option=option
      myChart.setOption(this.chart1option)
    },
    drawChart2(option){
      let myChart = this.$echarts.init(document.getElementById('chart2'))
      this.setChart2Data(option)
      this.chart2option=option
      myChart.setOption(this.chart2option)
    },
    getNumber(arr){
      let count = 0
      arr.forEach(() => {
        count++
      })
      return count
    },
    getSex(arr,sex){
      let count = 0
      arr.forEach(item=>{
        if(item.sex == sex){
          count++
        }
      })
      return count
    },
    setChart1Data(option){
      option.series[0].data = [
        {value:this.studentsNum,name:'students'},
        {value: this.teachersNum,name: 'teachers'}
      ]
    },
    setChart2Data(option){
      option.series[0].data = [
        {value:this.manNum,name:'男'},
        {value: this.womanNum,name: '女'}
      ]
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.activeName = tab.name
    }
  },
  mounted() {
    this.drawChart1(chartOptions)
    this.drawChart2(chartOptions)
  }
}
</script>

<style scoped>
.my-echarts{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.el-header{
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  border: 1px solid #EBEEF5;
}
.el-main{
  height: 570px;
  width: 100%;
}
.chart{
  height: 450px;
  width: 1210px;
}
</style>
