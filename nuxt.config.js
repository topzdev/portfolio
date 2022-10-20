import config from "./configs";

export default {
  ssr: true,
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: config.website.title,
    htmlAttrs: {
      lang: "en"
    },
    script: [
      {
        defer: true,
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
      },
      {
        defer: true,
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
        content: config.website.description

      },
      {
        name: "theme-color",
        content: config.website.themeColor
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
        content: config.website.ogTitle
      },
      {
        hid: "og:type",
        property: "og:type",
        content: config.website.type
      },
      {
        hid: "og:url",
        property: "og:url",
        content: config.website.url
      },
      {
        hid: "og:image",
        property: "og:image",
        content: config.website.coverPhoto
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          config.website.description
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: config.website.title
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: config.website.title
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: config.twittterUsername
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          config.website.description
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: config.website.coverPhoto
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: config.website.twittterUsername
      },
      {
        hid: "itemprop:name",
        itemprop: "name",
        content: config.website.title
      },
      {
        hid: "itemprop:name",
        itemprop: "description",
        content:
          config.website.description
      },

      {
        hid: "itemprop:image",
        itemprop: "image",
        content: config.website.logo
      }
    ],
    link: [
      {
        rel: "preconnect",
        href:
          "https://fonts.googleapis.com"
      },

      {
        rel: 'preconnect',
        href: "https://fonts.gstatic.com",
        crossorigin: true
      },

      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Poppins:wght@400;500;700&display=swap"
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
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/global-components",],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ["@nuxtjs/pwa", { icon: false }],
    "@nuxt/image",
    'nuxt-gsap-module'
  ],
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

  image: {
    screens: {
      'mobile-s': 320,
      'mobile-m': 375,
      'mobile-lg': 600,
      'tab-port': 768,
      'tab-land': 900,
      'laptop-s': 1000,
      "laptop": 1264,
      "desktop": 1940,
      "big-desktop": 3840
    },

    cloudinary: {
      baseURL: 'https://res.cloudinary.com/topzdev/image/upload/portfolio'
    },

    presets: {
      stack: {
        modifiers: {
          fit: 'cover'
        }
      },

      project_image: {
        modifiers: {
          format: "webp",
        }
      },

      project_logo: {
        modifiers: {
        }
      },

      testimony_profile: {
        modifiers: {

        }
      }
    }
  },

  gsap: {
    extraPlugins: {
      text: true
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
  axios: { baseURL: "https://topz.dev/" },
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
