# DatePickerPart 日期分离
日期组件

### 基础用法
:::demo
```vue
<template>
  <hub-date-picker :startTime.sync="startTime" :endTime.sync="endTime" />
</template>

<script>
export default {
  data() {
    return { 
      startTime: '',
      endTime:''
    }
  }
}
</script>
```
:::


### 属性
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| startTime  | 起始时间| [String, Date] | -	 | - |
| endTime  | 结束时间| [String, Date] | -	 | - |
