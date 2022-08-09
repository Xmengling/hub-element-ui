<template>
  <div class="hub-search-box-wrap">
    <!-- 输入框区 -->
    <div class="hub-search-box-content-wrap"
         :style="{'height': foldAble ? inFoldHeight: 'auto'}"
    >
      <!-- 匿名插槽 -->
      <slot />
    </div>

    <!-- 按钮区 -->
    <div class="hub-search-box-btn-wrap">
      <!-- 功能按钮 -->
      <div>
        <slot name="action-btn" />
      </div>
      <!-- 折叠按钮 -->
      <div
        class="hub-search-fold-btn-wrap"
      >
        <el-tooltip
          v-if="foldAble"
          effect="dark"
          :content="isFold ? '展开搜索' : '折叠搜索'"
          placement="top"
        >
          <el-button
            v-if="foldBtnType === 'circle'"
            size="mini"
            circle
            :icon="isFold ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
            @click="handleFold()"
          />
          <el-button
            v-if="foldBtnType === 'text'"
            size="mini"
            type="text"
            :icon="isFold ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
            @click="handleFold()"
          >
            {{ isFold ? '展开' : '折叠' }}
          </el-button>
        </el-tooltip>
        <el-tooltip
          v-if="refreshAble"
          effect="dark"
          content="刷新"
          placement="top"
        >
          <el-button
            size="mini"
            circle
            icon="el-icon-refresh"
            @click="handleSearch"
          />
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hub-search-box',
  props: {
    // 是否可折叠
    foldAble: {
      type: Boolean,
      default: false
    },
    refreshAble: {
      type: Boolean,
      default: false
    },
    // 折叠后的高度
    foldHeight: {
      type: [Number, String],
      default: '0'
    },
    foldBtnType: {
      type: String,
      default: 'circle'
    }
  },
  data() {
    return {
      isFold: false,
      inFoldHeight: 'auto'
    }
  },
  computed: {

  },
  methods: {
    handleFold() {
      this.isFold = !this.isFold
      if (this.isFold) {
        this.inFoldHeight = this.foldHeight + 'px'
      } else {
        this.inFoldHeight = 'auto'
      }
    },
    handleSearch() {
      this.$emit('search')
    }
  }
}
</script>
