<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: false,
          children: [
            { name: "b-1", isSelect: false },
            { name: "b-2", isSelect: false },
            {
              name: "b-3",
              isSelect: false,
              children: [
                { name: "b-3-1", isSelect: false },
                { name: "b-3-2", isSelect: false },
                { name: "b-3-3", isSelect: false },
              ],
            },
          ],
        },
        { name: "c", isSelect: false },
        { name: "d", isSelect: true },
        { name: "e", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log("在子组件中触发了点击事件，可以在这里做一些事情");
      console.log(item);
    },
  },
};
</script>
<style lang="less" scoped>
// @import "~@/styles/global.less";//想要该样式在子组件中生效，就不使用scoped预编译
</style>
