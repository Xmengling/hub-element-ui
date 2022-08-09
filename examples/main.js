import Vue from 'vue'
import App from './App.vue'

import HubUI from '../components/lib'
import '../components/css/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(HubUI)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
