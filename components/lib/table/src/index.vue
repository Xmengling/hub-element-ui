<!--
 * @Description: table组件
-->
<template>
  <div class="hub-table">
    <el-table
      ref="hubTable"
      v-loading="loading"
      :data="data"
      border
      :class="{
        single: singleSelect,
      }"
      v-bind="$attrs"
      v-on="$listeners"
      @selection-change="handleSelectionChange"
      @select="handleSelect"
    >
      <el-table-column
        v-if="selectable"
        type="selection"
        width="55"
      />
      <el-table-column
        v-if="indexable"
        label="序号"
        type="index"
        width="55"
      />
      <template v-for="(itemCfg, indexCfg) in config">
        <!-- 插槽 -->
        <slot
          v-if="itemCfg.slot"
          :name="itemCfg.slot"
        />
        <el-table-column
          v-else
          :key="indexCfg"
          :label="itemCfg.label"
          :prop="itemCfg.prop"
          :class-name="itemCfg.className"
          :style="itemCfg.style"
          :fixed="itemCfg.fixed"
          :min-width="itemCfg.width"
          v-bind="itemCfg.attrs"
        >
          <template slot-scope="scoped">
            <!-- 多行文本 -->
            <template v-if="itemCfg.multiText">
              <div
                v-for="(itemMulti, indexMulti) in itemCfg.multiText"
                :key="indexMulti"
              >
                <span class="hub-table-multi-label">{{ itemMulti.label }}:</span>
                <span>{{ getCellText(itemMulti, scoped.row) }}</span>
              </div>
            </template>
            <!-- 动态单元格 -->
            <div v-else-if="itemCfg.getText">{{ getCellText(itemCfg, scoped.row) }}</div>
            <!-- 普通单元格 -->
            <div v-else>{{ getCellText(itemCfg, scoped.row) }}</div>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 多选统计 -->
    <div
      v-if="selectable && !singleSelect"
      class="hub-table-select-counter"
    >
      <el-checkbox
        v-model="isCheckAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAll"
      />
      <span class="hub-table-select-counter-label">已选择</span>
      <span class="hub-table-select-counter-label">{{ selectedCount }}</span>
      <span class="hub-table-select-counter-label">项</span>
    </div>
  </div>
</template>

<script>
// table组件
export default {
  name: 'hub-table',
  props: {
    // 数据
    data: {
      type: Array,
      default: () => []
    },
    // 列配置
    config: {
      type: Array,
      default: () => []
    },
    // 是否展示行号
    indexable: {
      type: Boolean,
      default: false
    },
    // 是否支持多选
    selectable: {
      type: Boolean,
      default: false
    },
    // 是否支持单选
    singleSelect: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCheckAll: false,
      selectedCount: 0
    }
  },
  computed: {
    // 选择中间态
    isIndeterminate() {
      return this.selectedCount > 0 && !this.isCheckAll
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 选择修改
    handleSelectionChange(selection) {
      if (this.singleSelect) return // 单选跳过
      this.selectedCount = selection.length
      this.isCheckAll = selection.length === this.data.length
      this.dispatchSelect(selection)
    },
    // 选择事件
    handleSelect(selection, row) {
      if (!this.singleSelect) return // 多选跳过
      const old = selection.length > 1 ? selection.shift() : null
      if (old) {
        this.$refs.hubTable.toggleRowSelection(old, false)
      }
      this.dispatchSelect(selection)
    },
    // 全选切换
    handleCheckAll() {
      this.$refs.hubTable.toggleAllSelection()
    },
    // 选中同步父组件
    dispatchSelect(selectList) {
      this.$emit('select-list', selectList)
    },
    // 获取单元格文本
    getCellText(itemCfg, row) {
      // 函数
      if (Object.prototype.toString.call(itemCfg.getText) === '[object Function]') {
        return itemCfg.getText(row[itemCfg.prop])
      }
      // 对象
      if (Object.prototype.toString.call(itemCfg.getText) === '[object Object]') {
        return itemCfg.getText[row[itemCfg.prop]]
      }
      return row[itemCfg.prop]
    }
  }
}
</script>
