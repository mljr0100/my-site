<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0, //标题文字宽度
      descWidth: 0, //描述文字宽度
      containerSize: null, //外层容器的尺寸
      imageSize: null, //里层图片的尺寸
      mouseX: 0, //鼠标的横坐标
      mouseY: 0, //鼠标的纵坐标
    };
  },
  computed: {
    //根据鼠标位置偏移图片
    imagePosition() {
      if (!this.containerSize || !this.imageSize) {
        return;
      }
      const extraWidth = this.imageSize.width - this.containerSize.width; //多出的图片宽度
      const extraHeight = this.imageSize.height - this.containerSize.height; //多出的图片高度
      const left = -(extraWidth / this.containerSize.width) * this.mouseX;
      const top = -(extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    //鼠标的中心点坐标
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  }, //挂载完成后，将data里面的数据全部更新
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    //调用该方法，显示文字
    showWords() {
      this.$refs.title.style.width = 0;
      this.$refs.desc.style.width = 0;
      this.$refs.title.clientWidth; //reflow，强制渲染
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    }, //实现文字的0-->auto
    //调用该方法，更新容器和图片的宽高尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.imageSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    //计算鼠标到边框的距离，即鼠标的横纵坐标
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .carousel-img {
    width: 110%;
    height: 110%;
    transition: 0.3s;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
    transition: all 2s;
  }
  .desc {
    top: calc(50% + 10px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
    transition: all 2s 1s;
  }
}
</style>
