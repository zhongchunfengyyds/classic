<template>
  <div class="home" ref="home">
    <div class="top"></div>
    <div class="home-content">
      <el-row class="tac home-content-nav">
        <el-col :span="12">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#eee"
            text-color="#000"
            active-text-color="blue"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="payOnline">在线支付</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <div class="home-content-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      menuList: [],
      activeName: ""
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    payOnline() {
      this.$router.push({ path: "/payOnline" });
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  overflow: hidden;
  &-content {
    width: 100%;
    min-width: 1200px;
    height: calc(100vh - 20vh);
    overflow: hidden;
    display: flex;
    &-nav {
      width: 240px;
      height: 100%;
      border-top: none;
      .el-col-12 {
        width: 100%;
        height: 100%;
        ul {
          height: 100%;
        }
      }
    }
    &-main {
      flex: 1;
      border: 1px solid #ccc;
      padding: 20px;
    }
  }
}
.top {
  height: 20vh;
  min-width: 1200px;
  background: url("../assets/header.png");
  background-size: 100% 100%;
}
</style>
