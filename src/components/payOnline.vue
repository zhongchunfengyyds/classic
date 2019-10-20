<template>
  <div class="payOnline">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="微信付款" name="second">
        <el-button @click="request">请求</el-button>
        <form action="http://localhost:3000" method="post">
          账号：
          <input name="user" />
          密码：
          <input name="pass" />
          <input type="submit" value="提交" />
        </form>
      </el-tab-pane>
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
    request() {
      let time = new Date().getTime();
      this.$axios
        .post("/vip/login", {
          name: time
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleClick(e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
