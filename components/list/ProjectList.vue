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
          logo: '/logo/shareitinerary_logo.png',
          image: '/projects/all/proj_sharetinerary_x0cqjn',
          imagePrefix: "shareitinerary",
          link: "https://shareitinerary.com/",
          id: "project-1",
        },
        {
          title: "Knovie",
          logo: '/logo/knowvie_logo.png',
          imagePrefix: "knowvie",
          image: '/projects/all/proj_knowvie_hi2qyh',
          link: "https://knowvie.herokuapp.com/",
          id: "project-2",
        },
        {
          title: "PC Master Shop",
          logo: '/logo/pcmaster_logo.png',
          imagePrefix: "pcmaster",
          image: '/projects/all/proj_pcmaster_f0xrlx',
          link: "http://pcmastershop.herokuapp.com/",
          id: "project-3",
        },
        {
          title: "Brocode",
          logo: '/logo/brocode_logo.png',
          image: '/projects/all/proj_brocode_q6fknk',
          imagePrefix: "brocode",
          id: "project-4",
        },
        {
          title: "Luzon TSC",
          logo: '/logo/tsc_logo.png',
          image: '/projects/all/proj_tsc_ggaleu',
          imagePrefix: "tsc",
          link: "https://luzontsc.com/",
          id: "project-5",
        },
      ],
    };
  },
};
</script>
