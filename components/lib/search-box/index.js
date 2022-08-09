import SearchBox from './src/index.vue'

// eslint-disable-next-line func-names
SearchBox.install = function(Vue) {
  Vue.component(SearchBox.name, SearchBox)
}

export default SearchBox
