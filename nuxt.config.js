export default {
  mode: "spa",
  /*
   ** Headers of the page
   */

  head: {
    title: "Christopher Lugod",
    htmlAttrs: {
      lang: "en"
    },
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "msapplication-TileColor", content: "#2d89ef" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "UI/UX Designer, Fullstack Web developer from Manila, Philippines"
      },
      {
        name: "theme-color",
        content: "#0993e5"
      },
      {
        hid: "apple-mobile-web-app-capable",
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        hid: "mobile-web-app-capable",
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: `Christoher Lugod | Portfolio`
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "portfolio"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://topzdev.netlify.app/"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/seo-cover.jpg"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "UI/UX Designer, Fullstack Web developer from Manila, Philippines"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Christoher Lugod | Portfolio"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: `Christoher Lugod | Portfolio`
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@_christop_"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "UI/UX Designer, Fullstack Web developer from Manila, Philippines"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/seo-cover.jpg"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@_christop_"
      },
      {
        hid: "itemprop:name",
        itemprop: "name",
        content: `Christoher Lugod | Portfolio`
      },
      {
        hid: "itemprop:name",
        itemprop: "description",
        content:
          "UI/UX Designer, Fullstack Web developer from Manila, Philippines"
      },

      {
        hid: "itemprop:image",
        itemprop: "image",
        content: "/topzdev-logo.svg"
      }
    ],
    link: [
      {
        rel: "preload",
        type: "font/woff2",
        href: "~/assets/icon/icon-font/font/fontello.woff2"
      },
      {
        rel: "preload",
        type: "font/woff",
        href: "~/assets/icon/icon-font/font/fontello.woff"
      },
      {
        rel: "preload",
        type: "font/tff",
        href: "~/assets/icon/icon-font/font/fontello.ttf"
      },
      {
        href: "~/assets/icon/icon-font/font/fontello.svg"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Poppins:wght@400;500;700&display=swap"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
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
  buildModules: [["@nuxtjs/pwa", { icon: false }]],
  /*
   ** Nuxt.js modules
   */
  modules: ["vue-scrollto/nuxt"],
  /*
   ** Build configuration
   */

  pwa: {
    manifest: {
      start_url: "/"
    }
  },

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
