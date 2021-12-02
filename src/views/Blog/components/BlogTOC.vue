<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: { type: Array },
    //该属性来自于上级组件，要想传递的数据里面有isSelect属性，可以写一个计算属性tocWithSelect
  },
  data() {
    return {
      activeAnchor: "article-md-title-4", //表示目前激活的锚点，即目前选中的h1元素的id值
    };
  },
  created() {
    //做一个函数防抖，节约效率
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelect); //监听事件总线里面的mainScroll事件
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelect); //取消监听事件总线里面的mainScroll事件
  },
  computed: {
    //根据toc属性和activeAnchor变量，得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addTocDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length > 0) {
            addTocDoms(t.children);
          }
        }
      };
      addTocDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor数据为正确的值
    setSelect() {
      this.activeAnchor = ""; //由于后续要重新设置，所以先清空之前的状态
      const range = 200; //规定滚动条距离h元素的间隙
      for (const dom of this.doms) {
        //判断当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top; //得到元素距离视口顶部的距离
        if (top >= 0 && top <= range) {
          //在规定的距离内部，一定选中目录
          this.activeAnchor = dom.id;
        } else if (top > range) {
          //在规定的范围下方
          return;
        } else {
          //在规定的范围上方
          this.activeAnchor = dom.id; //先假设自己是激活的，然后继续看后面
        }
      }
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
