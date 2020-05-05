<template>
  <div class="project-list">
    <div class="row">
      <div class="col s6 project-list__first">
        <project-card
          v-for="(item, idx) in projects.slice(0,2)"
          :title="item.title"
          :logo="item.logo"
          :image="item.image"
          :key="idx"
        ></project-card>
      </div>
      <div class="col s6 project-list__last">
        <project-card
          v-for="(item, idx) in projects.slice(2,5)"
          :title="item.title"
          :logo="item.logo"
          :image="item.image"
          :key="idx"
        ></project-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/cards/ProjectCard";
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          title: "Shareitineray",
          logo: require("@/assets/img/logo/shareitinerary_logo.png"),
          image: require("@/assets/img/projects/shareitinerary/proj_sharetinerary.png"),
          link: "https://shareitinerary.com/"
        },
        {
          title: "Knovie",
          logo: require("@/assets/img/logo/knowvie_logo.png"),
          image: require("@/assets/img/projects/knowvie/proj_knowvie.png"),
          link: "https://knowvie.herokuapp.com/"
        },
        {
          title: "PC Master Shop",
          logo: require("@/assets/img/logo/pcmaster_logo.png"),
          image: require("@/assets/img/projects/pcmaster/proj_pcmaster.png"),
          link: "https://knowvie.herokuapp.com/"
        },
        {
          title: "Brocode",
          logo: require("@/assets/img/logo/brocode_logo.png"),
          image: require("@/assets/img/projects/brocode/proj_brocode.png")
        },
        {
          title: "Luzon TSC",
          logo: require("@/assets/img/logo/tsc_logo.png"),
          image: require("@/assets/img/projects/tsc/proj_tsc.png"),
          link: "https://luzontsc.com/"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.project-list {
  .col {
    display: flex;
    flex-direction: column;
  }

  &__last {
    align-items: flex-end;
    margin-top: -25%;
  }

  &__first {
    align-items: flex-start;
  }
}
</style>