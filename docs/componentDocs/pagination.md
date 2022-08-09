# Pagination 分页
分页组件

### 基础用法
:::demo
```vue
<template>
  <hub-pagination
    :current-page.sync="pager.page"
    :page-size.sync="pager.pageSize"
    :total="pager.total"
    @size-change="sizeChange"
  />
  <div style="margin: 20px">
    <div>当前页：{{ pager.page }}</div>
    <div>每页显示：{{ pager.pageSize }}</div>
    <div>原有事件：{{ value }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      pager: {
        page: 1,
        pageSize: 10,
        total: 1000
      },
      value: ''
    }
  },
  methods: {
    sizeChange() {
      this.value = 'size-change'
    }
  }
}
</script>
```
:::

### Pagination 属性

| 属性                          | 说明                  | 类型          | 可选值      | 默认值    |
| ----------------------------- | -------------------- | ------------- | ---------- | --------- |
| current-page          | 当前页码              | number        | —          | —         |
| page-size   | 分页大小              | number        | —          | —         |
| total                         | 总条数                | number        | —          | —         |

同时支持el-pagination原有的属性和方法

<div style="float: right; font-size: 12px;">by：程梦玲</div>