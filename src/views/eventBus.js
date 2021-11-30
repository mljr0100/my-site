// const listeners = {}; //空对象，因为一开始不知道哪些对象需要监听

// //事件总线
// export default {
//   //监听某一个事件
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set(); //初始化一个空的集合
//     }
//     listeners[eventName].add(handler);
//   },
//   //取消监听
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   //触发事件，传递进来一些数据
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };

import Vue from "vue";
export default new Vue({});
////组件实例里面本身就有$on监听事件、$off取消事件监听、$emit触发事件
