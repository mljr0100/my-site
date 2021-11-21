<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 800px;
  height: 800px;
  border: 2px solid;
  position: relative;
  margin: 0 auto;
}
</style>
