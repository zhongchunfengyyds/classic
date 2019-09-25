<template>
  <div class="payOnline">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="微信付款" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="支付宝付款" name="first">用户管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "payOnline",
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
