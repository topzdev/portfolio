<template>
  <div id="testimony" class="section section--testimony">
    <div class="container">
      <heading-primary
        overline="testimony"
        title="People I've worked with have said some nice things..."
        :centered="true"
      ></heading-primary>

      <testimony-list></testimony-list>
    </div>
  </div>
</template>

<script>
import TestimonyList from "@/components/list/TestimonyList";
import gsap from "gsap";
export default {
  components: { TestimonyList },
  mounted() {
    const timeline = gsap.timeline(),
      root = "#testimony";

    const controller = new ScrollMagic.Controller();

    timeline.to(".section--testimony", {
      backgroundImage:
        "linear-gradient(to bottom right, rgba(#fde985, 1),rgba(#fde985, 0.19) 60%)",
      duration: 2,
      ease: "Elastic.easeOut"
    });

    const scene = new ScrollMagic.Scene({
      triggerElement: root,
      triggerHook: 1
    })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  }
};
</script>

<style>
</style>