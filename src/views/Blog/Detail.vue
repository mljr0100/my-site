<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";
import BlogTOC from "./components/BlogTOC";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer); //往事件总线里面注册事件并且传递参数
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
}
</style>
