<template>
  <div class="hello">
    <div class="content infinite-list"
         v-infinite-scroll="load">
      <div v-if="showDetailNews"></div>
      <div class="infinite-list-item"
      style="margin-bottom:20px;"
           @dblclick="rmNews(item)"
           @click.right.prevent.stop="rightEvent(item)"
           @click="showNews(item)"
           v-for="(item,index) in newsList"
           :key="index"
           v-else>{{item.content}}</div>
    </div>
    <div class="footer">
      <el-input type="textarea"
                :rows="7"
                placeholder="发布新闻..."
                v-model="textarea"></el-input>
      <div class="submit-news">
        <el-button type="primary"
                   @click="changeNews"
                   v-if="changeId">修改</el-button>
        <el-button type="primary"
                   @click="giveUpChange"
                   v-if="changeId">取消</el-button>
        <el-button type="primary"
                   @click="submit"
                   v-else>提交</el-button>
      </div>
      <div>
        <p>双击删除新闻</p>
        <p>右击修改新闻</p>
        <p>单击查看新闻</p>
      </div>
    </div>
  </div>
</template>

<script>
let time;
export default {
  name: "HelloWorld",
  data () {
    return {
      showDetailNews: "",
      newsList: [],
      textarea: "",
      changeId: 0
    };
  },
  methods: {
    load () {
      console.warn('load')
    },
    submit () {
      this.$axios
        .post("/news/uploadNews", {
          content: this.textarea
        })
        .then(res => {
          if (res.code === 0) {
            this.$message("发布成功");
            this.getNews();
            this.textarea = "";
          } else {
            this.$message.error(res.data);
          }
        });
    },
    giveUpChange () {
      this.changeId = 0;
      this.textarea = "";
    },
    changeNews () {
      this.$axios
        .post("/news/changeNews", {
          id: this.changeId,
          content: this.textarea
        })
        .then(res => {
          if (res.code === 0) {
            this.$message("修改成功");
            this.getNews();
            this.textarea = "";
            this.changeId = 0;
          } else {
            this.$message.error("修改失败");
          }
        });
    },
    showNews () {
      //执行延时
      // timer = setTimeout(() => {
      //   this.$message("功能正在开发中");
      //   //do function在此处写单击事件要执行的代码
      // }, 1000);
    },
    rightEvent (item) {
      this.textarea = item.content;
      this.changeId = item._id;
    },
    rmNews (item) {
      // clearTimeout(timer);
      console.log(item);
      this.$axios
        .post("/news/removeNews", {
          content: item._id
        })
        .then(res => {
          if (res.code === 0) {
            this.$message("删除成功");
            this.getNews();
          } else {
            this.$message.error(res.data);
          }
        });
    },
    getNews () {
      this.$axios.get("/news/getNews").then(res => {
        this.newsList = res.data;
      });
    }
  },
  created () {
    this.getNews();
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
    overflow-x: auto;
    .content-detail {
      display: inline-block;
      max-width: 300px;
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
      padding-left: 20px;
    }
    p {
      color: rgb(13, 67, 245);
    }
  }
}
</style>
