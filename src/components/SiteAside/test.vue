<template>
  <aside class="test-container">
    <SiteAside />
  </aside>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.test-container {
  width: 250px;
  height: 600px;
  background-color: @dark;
  margin: 0 auto;
}
</style>
