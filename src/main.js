import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LuffyCityHeader from '@/components/LuffyCityHeader'
import '@/assets/index.css'

Vue.config.productionTip = false

// 将ElementUI注册到Vue实例中
Vue.use(ElementUI);

// 注册LuffyCityHeader为全局组件
Vue.component("LuffyCityHeader", LuffyCityHeader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
