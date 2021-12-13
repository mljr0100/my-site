//首页标语数据

import { getBanners } from "@/api/banner";

export default {
  namespaced: true, //开启命名空间模块
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchBanner(ctx) {
      if (ctx.state.data.length) {
        //判断一下，如果当前state里面data的数据是有值的，就不需要再拿数据了
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
