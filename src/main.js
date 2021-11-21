import "./mock/index"; //运行一遍模拟的数据Mock
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less"; //全局样式
import router from "@/router";
import { showMessage } from "./utils/index";
Vue.prototype.$showMessage = showMessage;
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
