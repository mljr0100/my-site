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
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
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
