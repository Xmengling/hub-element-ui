<template>
  <div id="app">
    <m-card
      imgSrc="https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7BsxHacDI0mc9oPTkQTs2FaxcWY0gdulmFWML6BoheKQhibTXIgdOhgK9Y/0"
      summary="我是卡片组件" 
    />
    <hub-avatar width="100" height="100" url="https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7BsxHacDI0mc9oPTkQTs2FaxcWY0gdulmFWML6BoheKQhibTXIgdOhgK9Y/0" />
  </div>
</template>

<script>
import hubAvatar from '../docs/.vuepress/components/hub-avatar.vue'

export default {
  components: { hubAvatar },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
