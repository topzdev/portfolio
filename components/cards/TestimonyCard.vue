<template>
  <div class="card card--testimony" :id="'testi-card-' + index">
    <div class="card--testimony__image">
      <nuxt-picture
        :imgAttrs="{ draggable: false, loading: 'lazy' }"
        :src="image"
        :alt="alt"
        preset="testimony_profile"
        :placeholder="150"
        height="473"
        width="470"
        sizes="mobile-lg:400 desktop:600"
        provider="cloudinary"
      />
    </div>
    <div class="card--testimony__main">
      <div class="card--testimony__stated" v-text="quoted" />
      <div class="card--testimony__told">
        <nuxt-img
          :src="image"
          sizes="mobile-lg:75"
          height="50"
          width="50"
          :alt="alt"
          :draggable="false"
          loading="lazy"
          :placeholder="20"
          provider="cloudinary"
        />
        <div>
          <div class="card--testimony__told-name" v-text="name" />
          <div class="card--testimony__told-position" v-text="position" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const gsap = this.$gsap;
    const timeline = gsap.timeline({
        defaults: { autoAlpha: 0, ease: "Power4.easeOut" },
      }),
      image = ".card--testimony__image",
      stated = ".card--testimony__stated",
      told = ".card--testimony__told",
      root = "#testi-card-" + this.index;

    const controller = new ScrollMagic.Controller();

    timeline
      .from(image, { x: "-100%", duration: 1.5 })
      .from(stated, { x: "100", duration: 1 }, "-=1")
      .from(told, { y: "-50", duration: 1 }, "-=.4");

    const scene = new ScrollMagic.Scene({
      triggerElement: root,
      triggerHook: "onEnter",
      offset: 200,
    })
      .setTween(timeline)
      .addTo(controller);
  },
  computed: {
    alt() {
      return this.name + " image";
    },
    quoted() {
      return '"' + this.testimony + '"';
    },
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    testimony: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>