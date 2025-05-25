<template>
  <div class="list--stack">
    <stack-list-item v-for="(item, idx) in stacksFormat"
                     :stacks="item.stacks"
                     :offset="item.offset"
                     :key="idx"
                     :class="setAnimClass(item.offset)"></stack-list-item>
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
          title: "AI & LLM<br><small style='font-size: 10px;opacity: 0.75;'>ChatGPT, Claude, V0 & Cursor</small>",
          icon: {
            src: "/icons/ai_f5zcc6",
            height: 68,
            width: 68,
          },
          link: "",
          // ai gradient backgroundf
          style: "background: linear-gradient(180deg, #4A90E2 0%, #50E3C2 100%)",
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
          title: "Expo",
          icon: {
            src: "/icons/icon_expo_wspzok",
            height: 68,
            width: 68,
          },
          link: "https://expo.dev/",
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
          title: "Javascript",
          icon: {
            src: "/icons/icon_javascript_dfxxqk",
            height: 68,
            width: 68,
          },
          link: "",
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
          title: "NodeJS",
          icon: {
            src: "/icons/icon_nodejs_rii0or",
            height: 68,
            width: 68,
          },
          link: "https://nodejs.org/en",
        },
        {
          title: "AdonisJS",
          icon: {
            src: "/icons/adonis_jdvxsq",
            height: 68,
            width: 68,
          },
          link: "https://adonisjs.com/",
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
          title: "PostgreSQL",
          icon: {
            src: "/icons/icon_postgresql_yg7kxl",
            height: 68,
            width: 68,
          },
          link: "https://www.postgresql.org/",
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
          title: "Shadcn UI",
          icon: {
            src: "/icons/shadcn-ui_ycf2n3",
            height: 68,
            width: 68,
          },
          link: "https://ui.shadcn.com/",
        },

        {
          title: "Docker",
          icon: {
            src: "/icons/docker_vnzxw4",
            height: 68,
            width: 68,
          },
          link: "https://www.docker.com/",
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
      } else if (width > 450 && width <= 600) {
        this.listToShow = 5;
      } else if (width <= 450) {
        this.listToShow = 7;
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
