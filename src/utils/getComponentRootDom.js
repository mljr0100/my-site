import Vue from "vue";
/**
 * 得到某个组件的根元素
 * @param {*} comp 组件
 * @param {*} props 组件的属性
 * @returns 组件的根元素
 */
export default function(comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount(); //这是一个挂在行为，并不会真正的挂载到真实的dom元素中
  return vm.$el;
}
