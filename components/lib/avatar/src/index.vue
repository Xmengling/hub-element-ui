<template>
  <div class="hub-avatar">
    <div v-show="!src" ref="default" class="hub-avatar-image" :style="shape === 'circle' ? {'border-radius': '50%'} : {'border-radius': '5%'}" >
      <i v-if="icon" :class="icon" :style="{'font-size': size + 'px'}"></i>
    </div>
    <img
      v-show="src"
      ref="image"
      class="hub-avatar-image"
      :style="shape === 'circle' ? {'border-radius': '50%'} : {'border-radius': '5%'}"
      :src="src"
    >
  </div>
</template>

<script>
// 头像组件
export default {
  name: 'hub-avatar',
  props: {
    // 图片地址
    src: {
      type: String,
      default: ''
    },
    // 设置大小
    size: {
      type: String,
      default: '100'
    },
    // 设置形状
    shape: {
      type: String,
      default: 'circle'
    },
    // 设置默认背景
    icon: {
      type: String,
      default: 'circle'
    }
  },
    data() {
    return {
    }
  },
  mounted() {
    this.setStyle()
  },
  methods: {
    setStyle() {
      this.$refs.image.style.width = this.size + 'px'
      this.$refs.image.style.height = this.size + 'px'
      this.$refs.default.style.width = this.size + 'px'
      this.$refs.default.style.height = this.size + 'px'
    }
  }
}
</script>