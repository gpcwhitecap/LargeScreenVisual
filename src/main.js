import { createApp } from 'vue'
import App from './App.vue'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
createApp(App).mount('#app')
