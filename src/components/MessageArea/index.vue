<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    }, //列表标题
    subTitle: {
      type: String,
      default: "",
    }, //列表副标题
    list: {
      type: Array,
      default: () => [],
    }, //列表数据
    isListLoading: {
      type: Boolean,
      default: false,
    }, //列表是否正在加载中
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
