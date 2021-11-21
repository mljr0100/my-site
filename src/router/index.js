import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history", //路由模式，决定了路由从哪里获取和更改访问路径
});

export default router;
