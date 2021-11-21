<template>
  <div class="site-aside-container">
    <Avatar
      url="https://img1.baidu.com/it/u=1152393299,872058716&fm=26&fmt=auto"
    />
    <h1 class="title">Don't believe in deities</h1>
    <Menu />
    <Contact />
    <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  box-sizing: border-box;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .title {
    text-align: center;
    font-size: 1.2em;
    color: #fff;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
}
</style>
