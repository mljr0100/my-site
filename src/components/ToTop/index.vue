<template>
  <div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false, //表示这个组件是否出现，一开始是不出现的
    };
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false; //dom元素不存在不显示totop组件
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      //回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: @primary;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
}
</style>