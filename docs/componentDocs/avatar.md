# Avatar 头像
头像组件

### 基础用法
<br />
<hub-avatar 
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>

::: details 点击查看代码

```html
<hub-avatar 
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
```

:::

### 设置大小
<br />
<hub-avatar
  size="50"
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
<br />
<hub-avatar
  size="200"
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>


::: details 点击查看代码

```html
<hub-avatar
  size="50"
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
<hub-avatar
  size="200"
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
```

:::


### 设置形状
<br />
<hub-avatar 
  shape="square"
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
<hub-avatar 
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>

::: details 点击查看代码

```html
<hub-avatar 
  shape="square"
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
<hub-avatar 
  src="http://smarthub.oss-cn-east-3.unicloudsrv.com/h3c-123-bucket/1549679924155117569.jpg"
/>
```

:::


### 设置默认图标
<br />
<hub-avatar
  shape="circle"
  icon="el-icon-user"
/>

::: details 点击查看代码

```html
<hub-avatar
  shape="circle"
  icon="el-icon-user"
/>
```

:::

### 属性
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| icon  | 设置头像的图标类型 | String |  -  | - |
| shape  | 指定头像的形状 | String | circle/square	 | circle |
| size  | 设置头像的大小 | String | - | 100 |
| src  | 图片类头像的资源地址 | String | - | - |