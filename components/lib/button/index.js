import Button from './src/main.vue'

// eslint-disable-next-line func-names
Button.install = function(Vue) {
  Vue.component(Button.name, Button)
}

export default Button