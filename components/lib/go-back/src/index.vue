<!--
 * @Description: 返回组件
-->
<template>
  <div class="go-back-wrap">
    <div class="go-back-title">{{ title }}</div>
    <div class="go-back-btn"
         @click="goBack"
    >
      <i class="el-icon-d-arrow-left" />
      返回上一页
    </div>
  </div>
</template>

<script>
export default {
  name: 'hub-go-back',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 是否跳转指定页
    isPageTo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      // 跳转指定页
      if (this.isPageTo) {
        this.$emit('page-to')
        return
      }
      this.$router.go(-1)
    }
  }
}
</script>

