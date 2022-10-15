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
          icon: "/icons/icon_vue_jhkfs6",
        },
        {
          title: "NuxtJS",
          icon: "/icons/icon_nuxt_mcbcyd",
        },
        {
          title: "ReactJS",
          icon: "/icons/icon_react_xnelsh",
        },
        {
          title: "NextJS",
          icon: "/icons/icon_nextjs_t8gyda",
        },
        {
          title: "Javascript",
          icon: "/icons/icon_javascript_dfxxqk",
        },
        {
          title: "Typescript",
          icon: "/icons/icon_typescript_fld2yp",
        },
        {
          title: "JQuery",
          icon: "/icons/icon_jquery_rp7qwu",
        },
        {
          title: "PostgreSQL",
          icon: "/icons/icon_postgresql_yg7kxl",
        },
        {
          title: "NodeJS",
          icon: "/icons/icon_nodejs_rii0or",
        },
        {
          title: "GraphQL",
          icon: "/icons/icon_graphql_qathtj",
        },
        {
          title: "MongoDB",
          icon: "/icons/icon_mongodb_qbu6q6",
        },
        {
          title: "Figma",
          icon: "/icons/icon_figma_qijjss",
        },
        {
          title: "HTML 5",
          icon: "/icons/icon_html_iatcnq",
        },
        {
          title: "CSS 3",
          icon: "/icons/icon_css_pnlbyb",
        },
        {
          title: "SCSS",
          icon: "/icons/icon_sass_pbvayy",
        },
        {
          title: "Vuetify",
          icon: "/icons/icon_vuetify_nkvejh",
        },
        {
          title: "Material UI",
          icon: "/icons/icon_css_pnlbyb",
        },
        {
          title: "Bootstrap",
          icon: "/icons/icon_bootstrap_truxzr",
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
        this.listToShow = 4;
      } else if (width > 600 && width <= 768) {
        this.listToShow = 5;
      } else if (width <= 600) {
        this.listToShow = 6;
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
