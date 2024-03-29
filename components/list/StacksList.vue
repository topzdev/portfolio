<template>
  <div class="list--stack">
    <stack-list-item
      v-for="(item, idx) in stacksFormat"
      :stacks="item.stacks"
      :offset="item.offset"
      :key="idx"
      :class="setAnimClass(item.offset)"
    ></stack-list-item>
  </div>
</template>

<script>
import StackListItem from "@/components/list/StackListItem";
export default {
  components: { StackListItem },
  computed: {
    stacksFormat() {
      let formatted = [],
        i;
      for (i = 0; i < this.list.length; i += this.listToShow) {
        formatted.push({
          stacks: this.list.slice(i, i + this.listToShow),
        });
      }

      for (i = 0; i < formatted.length; i++) {
        formatted[i].offset = i % 2 != 0;
      }

      return formatted;
    },
  },

  data() {
    return {
      listToShow: 3,
      list: [
        {
          title: "VueJS",
          icon: {
            src: "/icons/icon_vue_jhkfs6",
            height: 68,
            width: 68,
          },
          link: "https://vuejs.org/",
        },
        {
          title: "NuxtJs",
          icon: {
            src: "/icons/icon_nuxt_mcbcyd",
            height: 68,
            width: 68,
          },
          link: "https://nuxt.com/",
        },
        {
          title: "React and React Native",
          icon: {
            src: "/icons/icon_react_xnelsh",
            height: 68,
            width: 68,
          },
          link: "https://react.dev/",
        },
        {
          title: "NextJs",
          icon: {
            src: "/icons/icon_nextjs_t8gyda",
            height: 68,
            width: 68,
          },
          link: "https://nextjs.org/",
        },
        {
          title: "Expo",
          icon: {
            src: "/icons/icon_expo_wspzok",
            height: 68,
            width: 68,
          },
          link: "https://expo.dev/",
        },

        {
          title: "Javascript",
          icon: {
            src: "/icons/icon_javascript_dfxxqk",
            height: 68,
            width: 68,
          },
          link: "",
        },
        {
          title: "Typescript",
          icon: {
            src: "/icons/icon_typescript_fld2yp",
            height: 68,
            width: 68,
          },
          link: "https://www.typescriptlang.org/",
        },
        {
          title: "JQuery",
          icon: {
            src: "/icons/icon_jquery_rp7qwu",
            height: 68,
            width: 68,
          },
          link: "https://jquery.com/",
        },
        {
          title: "PostgreSQL",
          icon: {
            src: "/icons/icon_postgresql_yg7kxl",
            height: 68,
            width: 68,
          },
          link: "https://www.postgresql.org/",
        },
        {
          title: "NodeJS",
          icon: {
            src: "/icons/icon_nodejs_rii0or",
            height: 68,
            width: 68,
          },
          link: "https://nodejs.org/en",
        },
        {
          title: "PHP",
          icon: {
            src: "/icons/icon_php_xouhs3",
            height: 68,
            width: 68,
          },
          link: "https://www.php.net/",
        },
        {
          title: "Laravel",
          icon: {
            src: "/icons/icon_laravel_xtmrqn",
            height: 68,
            width: 68,
          },
          link: "https://laravel.com/",
        },

        {
          title: "Figma",
          icon: {
            src: "/icons/icon_figma_qijjss",
            height: 68,
            width: 45,
          },
          link: "https://www.figma.com/",
        },
        {
          title: "HTML",
          icon: {
            src: "/icons/icon_html_iatcnq",
            height: 68,
            width: 68,
          },
          link: "",
        },
        {
          title: "CSS",
          icon: {
            src: "/icons/icon_css_pnlbyb",
            height: 68,
            width: 68,
          },
          link: "",
        },

        {
          title: "SCSS",
          icon: {
            src: "/icons/icon_sass_pbvayy",
            height: 68,
            width: 68,
          },
          link: "https://sass-lang.com/",
        },

        {
          title: "TailwindCSS",
          icon: {
            src: "/icons/icon_tailwind-css_iw8ufr",
            height: 68,
            width: 68,
          },
          link: "https://tailwindcss.com/",
        },

        {
          title: "Vuetify",
          icon: {
            src: "/icons/icon_vuetify_nkvejh",
            height: 59,
            width: 68,
          },
          link: "https://vuetifyjs.com/",
        },
        {
          title: "MUI",
          icon: {
            src: "/icons/icon_mui_nsfsz2",
            height: 68,
            width: 68,
          },
          link: "https://mui.com/",
        },
        {
          title: "Bootstrap",
          icon: {
            src: "/icons/icon_bootstrap_truxzr",
            height: 68,
            width: 68,
          },
          link: "https://getbootstrap.com/",
        },
      ],
    };
  },

  methods: {
    setAnimClass: function (offset) {
      return offset ? "stack-offset-anim" : "stack-anim";
    },
    rowPerWidth: function (e) {
      let width = 0;
      if (!e.target) width = e.clientWidth;
      else width = e.target.innerWidth;

      if (width > 900 && width <= 1125) {
        this.listToShow = 3;
      } else if (width > 768 && width <= 900) {
        this.listToShow = 5;
      } else if (width > 600 && width <= 768) {
        this.listToShow = 5;
      } else if (width <= 600) {
        this.listToShow = 5;
      } else this.listToShow = 3;
    },
  },

  created() {
    this.rowPerWidth(document.documentElement);
    window.addEventListener("resize", this.rowPerWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.rowPerWidth);
  },

  mounted() {
    const gsap = this.$gsap;
    let controller = new ScrollMagic.Controller();
    let timeline = gsap.timeline();

    timeline
      .to(".stack-anim", {
        duration: 2,
        stagger: 0.3,
        y: -400,
        ease: "slow(0.7, 0.7, false)",
      })
      .to(
        ".stack-offset-anim",
        { duration: 2, stagger: 0.3, y: 128, ease: "slow(0.7, 0.7, false)" },
        "-=2.2"
      )
      .to(".card--stack-blank", { autoAlpha: 0.5, duration: 0.5 });

    let scene = new ScrollMagic.Scene({
      triggerElement: "#stacks",
      triggerHook: 1,
      offset: 300,
    })
      .setTween(timeline)
      .addTo(controller);
  },
};
</script>
