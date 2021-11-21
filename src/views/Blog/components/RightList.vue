<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)"
        >{{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.aside }}
      </span>
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      // 规定属性值的样式[ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
      type: Array,
      default: () => [], //默认值是一个空数组，注意需要使用函数的方式返回
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  padding: 0;
  list-style: none;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    cursor: pointer;
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>
