<template>
  <div class="image-loader-container">
    <!--先是占位图片（尺寸小），再是原图（尺寸大）-->
    <img
      v-if="!everythingLoaded"
      class="placeholder"
      :src="placeholder"
      alt=""
    />
    <img
      class="origin"
      :src="src"
      alt=""
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      @load="handleLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    }, //原始图片的路径（尺寸很大的那个）
    placeholder: {
      type: String,
      required: true,
    }, //原始图片加载完成前的占位图片
    duration: {
      type: Number,
      default: 500,
    }, //原始图片加载完成后，切换到原始图片经过的毫秒数
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完毕
      everythingLoaded: false, //所有事情加载完毕
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    }, //原图的opacity样式值
  },
  methods: {
    handleLoad() {
      // console.log("原图加载完毕");
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingLoaded = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
    &.placeholder {
      filter: blur(2vw);
    }
  }
}
</style>
