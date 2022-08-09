<!--
 * @Description: 获取验证码组件
-->
<template>
  <span class="hub-get-verify-code-wrap">
    <span
      v-show="!countTime"
      class="hub-verify-code-btn"
      :class="{'hub-disable': disabled, 'hub-enabled': !disabled}"
      :style="{'height':height+'px','width':width+'px','line-height':height+'px'}"
      @click="startCountTime"
    >获取验证码</span>
    <span
      v-show="countTime"
      class="hub-count-time"
    >{{ countTime }}S</span>
  </span>
</template>

<script>
export default {
  name: 'hub-get-code',
  props: {
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 倒计时
    time: {
      type: [String, Number],
      default: 60
    },
    // 高度
    height: {
      type: [String, Number],
      default: 30
    },
    width: {
      type: [String, Number],
      default: 100
    }
  },
  data() {
    return {
      countTime: 0
    }
  },
  methods: {
    startCountTime() {
      if (this.disabled) return
      this.getVerifyCode()
      this.countTime = this.time
      const timer = setInterval(() => {
        this.countTime -= 1
        if (this.countTime === 0) {
          clearInterval(timer)
        }
      }, 1000)
    },
    getVerifyCode() {
      this.$emit('get-code')
    }
  }
}
</script>
