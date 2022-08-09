import search from './src/index.vue'

// eslint-disable-next-line func-names
search.install = function(Vue) {
  Vue.component(search.name, search)
}

export default search
