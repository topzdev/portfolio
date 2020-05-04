<template>
  <div class="project-list">
    <project-card
      v-for="(item, idx) in projects"
      :title="item.title"
      :logo="item.logo"
      :image="item.image"
      :key="idx"
    ></project-card>
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
          image: require("@/assets/img/projects/shareitinerary/proj_sharetinerary.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>