# GoBack 返回
返回上一页组件

### 基础用法
默认返回上一页，$router.go(-1)
:::demo
```vue
<template>
  <hub-go-back />
</template>
```
:::


### 含有标题
:::demo
```vue
<template>
  <hub-go-back title="我是标题"/>
</template>
```
:::

### 返回指定页
:::demo
```vue
<template>
  <hub-go-back isPageTo @page-to="pageTo"/>
</template>
<script>
export default {
  data() {
    return { 
    }
  },
  methods: {
    pageTo() {
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
```
:::

### 属性
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| title  | 标题 | String |  -  | - |
| isPageTo  | 是否返回指定页 | Boolean | true/false	 | false |


### 时间
| 事件名 | 说明           | 回调参数                    |
| ------ | -------------- | --------------------------- |
| page-to | 点击返回触发的事件，需要开启isPageTo属性 |  无|


<div style="float: right; font-size: 12px;">by：程梦玲</div>