<template>
  <div class="test-container">
    <h1>Avatar组件测试效果</h1>
    <Avatar
      url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F24%2F20180624220925_SMeYV.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637827819&t=b8635dfd04e2249223dd63952595f726"
      :size="150"
    />
    <Avatar
      url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F13%2F20181113220713_4aU2U.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637827819&t=1f0526a54ffb71e5b5ce52ed8fce8a61"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="less" scoped></style>
