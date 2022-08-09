import DatePicker from './src/index.vue'

// eslint-disable-next-line func-names
DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
