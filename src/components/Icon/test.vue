<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t" />
      <label>{{ t }} </label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 600px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px auto;
  .item {
    margin: 1em;
    text-align: center;
  }
  .icon-container {
    display: block;
  }
}
</style>
