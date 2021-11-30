<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  props: {
    toc: { type: Array },
    //该属性来自于上级组件，要想传递的数据里面有isSelected属性，可以写一个计算属性tocWithSelect
  },
  data() {
    return {
      activeAnchor: "article-md-title-4",
    };
  },
  computed: {
    //根据toc属性和activeAnchor变量，得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 1em 0;
  }
}
</style>
