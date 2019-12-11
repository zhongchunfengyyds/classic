<template>
  <div class="game">
    <div class="game-box">
      <div class="game-box-item"
           v-for="(item,index) in gameList"
           :key="index"
           :class="item == 0 ? '' : item == 1 ? 'red' : 'green'"
           @click="play(index)"></div>
    </div>
    <div class="again"
         @click="overPlay">重新开始</div>
  </div>
</template>

<script>
export default {
  name: "game",
  data () {
    return {
      gameList: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      status: 1,
      socket: ""
    };
  },
  methods: {
    overPlay () {
      this.send("0,0,0,0,0,0,0,0,0")
    },
    play (index) {
      if (this.gameList[index] != 0) {
        return;
      }
      console.log(this.gameList);
      // this.gameList[index] = this.status;
      this.$set(this.gameList, index, this.status);
      this.status == 1 ? (this.status = 2) : (this.status = 1);
      this.send(this.gameList)
    },
    websocketonmessage (event) {
      console.log("Message from server", event.data);
      this.gameList = event.data.split(',')
      let num = 0
      let num2 = 0
      this.gameList.map(item => {
        if (item == '1') {
          num++
        } else if (item == '2') {
          num2++
        }
      })
      if (num > num2) {
        this.status = 2
      } else if (num < num2) {
        this.status = 1
      } else {
        this.status = 1
      }
    },
    websocketonopen () {
      console.log("socket is open");
      this.send('start')
    },
    websocketonerror () {
      console.log("异常");
    },
    websocketonclose () { },
    send (message) {
      let msg = message.toString()
      this.socket.send(message);
    },
    closeSocket () {
      this.socket.close();
      console.log("socket 已关闭");
    }
  },
  destroyed () {
    this.closeSocket()
  },
  created () {
    this.socket = new WebSocket("ws://47.101.134.233:3001/game");
    //接收到消息的回调方法
    this.socket.onmessage = this.websocketonmessage;
    //连接成功建立的回调方法
    this.socket.onopen = this.websocketonopen;
    //连接发生错误的回调方法
    this.socket.onerror = this.websocketonerror;
    //连接关闭的回调方法
    this.socket.onclose = this.websocketonclose;
    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.addEventListener("beforeunload", e => this.closeSocket(e));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game {
  height: 100%;
  width: 100%;
  position: relative;
  .again {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 77%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: aliceblue;
    font-weight: 700;
    font-size: 28px;
    background: skyblue;
    border-radius: 50%;
  }
  .game-box {
    cursor: url("../assets/flower.png"), auto;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 33.3%;
      height: 33.3%;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
    }
    &-item:nth-of-type(3) {
      border-right: none;
    }
    &-item:nth-of-type(6) {
      border-right: none;
    }
    &-item:nth-of-type(9) {
      border-right: none;
      border-bottom: none;
    }
    &-item:nth-of-type(7) {
      border-bottom: none;
    }
    &-item:nth-of-type(8) {
      border-bottom: none;
    }
  }
}
.red {
  background: red;
}
.green {
  background: green;
}
</style>
