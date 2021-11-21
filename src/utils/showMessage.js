import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom";
import styles from "./showMessage.module.less";
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 * @param {Function} callback 弹出消息消失时运行的回调函数
 */
export default function(options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  //1. 创建消息元素，内容有图标icon和文本
  const div = document.createElement("div");
  //1-1. 得到图标组件的根元素（不导入图表组件了，麻烦）
  const iconDom = getComponentRootDom(Icon, { type });
  //1-2. 设置消息元素的内容
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><span>${content}</span>`;
  //2. 为消息元素添加样式
  div.className = `${styles.message} ${styles[`message-${type}`]}`;
  //3. 将消息元素添加到指定元素中，body元素不设置定位
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);
  //4. 让浏览器reflow重拍，强制渲染(实现弹出消息从下方浮现)
  div.clientHeight;
  div.style.transform = `translate(-50%,-50%)`;
  div.style.opacity = 1;
  //5. 弹出消息一段时间后消失
  setTimeout(() => {
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
    div.style.opacity = 0;
    div.addEventListener(
      "transitionend",
      function() {
        div.remove(); //移除消息体元素
        if (options.callback) {
          options.callback();
        } //若有回调函数。运行
      },
      { once: true }
    );
  }, duration);
}
