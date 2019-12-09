<template>
  <div class="payOnline">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="练习"
                   name="second">
        <el-upload class="upload-demo"
                   drag
                   action="http://127.0.0.1:3000/upload/image"
                   multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip"
               slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-tab-pane>
      <el-tab-pane label="嘿嘿"
                   name="first">用户管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "payOnline",
  data () {
    return {
      activeName: ""
    };
  },
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
