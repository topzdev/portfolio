<template>
  <div class="list--footer">
    <div class="list--footer__title" v-text="title" />

    <ul>
      <footer-list-item
        v-for="(item, idx) in links"
        :key="idx"
        :label="item.label"
        :icon="item.icon"
        :link="item.link"
      />
    </ul>
  </div>
</template>

<script>
import FooterListItem from "@/components/list/FooterListItem";
import gsap from "gsap";

export default {
  components: { FooterListItem },

  mounted() {
    const timeline = gsap.timeline({
      defaults: { ease: "Back.easeOut.config(1.7)" }
    });
    const controller = new ScrollMagic.Controller();

    timeline
      .to(".list--footer__title", { opacity: 1, duration: 1 })
      .to(".list--footer li", {
        stagger: 0.2,
        duration: 1,
        y: -30,
        autoAlpha: 1
      });

    const Scene = new ScrollMagic.Scene({
      triggerElement: ".list--footer",
      triggerHook: "onEnter",
      reverse: false
    })
      .setTween(timeline)
      .addTo(controller);
  },

  props: {
    title: String,
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.list--footer ul li {
  position: relative;
  opacity: 0;
  top: 30px;
}
</style>