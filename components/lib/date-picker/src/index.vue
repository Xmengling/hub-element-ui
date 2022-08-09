<!--
 * @Description: 日期组件
-->
<template>
  <div class="hub-date-picker">
    <!-- 时间选择器组件 -->
    <el-date-picker
      v-model="rangeTime"
      :picker-options="pickerOptions"
      :type="type"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :default-time="defaultTime"
      :value-format="valueFormat"
      v-bind="$attrs"
      :size="size"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import dayjs from '../../../plugin/dayjs.min.js'
export default {
  name: 'hub-date-picker',
  props: {
    // 起始时间
    startTime: {
      type: [String, Date],
      default: ''
    },
    // 结束时间
    endTime: {
      type: [String, Date],
      default: ''
    },
    // 禁止选择今天之前的日期
    banBefore: {
      type: Boolean,
      default: false
    },
    // 禁止选择今天之后的日期
    banAfter: {
      type: Boolean,
      default: false
    },
    // 类型
    type: {
      type: String,
      default: 'daterange'
    },
    // 格式化值
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd HH:mm'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {
      // 时间限制
      pickerOptions: '',
      // 默认时间
      defaultTime: [
        dayjs().set('hour', 0).set('minute', 0).set('second', 0).format(),
        dayjs().set('hour', 23).set('minute', 59).set('second', 59).format()
      ]
    }
  },
  computed: {
    rangeTime: {
      get() {
        // null | undefined 赋值为 ''
        return [this.startTime || '', this.endTime || '']
      },
      set(val) {
        this.$emit('update:startTime', val && val[0] || '')
        this.$emit('update:endTime', val && val[1] || '')
      }
    }
  },
  watch: {

  },
  created() {
    this.banTime()
  },
  methods: {
    banTime() {
      // 置灰今天之前的日期
      if (this.banBefore) {
        this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7 // 如果没有后面的-8.64e7就是不可以选择今天的
          }
        }
      }
      // 置灰今天之后的日期
      if (this.banAfter) {
        this.pickerOptions = {
          disabledDate(time) {
            return dayjs(time).isAfter(dayjs().endOf('day'))
          }
        }
      }
    }
  }
}
</script>
