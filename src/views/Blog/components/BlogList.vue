<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
            ><!--点击超链接会跳转到文章的详情页-->
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager"; //分页组件
import fetchData from "@/mixins/fetchData.js"; //导入需要混合的代码（获取远程数据）
import { getBlogs } from "@/api/blog.js"; //导入远程获取数据的方法
import { formatDate } from "@/utils";
export default {
  components: {
    Pager,
  },
  mixins: [fetchData({})],
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      // 跳转到当前的分类id、当前的页容量、newPage的页码
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        //当前没有分类，在代码中跳转页面
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  computed: {
    routeInfo() {
      //获取路由和地址栏信息
      const categoryId = +this.$route.params.categoryId || -1; //分类id，默认值为-1表示全部
      const page = +this.$route.query.page || 1; //当前页码
      const limit = +this.$route.query.limit || 10; //页容量
      return {
        page,
        limit,
        categoryId,
      };
    },
  },
  watch: {
    async $route() {
      //若路由地址栏信息变化，重新获取远程数据
      this.isLoading = true;
      //将滚动条高度设置为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.blog-list-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  line-height: 1.7;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ul {
    // list-style: none;
    // margin: 0;
    // padding: 0;//main.js里面有全局样式
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        flex: 0 0 flex;
        margin-right: 15px;
        img {
          display: block;
          max-width: 200px;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
        .aside {
          font-size: 12px;
          color: @gray;
          span {
            margin-right: 15px;
          }
        }
        .desc {
          margin: 15px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
