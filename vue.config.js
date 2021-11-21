//vue-cli的配置文件
const webpack = require("webpack");
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    }, //开发服务器设置代理，解决跨域问题
  },
  publicPath: "/",
};
