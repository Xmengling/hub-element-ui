# SearchBox 搜索栏容器
搜索栏容器组件

### 基础用法
:::demo
```vue
<template>
  <hub-search-box >
    <el-form inline :model="formData">
      <el-form-item label="输入A：" >
        <el-input v-model="formData.inputA" />
      </el-form-item>
      <el-form-item label="输入B：" >
        <el-input v-model="formData.inputB" />
      </el-form-item>
    </el-form>
  </hub-search-box>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          inputA: '',
          inputB: ''
        }
      }
    }
  }
</script>
```
:::

### 可折叠和刷新
默认折叠后的高度为0，即隐藏所有搜索
:::demo
```vue
<template>
  <hub-search-box fold-able refresh-able>
    <el-form inline :model="formData">
      <el-form-item label="输入A：" >
        <el-input v-model="formData.inputA" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入B：" >
        <el-input v-model="formData.inputB" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入C：" >
        <el-input v-model="formData.inputC" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入D：" >
        <el-input v-model="formData.inputD" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入E：" >
        <el-input v-model="formData.inputE" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入F：" >
        <el-input v-model="formData.inputF" style="width: 120px"/>
      </el-form-item>
    </el-form>
  </hub-search-box>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          inputA: '',
          inputB: '',
          inputC: '',
          inputD: '',
          inputE: '',
          inputF: ''
        }
      }
    }
  }
</script>
```
:::

可以设置折叠高度
:::demo
```vue
<template>
  <hub-search-box fold-able refresh-able fold-height="50">
    <el-form inline :model="formData">
      <el-form-item label="输入A：" >
        <el-input v-model="formData.inputA" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入B：" >
        <el-input v-model="formData.inputB" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入C：" >
        <el-input v-model="formData.inputC" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入D：" >
        <el-input v-model="formData.inputD" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入E：" >
        <el-input v-model="formData.inputE" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入F：" >
        <el-input v-model="formData.inputF" style="width: 120px"/>
      </el-form-item>
    </el-form>
  </hub-search-box>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          inputA: '',
          inputB: '',
          inputC: '',
          inputD: '',
          inputE: '',
          inputF: ''
        }
      }
    }
  }
</script>
```
:::

### 折叠按钮类型
目前有两种类型text/circle， 默认circle， 可更改为text， 如下：
:::demo
```vue
<template>
  <hub-search-box fold-able refresh-able fold-btn-type = 'text'>
    <el-form inline :model="formData">
      <el-form-item label="输入A：" >
        <el-input v-model="formData.inputA" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入B：" >
        <el-input v-model="formData.inputB" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入C：" >
        <el-input v-model="formData.inputC" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入D：" >
        <el-input v-model="formData.inputD" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入E：" >
        <el-input v-model="formData.inputE" style="width: 120px"/>
      </el-form-item>
      <el-form-item label="输入F：" >
        <el-input v-model="formData.inputF" style="width: 120px"/>
      </el-form-item>
    </el-form>
  </hub-search-box>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          inputA: '',
          inputB: '',
          inputC: '',
          inputD: '',
          inputE: '',
          inputF: ''
        }
      }
    }
  }
</script>
```
:::


### 搜索事件
:::demo
```vue
<template>
  <hub-search-box refresh-able @search="handleSearch">
    <el-form inline :model="formData">
      <el-form-item label="输入A：" >
        <el-input v-model="formData.inputA" />
      </el-form-item>
      <el-form-item label="输入B：" >
        <el-input v-model="formData.inputB" />
      </el-form-item>
    </el-form>
  </hub-search-box>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          inputA: '',
          inputB: ''
        }
      }
    },
    methods: {
      handleSearch() {
        console.log('刷新')
      }
    }
  }
</script>
```
:::

### 容器外添加操作按钮
:::demo
```vue
<template>
  <hub-search-box fold-able refresh-able @search="handleSearch">
    <!-- 输入框 -->
    <el-form inline :model="formData">
      <el-form-item label="输入A：" >
        <el-input v-model="formData.inputA" />
      </el-form-item>
      <el-form-item label="输入B：" >
        <el-input v-model="formData.inputB" />
      </el-form-item>
    </el-form>
    <!-- 功能按钮 -->
    <template v-slot:action-btn>
      <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
          <el-button
            type="primary"
            plain
            icon="el-icon-plus"
            size="mini"
          >新增</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="danger"
            plain
            icon="el-icon-delete"
            size="mini"
          >批量删除</el-button>
        </el-col>
      </el-row>
    </template>
  </hub-search-box>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          inputA: '',
          inputB: ''
        }
      }
    },
    methods: {
      handleSearch() {
        console.log('刷新')
      }
    }
  }
</script>
```
:::

### 属性
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| fold-able  | 可折叠 | Boolean | true/false	 | false |
| refresh-able  | 可刷新 | Boolean | true/false	 | false |
| fold-height  | 折叠高度 | String | - | 0 |
| fold-btn-type  | 折叠按钮样式 | String | text/circle | circle |

### 事件
| 事件名 | 说明           | 回调参数                    |
| ------ | -------------- | --------------------------- |
| search | 点击刷新时触发的返回事件 |  无|

### SearchBox插槽
| 插槽名 | 说明           |
| ------ | -------------- |
| - | 自定义默认内容，即主体区域 |  无|
| action-btn | 功能按钮区 |  无|

<div style="float: right; font-size: 12px;">by：程梦玲</div>