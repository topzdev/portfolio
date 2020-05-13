export default {
  mode: "spa",
  /*
   ** Headers of the page
   */

  head: {
    title: "Christopher Lugod",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Poppins:wght@300;400;500;700;900&display=swap"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      { src: "https://smtpjs.com/v3/smtp.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/materialize-grid.css",
    "~/assets/scss/main.scss",
    "~/assets/icon/icon-font/css/fontello.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/global-components"],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "vue-scrollto/nuxt"],
  /*
   ** Build configuration
   */

  axios: { proxyHeaders: false },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
