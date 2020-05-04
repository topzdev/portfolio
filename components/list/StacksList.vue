<template>
  <div class="stack-list">
    <stack-list-item
      v-for="(item, idx) in stacksFormat"
      :stacks="item.stacks"
      :offset="item.offset"
      :key="idx"
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
  }
};
</script>

<style lang="scss">
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

  .offset-up {
    top: -110px;
  }
}
</style>