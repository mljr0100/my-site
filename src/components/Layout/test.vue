<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <template #default>
        <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      </template>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 1000px;
  height: 600px;
  border: 2px solid #008c8c;
  margin: 0 auto;
  .left,
  .right {
    width: 200px;
    height: 100%;
    background: #008c8a;
  }
  .main {
    width: 100%;
    height: 100%;
    background: hotpink;
  }
}
</style>
