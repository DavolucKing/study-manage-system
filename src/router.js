import Vue from 'vue'
import Router from 'vue-router'
import studentsTable from "./components/tableConponents/studentsTable";
import teachersTable from "./components/tableConponents/teachersTable";
import courseTable from "./components/tableConponents/courseTable";
import myEcharts from "./components/myEcharts";

Vue.use(Router) //使用vue-router

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/students'
        },
        {
            path:'/students',
            component:studentsTable
        },
        {
            path:'/teachers',
            component:teachersTable
        },
        {
            path:'/course',
            component:courseTable
        },
        {
            path:'/chart',
            component:myEcharts
        }
    ]
})
