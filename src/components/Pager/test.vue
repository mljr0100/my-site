<template>
  <div class="test-container">
    <h1>Pager组件测试效果</h1>
    <Pager
      :total="total"
      :current="current"
      :visibleNumber="visibleNumber"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 3,
      total: 97,
      visibleNumber: 6,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style lang="less" scoped></style>
