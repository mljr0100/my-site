import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://img2.baidu.com/it/u=3319045030,1824020173&fm=26&fmt=auto",
      bigImg: "https://img2.baidu.com/it/u=3319045030,1824020173&fm=26&fmt=auto",
      title: "天劫面前",
      description: "所谓神龙与大能，也不过是一群蝼蚁吧",
    },
    {
      id: "2",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fr.bstatic.com%2Fimages%2Fhotel%2Fmax1024x768%2F175%2F17552265.jpg&refer=http%3A%2F%2Fr.bstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640101324&t=5bcf26be53e4911e8067d9989742f79f",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fr.bstatic.com%2Fimages%2Fhotel%2Fmax1024x768%2F175%2F17552265.jpg&refer=http%3A%2F%2Fr.bstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640101324&t=5bcf26be53e4911e8067d9989742f79f",
      title: "千头万绪",
      description: "摸不着头脑，未曾砰然，便已心动",
    },
    {
      id: "3",
      midImg: "https://img0.baidu.com/it/u=4250129360,3196677315&fm=26&fmt=auto",
      bigImg: "https://img0.baidu.com/it/u=4250129360,3196677315&fm=26&fmt=auto",
      title: "千丈深渊",
      description: "未及心上一捧桃花源",
    },
  ],
});
