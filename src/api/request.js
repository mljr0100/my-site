//放置请求的远程数据，使用axios工具库
import axios from "axios";
import showMessage from "../utils/showMessage";
const ins = axios.create(); //创建一个axios实例对象，和axios功能一样
ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return resp.data.data;
}); //配置axios响应体的拦截器

export default ins;
