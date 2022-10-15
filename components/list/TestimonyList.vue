<template>
  <div class="list--testimony">
    <div class="list--testimony__slider">
      <testimony-card
        v-for="(item, idx) in testimonies"
        :key="idx"
        :image="item.image"
        :testimony="item.testimony"
        :name="item.name"
        :position="item.position"
        :index="idx"
      ></testimony-card>
    </div>

    <div class="testimony__list__progress">
      <span class="current"></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import TestimonyCard from "@/components/cards/TestimonyCard";
export default {
  components: { TestimonyCard },
  data() {
    return {
      testimonies: [
        {
          image: {
            // s1440: require("@/assets/img/profiles/client_sir_miko_1440x.jpg"),
            // s600: require("@/assets/img/profiles/client_sir_miko_600x.jpg"),
            // s300: require("@/assets/img/profiles/client_sir_miko_300x.jpg"),
            // s400: require("@/assets/img/profiles/client_sir_miko_400x.jpg"),
            // s75: require("@/assets/img/profiles/client_sir_miko_75x.jpg")
          },
          testimony:
            "Christian is not only great for design and development, he is a problem solver who always delivers an exceptional quality of work. Highly recommended",
          name: "Miko Suarez",
          position: "Project Manager",
        },
      ],
    };
  },
};
</script>

