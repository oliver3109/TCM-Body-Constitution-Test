const IS_PRO = process.env.DEPLOY_ENV === "GH_PAGES";

const app = IS_PRO
  ? {
      baseURL: "/TCM-Body-Constitution-Test/",
      cdnURL:
        "https://cdn.jsdelivr.net/gh/chihyungchang/TCM-Body-Constitution-Test@gh-pages/",
    }
  : {};

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  router: {},
  app,
  meta: {
    title: "中医体质自测",
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/nuxt.png",
      },
    ],
    charset: "utf-8",
    viewport:
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    script: [
      {
        src: "https://cdn.jsdelivr.net/gh/chihyungchang/TCM-Body-Constitution-Test@gh-pages/_nuxt/flexible.js",
        type: "text/javascript",
      },
    ],
  },

  build: {
    transpile: ["vant", "echarts"],
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
