export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: ["nuxt-i18n"],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: ["~/plugins/i18n.js"],

  /*______i18n_____*/
  i18n: {
    strategy: "prefix_except_default",
    locales: [
      {
        code: "de",
        file: "de-DE.js",
        name: "Deutsch"
      },
      {
        code: "en",
        file: "en-US.js",
        name: "English"
      }
    ],
    defaultLocale: "de",
    lazy: true,
    langDir: "lang/",
    vueI18nLoader: false
  }
};
