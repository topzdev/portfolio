<template>
  <div class="list--project">
    <div class="row">
      <div class="col s12 m6 list--project__first">
        <project-card v-for="(item, idx) in projects.slice(0, 2)"
                      :title="item.title"
                      :logo="item.logo"
                      :id="item.id"
                      :link="item.link"
                      :image="item.image"
                      :image-prefix="item.imagePrefix"
                      :key="idx"></project-card>
      </div>
      <div class="col s12 m6 list--project__last">
        <project-card v-for="(item, idx) in projects.slice(2, 5)"
                      :title="item.title"
                      :logo="item.logo"
                      :id="item.id"
                      :link="item.link"
                      :image="item.image"
                      :image-prefix="item.imagePrefix"
                      :key="idx"
                      :isRight="true"></project-card>
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
          title: "Linktree Clone",
          logo: {
            src: "/logo/linktree_gwkwvu",
            height: 142,
            width: 353,
          },
          image: "/projects/all/linktree-clone_ktfxzc",
          imagePrefix: "linktree",
          link: "https://linktree-clone-topzdev.vercel.app/",
          id: "project-2",
        },
        {
          title: "Shareitineray",
          logo: {
            src: "/logo/shareitinerary_logo_m4zqlq",
            height: 50,
            width: 213,
          },
          image: "/projects/all/proj_sharetinerary_x0cqjn",
          imagePrefix: "shareitinerary",
          link: "https://shareitinerary.com/",
          id: "project-3",
        },


        {
          title: "HomeOfDevs",
          logo: {
            src: "/logo/homeofdevs_qpa2gr",
            height: 100,
            width: 286 * 2,
          },
          image: "/projects/all/homeofdevs_qqgfbk",
          imagePrefix: "homeofdevs",
          link: "https://homeofdevs.com/",
          id: "project-1",
        },

        {
          title: "Knovie",
          imagePrefix: "knowvie",
          logo: {
            src: "/logo/knowvie_logo_v1wb6a",
            height: 50,
            width: 47,
          },
          image: "/projects/all/proj_knowvie_hi2qyh",
          link: "https://knovie.topz.dev/",
          id: "project-4",
        },
        {
          title: "PC Master Shop",
          imagePrefix: "pcmaster",
          logo: {
            src: "/logo/pcmaster_logo_ud6tcm",
            height: 50,
            width: 175,
          },
          image: "/projects/all/proj_pcmaster_f0xrlx",
          link: "https://pcmastershop.vercel.app/",
          id: "project-5",
        },
        {
          title: "Brocode",
          imagePrefix: "brocode",
          logo: {
            src: "/logo/brocode_logo_x3wynw",
            height: 50,
            width: 259,
          },
          image: "/projects/all/proj_brocode_q6fknk",
          id: "project-6",
        },
        {
          title: "Luzon TSC",
          imagePrefix: "tsc",
          logo: {
            src: "/logo/tsc_logo_t2o9pc",
            height: 50,
            width: 53,
          },
          image: "/projects/all/proj_tsc_ggaleu",
          link: "https://luzontsc.com/",
          id: "project-7",
        },
      ],
    };
  },
};
</script>
