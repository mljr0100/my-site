<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.test-container {
  width: 400px;
  height: 400px;
  padding-top: 200px;
  margin: 0 auto;
  background-color: @dark;
}
</style>
