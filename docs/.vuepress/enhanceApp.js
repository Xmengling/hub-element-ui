import HubUI from '../../components/lib'
import '../../components/css/index.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import HubElementUI from 'hub-element-ui'
// import 'hub-element-ui/dist/css/index.css'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(HubUI)
    // Vue.use(HubElementUI)
  }
}