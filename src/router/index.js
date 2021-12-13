import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history", //路由模式，决定了路由从哪里获取和更改访问路径
});
//路由守卫：当路由跳转过去了之后，更改标题信息。因为已经过去了，所以没有next函数了
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;
