import GetVerifyCode from './src/index.vue'

// eslint-disable-next-line func-names
GetVerifyCode.install = function(Vue) {
  Vue.component(GetVerifyCode.name, GetVerifyCode)
}

export default GetVerifyCode
