import GoBack from './src/index.vue'

// eslint-disable-next-line func-names
GoBack.install = function(Vue) {
  Vue.component(GoBack.name, GoBack)
}

export default GoBack
