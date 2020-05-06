export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Christopher Lugod/Porfolio",
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
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@200,300;400;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,800&display=swap"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
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
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
