import Avatar from './avatar'
import GetCode from './get-code'
import Search from './search'
import SearchBox from './search-box'
import Table from './table'
import Pagination from './pagination'
import DatePicker from './date-picker'
import DatePickerPart from './date-picker-part'
import GoBack from './go-back'

import { version } from '../../package.json'

const components = {
  Avatar,
  GetCode,
  Search,
  Table,
  Pagination,
  DatePicker,
  DatePickerPart,
  GoBack,
  SearchBox
}

const install = function(Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version,
  install,
  ...components
}

export default API
