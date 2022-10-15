<template>
  <div class="card card--project" :id="id">
    <a :href="link" rel="noopener" target="_blank" class="card--project__head">
      <nuxt-img
        format="webp"
        :src="logo"
        :alt="altLogo"
        class="card--project__logo"
        :draggable="false"
        height="50"
        loading="lazy"
      />
    </a>

    <nuxt-picture
      class="card--project__images"
      :imgAttrs="{ draggable: false }"
      format="webp"
      :src="image"
      :placeholder="15"
      :alt="altImage"
      loading="lazy"
      width="485"
      height="497"
      provider="cloudinary"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    const gsap = this.$gsap;
    const timeline = gsap.timeline({
      defaults: {
        ease: "Power4.easeOut",
        y: "25%",
        autoAlpha: 0,
      },
    });
    const controller = new ScrollMagic.Controller();
    timeline.from("#" + this.id, {
      duration: 5,
      x: this.isRight ? "30%" : "-30%",
      rotate: this.isRight ? "-20deg" : "20deg",
    });
    const scene = new ScrollMagic.Scene({
      triggerElement: "#" + this.id,
      triggerHook: 1,
      duration: "200%",
      offset: -80,
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
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    imagePrefix: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "/",
    },
    id: {
      type: String,
    },
    isRight: Boolean,
  },
};
</script>

<style></style>
