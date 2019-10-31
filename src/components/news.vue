<template>
  <div class="hello">
    <div class="content">
      <div
        class="content-detail"
        @dblclick="rmNews(item)"
        v-for="(item,index) in newsList"
        :key="index"
      >{{item.content}}</div>
    </div>
    <div class="footer">
      <el-input type="textarea" :rows="7" placeholder="发布新闻..." v-model="textarea"></el-input>
      <div class="submit-news">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      newsList: [],
      textarea: ''
    }
  },
  methods: {
    submit () {
      this.$axios.post('/news/uploadNews', {
        content: this.textarea
      }).then(res => {
        if (res.code === 0) {
          this.$message('发布成功');
          this.$axios.get('/news/getNews').then(res => {
            this.newsList = res.data
          })
        } else {
          this.$message.error(res.data);
        }
      })
    },
    rmNews (item) {
      this.$axios.post('/news/removeNews', {
        content: item.content
      }).then(res => {
        if (res.code === 0) {
          this.$message('删除成功');
          this.$axios.get('/news/getNews').then(res => {
            this.newsList = res.data
          })
        } else {
          this.$message.error(res.data);
        }
      })
    }
  },
  created () {
    this.$axios.get('/news/getNews').then(res => {
      this.newsList = res.data
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 3;
    .content-detail {
      position: relative;
      display: table-cell;
      height: 200px;
      width: 240px;
      padding: 0 20px;
      text-align: center;
      text-indent: 2em;
      vertical-align: middle;
    }
  }
  .footer {
    flex: 1;
    padding: 0 20px;
    background: #ccc;
    display: flex;
    align-items: center;
    .el-textarea {
      flex: 1;
    }
    .submit-news {
      width: 300px;
    }
  }
}
</style>
