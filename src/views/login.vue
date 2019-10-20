<template>
  <div class="login" @keyup.enter="login">
    <div class="login-box">
      <span>登陆</span>
      <div class="flex-row">
        <el-input v-model="user" class="user-name" placeholder="请输入用户名"></el-input>
      </div>
      <div class="flex-row">
        <el-input placeholder="请输入密码" v-model="password" class="user-name" show-password></el-input>
      </div>
      <el-button type="success" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
/* eslint-disable */
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      this.$axios
        .get("/login", { user: this.user, password: this.password })
        .then(res => {
          console.log(res.data);
          if (res.data == 0) {
            this.$rouer.push({ name: "home" });
          } else {
            this.$alert(res.msg, "登陆失败", {
              confirmButtonText: "确定"
            });
          }
        });
    }
  }
};
</script>

<style lang='scss'>
.login {
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  height: 400px;
  width: 400px;
  padding: 50px;
  border: 2px solid orange;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  .flex-row {
    display: flex;
    justify-content: space-around;
    .item {
      cursor: pointer;
    }
    .item:hover {
      color: #6c6;
    }
    .user-password,
    .user-name {
      flex: 1;
      height: 30px;
      border: none;
    }
  }
}
</style>
