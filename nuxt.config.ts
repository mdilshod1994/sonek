import vueCssModule from "vite-plugin-vue-css-module"

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  app: {
    head: {
      script: [
        {
          src: "/TweenMax.1.20.3.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts"],
  vite: {
    plugins: [
      vueCssModule({
        attrName: "cls",
      }),
    ],
  },
  postcss: {
    plugins: {
      // предотвращает проблему с загрузкой шрифтов (с пробелами в имени) в прод-сборке
      cssnano: {
        preset: [
          "default",
          {
            normalizeUrl: false,
          },
        ],
      },
    },
  },
  css: ["normalize.css/normalize.css"],
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 700],
      },
    },
  },
  features: {
    inlineStyles: false,
  },
})
