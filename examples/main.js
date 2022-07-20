import Vue from 'vue'
import App from './App.vue'

import HubUI from '../components/lib'
import '../components/css/index.scss'
Vue.use(HubUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
