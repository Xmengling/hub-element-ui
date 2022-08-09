# Avatar 头像
头像组件

### 基础用法
:::demo
```vue
<template>
  <hub-avatar 
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  />
</template>
```
:::

### 设置大小
:::demo
```vue
<template>
  <hub-avatar
    size="50"
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  />
  <hub-avatar
    size="80"
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  />
</template>
```
:::

### 设置形状
:::demo
```vue
<template>
  <hub-avatar 
    shape="square"
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  />
  <hub-avatar 
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  />
</template>
```
:::

### 默认图标
:::demo
```vue
<template>
  <hub-avatar
    shape="circle"
  />
  <hub-avatar
    size="30"
  />
</template>
```
:::

### 修改默认图标
:::demo
```vue
<template>
  <hub-avatar
    shape="circle"
    icon="el-icon-user"
  />
</template>
```
:::

### 属性
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| icon  | 设置头像的图标类型 | String |  -  | - |
| shape  | 指定头像的形状 | String | circle/square	 | circle |
| size  | 设置头像的大小 | String | - | 100 |
| src  | 图片类头像的资源地址 | String | - | - |

<div style="float: right; font-size: 12px;">by：程梦玲</div>