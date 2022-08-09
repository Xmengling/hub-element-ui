<template>
  <div class="hub-wrap">
    <div
      v-if="isSearch"
      class="hub-search"
    >
      <!-- 搜索条件 -->
      <slot name="hub-search" />
      <!-- 查询/重置 -->
      <div
        class="hub-btn"
      >
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
        >查询</el-button>
        <el-button
          icon="el-icon-refresh"
          size="mini"
          @click="resetQuery"
        >重置</el-button>
      </div>
    </div>
    <div class="hub-refresh">
      <div class="hub-flex">
        <el-row>
          <el-tooltip
            class="item"
            effect="dark"
            :content="showSearch ? '隐藏搜索' : '显示搜索'"
            placement="top"
          >
            <el-button
              size="mini"
              circle
              icon="el-icon-search"
              @click="toggleSearch()"
            />
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="刷新"
            placement="top"
          >
            <el-button
              size="mini"
              circle
              icon="el-icon-refresh"
              @click="refresh()"
            />
          </el-tooltip>
        </el-row>
      </div>
    </div>
    <!-- 通用按钮 -->
    <div class="hub-tool">
      <slot name="hub-toolbar" />
    </div>
  </div>
</template>

<script>
// 搜索组件
export default {
  name: 'hub-search',
  props: {
    showSearch: {
      type: Boolean,
      default: true
    },
    isSearch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // 查询
    handleQuery() {
      this.$emit('hub-query')
    },
    // 重置
    resetQuery() {
      this.$emit('hub-reset')
    },
    // 搜索显隐
    toggleSearch() {
      this.isSearch = !this.isSearch
      this.showSearch = !this.showSearch
      this.$emit('hub-toggleSearch')
    },
    // 刷新
    refresh() {
      this.$emit('hub-refresh')
    }
  }
}
</script>
