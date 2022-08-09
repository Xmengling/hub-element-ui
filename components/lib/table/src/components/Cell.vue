<!--
 * @Description: table-cell单元格组件
-->
<template>
  <div class="hub-table-cell">
    <div>{{ getCellText(config) }}</div>
  </div>
</template>

<script>
export default {
  name: 'hub-table-cell',
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
    }
  },
  data() {
    return {

    }
  },

  created() {
  },
  mounted() {
  },
  methods: {
    getCellText(config) {
      return this.data[config.prop]
    }
  }
}
</script>
