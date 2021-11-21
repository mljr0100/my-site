<template>
  <!-- 只有总页数大于1时才显示 -->
  <div v-if="pageNumber > 1" class="pager-container">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
//组件的书写顺序，根据数据写样式
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    }, //当前页码
    total: {
      type: Number,
      default: 0,
    }, //总数据量
    limit: {
      type: Number,
      default: 10,
    }, //单页容量
    visibleNumber: {
      type: Number,
      default: 10,
    }, //可见页码数
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    }, //分页的总页数
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    }, //页码数组的最小值
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    }, //页码数组的最大值
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    }, //页码数组
  },
  methods: {
    handleClick(newPage) {
      if (newPage === this.current) {
        return;
      }
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      this.$emit("pageChange", newPage); //抛出一个事件，参数为事件名称、事件参数
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  white-space: nowrap;
  a {
    color: @primary;
    padding: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      cursor: text;
      font-weight: bold;
    }
  }
}
</style>
