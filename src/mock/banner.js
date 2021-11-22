import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.iqiyipic.com%2Fimage%2F20190306%2F1a%2F95%2Fv_126353506_m_601_m1_160_90.jpg&refer=http%3A%2F%2Fpic4.iqiyipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640136349&t=3e6cb9ee8ea37eeb1208e1ecf05042fd",
      bigImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F191002130K234M-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640136970&t=8118834ee23eb770131c3d7b955ce9d3",
      title: "天劫面前",
      description: "所谓神龙与大能，也不过是一群蝼蚁吧",
    },
    {
      id: "2",
      midImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.ykimg.com%2F05420101615FAEB4052D3F9C3D3EE257&refer=http%3A%2F%2Fm.ykimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640136272&t=36beb87955f89ede68fa9d9ed084afed",
      bigImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1211%2F28%2Fc10%2F16177433_16177433_1354105182595.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640136970&t=8f8e1abb02941992f1b9ee6100fd008d",
      title: "千头万绪",
      description: "摸不着头脑，未曾砰然，便已心动",
    },
    {
      id: "3",
      midImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic9.iqiyipic.com%2Fimage%2F20190107%2F51%2F1b%2Fv_123632584_m_601_160_90.jpg&refer=http%3A%2F%2Fpic9.iqiyipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640136349&t=8b188c839e4e6ddde1fe83c5aa5c5a48",
      bigImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1113%2F051R0115229%2F20051Q15229-11-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640136970&t=2b35e8ff944b259dbac6c6f19b55de18",
      title: "千丈深渊",
      description: "未及心上一捧桃花源",
    },
  ],
});
