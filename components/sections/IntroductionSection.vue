<template>
  <section id="intro" class="section section--intro">
    <div class="container">
      <heading-primary overline="Introduction" title="Know more about me" />

      <div class="paragraph--primary mt-3" id="intro-anim">
        Hi I'm
        Christopher Lugod, 19 years old and currently living
        in
        Manila, Philippines. Currently,
        I am taking
        Bachelor of Science in Information Technology at
        Technological University
        of the Philippines
        . I love designs and creating something interesting. I'm very passionate
        about this field and I always strive forward to enhance my knowledge about Web
        development to be able to excel in this field.
      </div>

      <btn-secondary
        class="mt-2"
        download="Christopher-Lugod-PDF"
        :link="cv"
        label="Download my CV"
      />
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import splitText from "@/utils/splitText";

export default {
  data() {
    return {
      cv: require("@/assets/files/christopher-lugod-resume.pdf")
    };
  },
  mounted() {
    const timeline = gsap.timeline();
    const controller = new ScrollMagic.Controller();
    const intro = "#intro-anim";
    splitText(intro, "<span style='position:relative;'>", "</span>");

    timeline.from(intro + " span", {
      duration: 3,
      stagger: 0.4,
      y: 20,
      autoAlpha: 0,
      ease: "Elastic.easeOut",
      transformOrigin: "right"
    });

    const ease = new ScrollMagic.Scene({
      tweenChanges: true,
      triggerElement: "#intro",
      triggerHook: "onEnter",
      duration: "50%",
      offset: 100,
      reverse: false
    })
      .setTween(timeline)
      .addTo(controller);
  }
};
</script>