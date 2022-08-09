# Table 表格
表格组件

### 基础用法
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG"/>
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ]
      }
    }
}
</script>
```
:::

### 带序号 - 不跨页
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG" indexable />
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ]
      }
    }
}
</script>
```
:::

### 多选 - 不跨页
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG" selectable @select-list="onSelect"/>
  选中的数据：{{ selected.map((item) => item.name).join() }}
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ],
        selected: []
      }
    },
    methods: {
      onSelect(values) {
        console.log('values', values)
        this.selected = values
      }
    }
}
</script>
```
:::


### 单选
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG" selectable singleSelect @select-list="onSelect"/>
  选中的数据：{{ selected.map((item) => item.name).join() }}
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ],
        selected: []
      }
    },
    methods: {
      onSelect(values) {
        console.log('values', values)
        this.selected = values
      }
    }
}
</script>
```
:::

### 多行文本
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG"/>
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: '',
            label: '身体属性',
            multiText: [
              {
                prop: 'height',
                label: '身体属性',
              },
              {
                prop: 'weight',
                label: '体重',
              }
            ]
          }
        ]
      }
    }
}
</script>
```
:::

### 动态单元格内容
单元格内容是动态的、计算式的。

可配合getText属性通过函数实现。
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG"/>
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
            getText: (gender) => gender === 'male' ? '男' : '女'
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ]
      }
    }
}
</script>
```
:::

getText也可直接传入枚举对象。
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG"/>
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: '0', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: '1', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: '0', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
            getText: {
              '1': '男',
              '0': '女'
            }
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ]
      }
    }
}
</script>
```
:::

### 定制列插槽
针对展示内容复杂或非纯展示的数据，可通过插槽灵活配置。
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG">
    <template v-slot:gender>
      <el-table-column label="性别">
        <template slot-scope="scoped">
          {{ scoped.row.gender === '1' ? '男' : '女'}}
        </template>
      </el-table-column>
    </template>

    <template v-slot:action>
      <el-table-column label="操作" width="150">
        <template slot-scope="scoped">
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </hub-table>
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: '0', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: '1', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: '0', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            slot: 'gender'
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
          {
            slot: 'action'
          }
        ]
      }
    }
}
</script>
```
:::

### loading效果
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG" :loading="loading"/>
  <el-button @click="onLoad">{{ loading ? '停止加载' : '点击加载'}}</el-button>
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
          },
        ],
        loading: true
      }
    },
    methods: {
      onLoad() {
        this.loading = !this.loading
      }
    }
}
</script>
```
:::


### 支持el-table自带属性和事件
:::demo
```vue
<template>
  <hub-table :data="dataList" :config="CONFIG" stripe @cell-click="cellClick"/>
  {{ value }}
</template>
<script>
export default {
    data() {
      return { 
        dataList: [
          { name: '张三', age: 20, gender: 'female', height: 170, weight: 60 },
          { name: '李四', age: 18, gender: 'male', height: 174, weight: 64 },
          { name: '王五', age: 19, gender: 'female', height: 179, weight: 70 },
        ],
        CONFIG: [
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'age',
            label: '年龄',
          },
          {
            prop: 'gender',
            label: '性别',
          },
          {
            prop: 'height',
            label: '身高',
          },
          {
            prop: 'weight',
            label: '体重',
            attrs: {
              resizable: false
            }
          },
        ],
        value: '请点击单元格'
      }
    },
    methods: {
      cellClick() {
        this.value = '单元格被点击了'
      }
    }
}
</script>
```
:::

### Table 属性

| 属性        | 说明                                          | 类型     | 可选值 | 默认值 |
| ----------- | --------------------------------------------- | -------- | ------ | ------ |
| data        | 数据                                          | object[] | —      | —      |
| config      | 列配置（[数据结构](#config-列配置-数据结构)） | object[] | —      | —      |
| loading     | 是否loading状态                               | boolean  | —      | false  |
| selectable  | 是否支持多选                                    | boolean  | —      | false  |
| singleSelect | 是否支持单选                                   | boolean  | —      | false  |
| indexable   | 是否展示行序号                                | boolean  | —      | false  |

同时支持el-table原有属性
### Table 事件

| 事件名 | 说明           | 回调参数                    |
| ------ | -------------- | --------------------------- |
| select-list | 勾选触发的事件 | row[] |

同时支持el-table原有事件
### config 列配置 数据结构

| 属性      | 说明                                                         | 类型                       | 可选值 | 默认值 |
| --------- | ------------------------------------------------------------ | -------------------------- | ------ | ------ |
| prop       | 取值字段                                                     | string                     | —      | —      |
| label     | 标题                                                         | string                     | —      | —      |
| className | 自定义css类名                                                | string                     | —      | —      |
| style     | 样式                                                         | string                     | —      | —      |
| getText   | 获取单元格文本                                               | function({ value, row }) / { key: value }  | —      | —      |
| width     | 宽度                                                         | number                     | —      | —      |
| children  | 多级表头，子列配置                                           | number                     | —      | —      |
| fixed     | 列固定                                                       | center / 'left' / 'right' | —      | —      |
| multiText | 多行文本展示（[数据结构](#multiText-多行文本展示-数据结构)） | object[]                   | —      | —      |
| slot      | 使用插槽，插槽名                                             | string                     | —      | —      |
| attrs     | el-table-column 的原有配置                                   | object                     | —      | —      |

### multiText 多行文本展示 数据结构

| 属性      | 说明           | 类型                     | 可选值 | 默认值 |
| --------- | -------------- | ------------------------ | ------ | ------ |
| prop       | 取值字段       | string                   | —      | —      |
| label     | 标题           | string                   | —      | —      |
| className | 自定义css类名  | string                   | —      | —      |
| style     | 样式           | string                   | —      | —      |
| getText   | 获取单元格文本 | function({ value, row }) | —      | —      |

<div style="float: right; font-size: 12px;">by：程梦玲</div>
