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
import gsap from "gsap";

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
          icon: "/img/icons/icon_vue.svg",
        },
        {
          title: "NuxtJS",
          icon: "/img/icons/icon_nuxt.svg",
        },
        {
          title: "ReactJS",
          icon: "/img/icons/icon_react.svg",
        },
        {
          title: "NextJS",
          icon: "/img/icons/icon_nextjs.svg",
        },
        {
          title: "Javascript",
          icon: "/img/icons/icon_javascript.svg",
        },
        {
          title: "Typescript",
          icon: "/img/icons/icon_typescript.svg",
        },
        {
          title: "JQuery",
          icon: "/img/icons/icon_jquery.svg",
        },
        {
          title: "PostgreSQL",
          icon: "/img/icons/icon_postgresql.svg",
        },
        {
          title: "NodeJS",
          icon: "/img/icons/icon_nodejs.svg",
        },
        {
          title: "GraphQL",
          icon: "/img/icons/icon_graphql.svg",
        },
        {
          title: "MongoDB",
          icon: "/img/icons/icon_mongodb.svg",
        },
        {
          title: "Figma",
          icon: "/img/icons/icon_figma.svg",
        },
        {
          title: "HTML 5",
          icon: "/img/icons/icon_html.svg",
        },
        {
          title: "CSS 3",
          icon: "/img/icons/icon_css.svg",
        },
        {
          title: "SCSS",
          icon: "/img/icons/icon_sass.svg",
        },
        {
          title: "Vuetify",
          icon: "/img/icons/icon_vuetify.svg",
        },
        {
          title: "Material UI",
          icon: "/img/icons/icon_mui.svg",
        },
        {
          title: "Bootstrap",
          icon: "/img/icons/icon_bootstrap.svg",
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
