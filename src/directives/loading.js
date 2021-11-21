import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//获取el元素中的loadingImg元素
function getLoadingImg(el) {
  return el.querySelector("img[data-role=loading]");
}

//创建loadingImg元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading"; //给img元素添加自定义属性，用于判读这个特有的元素是否存在
  img.src = loadingUrl;
  img.className = styles.loading; //为img添加居中样式
  return img;
}

export default function(el, binding) {
  const curImg = getLoadingImg(el);
  if (binding.value) {
    // console.log("远程数据正在获取中，创建img元素");
    if (!curImg) {
      //注意：初始化的是否既存在bind时机又有update时机，所以要确认只触发一次，若已经有了img元素不再创建
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      //   console.log("远程数据获取成功，删除img元素");
      curImg.remove();
    }
  }
}
