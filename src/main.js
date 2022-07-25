import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
