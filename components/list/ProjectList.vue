<template>
  <div class="list--project">
    <div class="row">
      <div class="col s12 m6 list--project__first">
        <project-card
          v-for="(item, idx) in projects.slice(0,2)"
          :title="item.title"
          :logo="item.logo"
          :id="item.id"
          :link="item.link"
          :image="item.image"
          :image-prefix="item.imagePrefix"
          :key="idx"
        ></project-card>
      </div>
      <div class="col s12 m6 list--project__last">
        <project-card
          v-for="(item, idx) in projects.slice(2,5)"
          :title="item.title"
          :logo="item.logo"
          :id="item.id"
          :link="item.link"
          :image="item.image"
          :image-prefix="item.imagePrefix"
          :key="idx"
          :isRight="true"
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
          logo: require("@/assets/img/logo/shareitinerary_logo.webp"),
          image: require("@/assets/img/projects/shareitinerary/proj_sharetinerary.webp"),
          imagePrefix: "shareitinerary",
          link: "https://shareitinerary.com/",
          id: "project-1",
        },
        {
          title: "Knovie",
          logo: require("@/assets/img/logo/knowvie_logo.webp"),
          imagePrefix: "knowvie",
          image: require("@/assets/img/projects/knowvie/proj_knowvie.webp"),
          link: "https://knowvie.herokuapp.com/",
          id: "project-2",
        },
        {
          title: "PC Master Shop",
          logo: require("@/assets/img/logo/pcmaster_logo.webp"),
          imagePrefix: "pcmaster",
          image: require("@/assets/img/projects/pcmaster/proj_pcmaster.webp"),
          link: "http://pcmastershop.herokuapp.com/",
          id: "project-3",
        },
        {
          title: "Brocode",
          logo: require("@/assets/img/logo/brocode_logo.webp"),
          image: require("@/assets/img/projects/brocode/proj_brocode.webp"),
          imagePrefix: "brocode",
          id: "project-4",
        },
        {
          title: "Luzon TSC",
          logo: require("@/assets/img/logo/tsc_logo.webp"),
          image: require("@/assets/img/projects/tsc/proj_tsc.webp"),
          imagePrefix: "tsc",
          link: "https://luzontsc.com/",
          id: "project-5",
        },
      ],
    };
  },
};
</script>
