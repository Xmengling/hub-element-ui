import DatePickerPart from './src/index.vue'

// eslint-disable-next-line func-names
DatePickerPart.install = function(Vue) {
  Vue.component(DatePickerPart.name, DatePickerPart)
}

export default DatePickerPart
