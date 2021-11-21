<template>
  <nav class="menu-container">
    <RouterLink
      class="item"
      v-for="item in items"
      :key="item.id"
      :to="{name:item.name}"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <Icon :type="item.icon" />
      <span>{{ item.title }} </span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          icon: "home",
          title: "首页",
          exact: true,
          id: 1,
        },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false, //表示激活状态是否要精确匹配
          id: 2,
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true,
          id: 3,
        },
        {
          name: "Project",
          icon: "code",
          title: "项目&效果",
          exact: true,
          id: 4,
        },
        {
          name: "Message",
          icon: "chat",
          title: "留言板",
          exact: true,
          id: 5,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  background-color: transparent;
  padding: 24px 0;
  color: @gray;
  .item {
    display: block;
    @itemHeight: 45px;
    height: @itemHeight;
    line-height: @itemHeight;
    padding: 0 50px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &.selected {
      background-color: darken(@words, 3%);
    }
    .icon-container {
      margin: 0 10px;
    }
  }
}
</style>
