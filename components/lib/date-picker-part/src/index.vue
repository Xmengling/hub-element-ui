<!--
 * @Description: 日期组件
-->
<template>
  <div>
    <el-form
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item
        label="起始时间"
        prop="startTime"
      >
        <el-checkbox
          v-model="inCheckedStart"
          @change="selectstartTime"
        >即时</el-checkbox>
        <el-date-picker
          v-if="!inCheckedStart"
          v-model="inStartTime"
          value-format="yyyy-MM-dd HH:mm:ss"
          format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          style="margin-left: 8px"
          placeholder="请选择起始时间"
          default-time="12:00:00"
          :picker-options="pickerOptions0"
        />
      </el-form-item>
      <el-form-item
        label="结束时间"
        prop="endTime"
      >
        <el-checkbox
          v-model="inCheckedEnd"
          @change="selectendTime"
        >不限</el-checkbox>
        <el-date-picker
          v-if="!inCheckedEnd"
          v-model="inEndTime"
          value-format="yyyy-MM-dd HH:mm:ss"
          format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          style="margin-left: 8px"
          placeholder="请选择结束时间"
          default-time="12:00:00"
          :picker-options="pickerOptions1"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import dayjs from 'dayjs'
import dayjs from '../../../plugin/dayjs.min.js'

export default {
  name: 'hub-date-picker-part',
  props: {
    // 是否开启起始时间即时
    checkedStart: {
      type: Boolean,
      default: true
    },
    // 是否开启结束时间不限
    checkedEnd: {
      type: Boolean,
      default: true
    },
    // 起始时间
    startTime: {
      type: [String, Date],
      default: ''
    },
    // 结束时间
    endTime: {
      type: [String, Date],
      default: ''
    }
  },

  data() {
    return {
      // 时间限制
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7 // 如果没有后面的-8.64e7就是不可以选择今天的
        }
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7 // 如果没有后面的-8.64e7就是不可以选择今天的
        }
      },
      inCheckedStart: true,
      inCheckedEnd: true,
      inStartTime: '',
      inEndTime: ''
    }
  },

  watch: {
    'inStartTime'(val) {
      this.$emit('update:startTime', val)
      if (!this.inStartTime || !this.inEndTime) {
        return
      }
      if (!dayjs(val).isBefore(dayjs(this.inEndTime))) {
        this.$message({
          message: '会议结束时间不能早于开始时间',
          type: 'warning',
          duration: 3 * 1000
        })
      }
    },
    'inEndTime'(val) {
      this.$emit('update:endTime', val)
      if (!this.inStartTime || !this.inEndTime) {
        return
      }
      if (!dayjs(this.inStartTime).isBefore(val)) {
        this.$message({
          message: '会议结束时间不能早于开始时间',
          type: 'warning',
          duration: 3 * 1000
        })
      }
    }
  },
  created() {
    this.inCheckedStart = this.checkedStart
    this.inCheckedEnd = this.checkedEnd
  },
  methods: {
    // 选择起始时间即时
    selectstartTime(e) {
      if (e) {
        this.inStartTime = ''
      }
    },
    selectendTime(e) {
      if (e) {
        this.inEndTime = ''
      }
    }
  }
}
</script>
