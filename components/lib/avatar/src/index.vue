<template>
  <div class="hub-avatar">
    <!-- 默认图 -->
    <div
      v-show="!src"
      ref="default"
      class="hub-avatar-image"
      :style="shape === 'circle' ? circleStyle : squareStyle"
    >
      <div v-if="!icon"><Default /></div>
      <i
        v-if="icon"
        :class="icon"
        :style="{'font-size': size + 'px'}"
      />
    </div>
    <!-- src -->
    <el-image
      v-show="src"
      ref="image"
      class="hub-avatar-image"
      :style="shape === 'circle' ? circleStyle : squareStyle"
      :src="src"
    />
  </div>
</template>

<script>
import Default from './components/DefaultAvatar.vue'
// 头像组件
export default {
  name: 'hub-avatar',
  components: { Default },
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
      default: ''
    }
  },
  data() {
    return {
      sizeStyle: {
        'height': this.size + 'px',
        'width': this.size + 'px'
      },
      circleStyle: {
        'border-radius': '50%'
      },
      squareStyle: {
        'border-radius': '5%'
      }
    }
  },
  created() {
    this.setStyle()
  },
  mounted() {
  },
  methods: {
    setStyle() {
      this.circleStyle = Object.assign(this.circleStyle, this.sizeStyle)
      this.squareStyle = Object.assign(this.squareStyle, this.sizeStyle)
    }
  }
}
</script>
