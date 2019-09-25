<template>
  <div class="home" ref="home">
    <div class="top"></div>
    <div class="home-content">
      <div class="home-content-nav"></div>
      <div class="home-content-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      menuList: []
    }
  },
  created () {
    console.log(this)
    let i = 10
    while (i--) {
      setInterval(() => {
          
      })
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  overflow: hidden;
  &-content {
    width: 100%;
    min-width: 1200px;
    height: calc(100vh - 15vh);
    overflow: hidden;
    display: flex;
    &-nav {
      width: 240px;
      height: 100%;
      background: #333;
      border-top: none;
    }
    &-main {
      flex: 1;
      background: #1e1e1e;
    }
  }
}
.top {
  height: 15vh;
  min-width: 1200px;
  background: #3c3c3c;
}
</style>
