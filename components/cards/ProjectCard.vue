<template>
  <div class="card card--project" :id="id">
    <a :href="link" rel="noopener" target="_blank" class="card--project__head">
      <img :src="logo" :alt="altLogo" class="card--project__logo" :draggable="false" />
    </a>

    <div class="card--project__images">
      <img :src="image" :alt="altImage" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const timeline = gsap.timeline({
      defaults: {
        ease: "Power4.easeOut",
        y: "25%",
        autoAlpha: 0
      }
    });
    const controller = new ScrollMagic.Controller();
    timeline.from("#" + this.id, {
      duration: 5,
      x: this.isRight ? "30%" : "-30%",
      rotate: this.isRight ? "-20deg" : "20deg"
    });
    const scene = new ScrollMagic.Scene({
      triggerElement: "#" + this.id,
      triggerHook: 1,
      duration: "200%",
      offset: -80
    })
      .setTween(timeline)
      .addTo(controller);
  },

  computed: {
    smolImages() {
      let images = [];
      for (let i = 1; i <= 6; i++)
        images.push(
          require(`@/assets/img/projects/${this.imagePrefix}/${this.imagePrefix}-smol-${i}.jpg`)
        );

      return images;
    },
    altLogo() {
      return this.title + " logo";
    },
    altImage() {
      return this.title + " project images";
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    logo: {
      type: String
    },
    imagePrefix: {
      type: String
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "/"
    },
    id: {
      type: String
    },
    isRight: Boolean
  }
};
</script>

<style>
</style>