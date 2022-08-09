<template>
  <div class="hub-pagination">
    <el-pagination
      v-bind="$attrs"
      :current-page.sync="inCurrentPage"
      :page-size.sync="inPageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :background="background"
      v-on="$listeners"
    />
  </div>
</template>

<script>
// 分页组件
export default {
  name: 'hub-pagination',
  components: { },
  props: {
    // 当前页
    currentPage: {
      type: [Number, String],
      default: 1
    },
    // 每页条数
    pageSize: {
      type: [Number, String],
      default: 10
    },
    // 每页条数下拉列表
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    // 布局
    layout: {
      type: String,
      default: 'prev, pager, next, sizes, total'
    },
    // 背景色
    background: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    inCurrentPage: {
      get() {
        return this.currentPage
      },
      set(val) {
        this.$emit('update:currentPage', val)
      }
    },
    inPageSize: {
      get() {
        return this.pageSize
      },
      set(val) {
        this.$emit('update:pageSize', val)
      }
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
