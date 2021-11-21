<template>
  <ul class="contact-container">
    <li class="item" v-for="item in nums" :key="item.id">
      <a :href="item.pop ? item.pop : ''">
        <Icon :type="item.type" />
        <span>{{ item.account }}</span>
      </a>
      <div class="qr-code">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F08%2F20180708122124_qrylc.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638093486&t=5812219e77c14763eb458d7a631df282"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      nums: [
        {
          type: "github",
          account: "li-doing",
          id: 1,
        },
        {
          type: "mail",
          account: "mljr0100@163.com",
          pop: "mailto:mljr0100@163.com",
          id: 2,
        },
        {
          type: "qq",
          account: "3549443485",
          pop:
            "tencent://message/?Menu=yes&uin=3549443485&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
          id: 3,
        },
        {
          type: "weixin",
          account: "15901002437",
          id: 4,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: transparent;
  color: @gray;
  @itemHeight: 30px;
  .item {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    a {
      cursor: pointer;
      .icon-container {
        margin: 0 10px;
        vertical-align: middle;
        font-size: 26px;
      }
      span {
        font-size: 12px;
      }
    }
    .qr-code {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 10px 15px;
      border-radius: 6px;
      background-color: #fff;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        left: 50%;
        bottom: -7px;
        transform: rotate(45deg) translateX(-50%);
        background-color: #fff;
      }
    }
    &:hover {
      .qr-code {
        transform: scaleY(1);
      }
    }
  }
}
</style>
