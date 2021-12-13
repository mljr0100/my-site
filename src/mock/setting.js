import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img0.baidu.com/it/u=299724168,4142352804&fm=26&fmt=auto",
    siteTitle: "我的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "3263023350",
    qqQrCode:
      "https://img2.baidu.com/it/u=1644189841,2148745674&fm=26&fmt=auto",
    weixin: "yh777bao",
    weixinQrCode:
      "https://img1.baidu.com/it/u=2781813908,3931516948&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=833",
    mail: "duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "DuYi-Edu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
