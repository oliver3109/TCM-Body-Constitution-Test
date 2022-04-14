import vant from "vant";
import "vant/lib/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vant);
});
