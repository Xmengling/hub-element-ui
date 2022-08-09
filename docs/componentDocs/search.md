# Search 搜索
搜索组件

### 基础用法
:::demo
```vue
<template>
  <hub-search/>
</template>
```
:::


### 搜索条件插槽用法
:::demo
```vue
<template>
  <hub-search>
    <template #hub-search>
      <div>
        搜索条件
      </div>
    </template>
  </hub-search>
</template>
```
:::


### 通用按钮插槽用法
:::demo
```vue
<template>
  <hub-search>
    <template #hub-toolbar>
        <el-button
        type="primary"
        icon="el-icon-plus"
        size="mini"
        >新增</el-button>
          <el-button
          type="primary"
          icon="el-icon-edit"
          size="mini"
        >编辑</el-button>
    </template>
  </hub-search>
</template>
```
:::



### 事件
|  事件名  |  说明  | 回调参数  |
|  ----  |  ----  |  ----  |
|   hub-query   | 查询 | - |
|   hub-reset   | 重置 | - |
|   hub-refresh | 刷新 | - |
|   hub-toggleSearch | 隐藏/显示搜索条件 | - |
### Slots
|  插槽名  |  说明  |
|  ----    |  ----  |
|   hub-toolbar   | 通用按钮 |
|   hub-search    | 搜索条件 |
