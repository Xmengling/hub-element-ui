# DatePicker 日期
日期组件

### 基础用法
:::demo
```vue
<template>
  <hub-date-picker :start-time.sync="startTime" :end-time.sync="endTime" />
  <div style="margin: 10px">开始时间：{{ startTime }}</div>
  <div style="margin: 10px">结束时间：{{ endTime }}</div>
</template>

<script>
export default {
  data() {
    return { 
      startTime: null,
      endTime: undefined
    }
  }
}
</script>
```
:::

### 置灰日期
:::demo
```vue
<template>
  <div style="margin: 15px 0">置灰今天之前的日期</div>
  <hub-date-picker :start-time.sync="startTime" :end-time.sync="endTime" banBefore />
  <div style="margin: 15px 0">置灰今天之后的日期</div>
  <hub-date-picker :start-time.sync="startTime" :end-time.sync="endTime" banAfter />
  <div style="margin: 10px">开始时间：{{ startTime }}</div>
  <div style="margin: 10px">结束时间：{{ endTime }}</div>
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

### 日期类型
根据type属性设置日期的显示类型，默认为daterange
:::demo
```vue
<template>
  <div style="margin: 15px 0">默认类型</div>
  <hub-date-picker :start-time.sync="startTime" :end-time.sync="endTime" />

  <div style="margin: 15px 0">日期时间类型</div>
  <hub-date-picker :start-time.sync="startTime" :end-time.sync="endTime" type="datetimerange"/>

  <div style="margin: 10px">开始时间：{{ startTime }}</div>
  <div style="margin: 10px">结束时间：{{ endTime }}</div>
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
| start-time  | 起始时间| [String, Date] | -	 | - |
| end-time  | 结束时间| [String, Date] | -	 | - |
| ban-before  | 置灰之前的日期| Boolean | false/true	 | false |
| ban-after  | 置灰之后的日期| Boolean | false/true	 | false |
| size  | 组件大小| String | middle/small/mini	 | small |
| type |	显示类型 |	string | <div style="width: 160pt">year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</div>	 |	daterange 

同时支持el-date-picker原有属性和事件

<div style="float: right; font-size: 12px;">by：程梦玲</div>