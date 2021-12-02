import Vue from "vue";
Vue.prototype.$bus = new Vue({})
//组件实例里面本身就有$on监听事件、$off取消事件监听、$emit触发事件

/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 */