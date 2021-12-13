import "./mock"; //运行一遍模拟的数据Mock
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less"; //全局样式
import router from "@/router";
import store from "./store";
store.dispatch("setting/fetchSetting");
import { showMessage } from "./utils/index";
import "./eventBus"; //导入事件总线
Vue.prototype.$showMessage = showMessage;

//注册全局自定义指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
