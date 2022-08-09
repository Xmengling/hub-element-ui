import Pagination from './src/index.vue'

// eslint-disable-next-line func-names
Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination)
}

export default Pagination
