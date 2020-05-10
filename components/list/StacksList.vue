<template>
  <div class="stack-list">
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
      for (i = 0; i < this.list.length; i += 2) {
        formatted.push({
          stacks: this.list.slice(i, i + 2)
        });
      }

      for (i = 0; i < formatted.length; i++) {
        formatted[i].offset = i % 2 != 0;
      }

      return formatted;
    }
  },

  data() {
    return {
      list: [
        {
          title: "VueJS",
          icon: require("@/assets/img/icons/icon_vue.svg")
        },
        {
          title: "NodeJS",
          icon: require("@/assets/img/icons/icon_nodejs.svg")
        },
        {
          title: "ReactJS",
          icon: require("@/assets/img/icons/icon_react.svg")
        },
        {
          title: "Vuetify",
          icon: require("@/assets/img/icons/icon_vuetify.svg")
        },
        {
          title: "Javascript",
          icon: require("@/assets/img/icons/icon_javascript.svg")
        },
        {
          title: "PostgreSQL",
          icon: require("@/assets/img/icons/icon_postgresql.svg")
        },
        {
          title: "Typescript",
          icon: require("@/assets/img/icons/icon_typescript.svg")
        },
        {
          title: "Figma",
          icon: require("@/assets/img/icons/icon_figma.svg")
        },
        {
          title: "HTML",
          icon: require("@/assets/img/icons/icon_html.svg")
        },
        {
          title: "MongoDB",
          icon: require("@/assets/img/icons/icon_mongodb.svg")
        },
        {
          title: "CSS",
          icon: require("@/assets/img/icons/icon_css.svg")
        },
        {
          title: "VS Code",
          icon: require("@/assets/img/icons/icon_vscode.svg")
        },
        {
          title: "SCSS",
          icon: require("@/assets/img/icons/icon_sass.svg")
        },
        {
          title: "Bootstrap",
          icon: require("@/assets/img/icons/icon_bootstrap.svg")
        }
      ]
    };
  },

  methods: {
    setAnimClass: function(offset) {
      return offset ? "stack-offset-anim" : "stack-anim";
    }
  },

  mounted() {
    let controller = new ScrollMagic.Controller();
    let timeline = gsap.timeline();

    timeline
      .to(".stack-anim", {
        duration: 2,
        stagger: 0.3,
        y: -400,
        ease: "slow(0.7, 0.7, false)"
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
      reverse: false
    })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  }
};
</script>

<style lang="scss">
.stack-offset-anim {
  top: -258px;
}
.stack-anim {
  top: 200px;
}
.stack-list {
  display: flex;
  margin-top: 40px;

  & > *:not(:last-child) {
    margin-right: 50px;
  }

  &__row {
    display: flex;
    flex-direction: column;
    position: relative;

    & > *:not(:last-child) {
      margin-bottom: 40px;
    }
  }
}
</style>
