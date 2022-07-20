import Avatar from './src/index.vue'

// eslint-disable-next-line func-names
Avatar.install = function(Vue) {
  Vue.component(Avatar.name, Avatar)
}

export default Avatar