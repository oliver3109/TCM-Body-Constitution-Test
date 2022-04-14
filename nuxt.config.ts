import { defineNuxtConfig } from "nuxt3";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/TCM-Body-Constitution-Test/",
        },
      }
    : {};

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  ...routerBase,
  app: {
    cdnURL:
      "https://cdn.jsdelivr.net/gh/OLIVERgZzy/TCM-Body-Constitution-Test@gh-pages/",
  },
  meta: {
    charset: "utf-8",
    viewport:
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    script: [
      {
        src: "/_nuxt/flexible.js",
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
