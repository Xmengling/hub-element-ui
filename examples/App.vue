<template>
  <div id="app">
    <hub-avatar
      shape="square"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
    <hub-date-picker :start-time.sync="startTime"
                     :end-time.sync="endTime"
    />
  </div>
</template>

<script>
// import hubAvatar from '../docs/.vuepress/components/hub-avatar.vue'

export default {
  name: 'App',
  // components: { hubAvatar },
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  }
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
