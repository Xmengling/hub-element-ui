# GetCode 获取验证码
获取验证码组件

### 基础用法
:::demo
```vue
<template>
  <hub-get-code />
</template>
```
:::



### 设置Time
:::demo
```vue
<template>
  <hub-get-code time="20" />
</template>
```
:::


### 设置禁用
:::demo
```vue
<template>
  <hub-get-code disabled />
</template>
```
:::

### 设置宽高
:::demo
```vue
<template>
  <hub-get-code height="40" width="130" />
</template>
```
:::


### 属性
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| time  | 倒计时 | string | number |  -  | 60 |
| disabled  | 禁用 | boolean | true/false	 | false |
| height  | 高度 | String | >0 | 30 |
| width  | 宽度 | String | >0 | 100 |