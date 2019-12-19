<template>
  <div class="tongji">
    <div class="echatjs-box">
      <!-- <echatjs :option="option" /> -->
      <echatjs />
    </div>
  </div>
</template>

<script>
import echatjs from './echatjs'
export default {
  name: "HelloWorld",
  components: {
    echatjs
  },
  data () {
    return {
      option: {}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tongji {
  height: 100%;
  width: 100%;
  position: relative;
  .echatjs-box {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
