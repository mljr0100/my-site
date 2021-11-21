<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <aside>
          <SiteAside />
        </aside>
      </template>
      <template #default>
        <div class="main">
          <RouterView />
        </div>
      </template>
    </Layout>
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  aside {
    width: 250px;
    height: 100%;
  }
  .main {
    width: 100%;
    height: 100%;
  }
}
</style>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>
