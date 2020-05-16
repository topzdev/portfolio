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
        content:
          "UI/UX Designer, Fullstack Web developer from Manila, Philippines"
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
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#0993e5" },
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
  generate: {
    devtools: false, //true
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true
  },
  axios: { baseURL: "https://topzdev.netlify.app/" },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        loader: "file-loader"
      });
    }
  }
};
