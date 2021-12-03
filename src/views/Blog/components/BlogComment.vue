<template>
  <div class="blog-comment-container">
    <MessageArea
      title="列表标题"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1, //当前页码
      limit: 10, //页容量
    };
  },
  computed: {
    hasMore() {
      return this.data.total > this.data.rows.length;
    }, //判断评论列表还有没有更多的数据
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return; //若目前正在加载更多，不重复请求多次数据，直接返回
      }
      const range = 100; //定义一个可以接受的范围，在这个范围内都算是到了底部
      const dec = Math.abs(dom.scrollHeight - dom.clientHeight - dom.scrollTop);
      if (dec <= range) {
        //在这个范围内布均加载下一页
        this.fetchMore();
      }
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if (!this.hasMore) {
        return; //评论列表里面没有更多的数据了
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      //在评论区域中添加文本框的内容
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); //通过回调函数告诉子孙组件，我处理完了，你继续
    },
  },
};
</script>

<style>
.blog-comment-container {
  margin: 30px 0;
}
</style>
