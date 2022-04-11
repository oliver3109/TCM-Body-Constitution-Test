import * as echarts from "echarts"; // echarts 按需引入

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$echarts = echarts;
});
