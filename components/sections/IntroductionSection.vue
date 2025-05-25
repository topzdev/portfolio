<template>
  <section id="intro"
           class="section section--intro">
    <div class="container">
      <heading-primary overline="Introduction"
                       title="Know more about me" />

      <div class="paragraph--primary mt-3"
           id="intro-anim">
        Hello! My name is Christian Lugod, and I'm currently a full-stack web
        developer working in the capital city of Manila, Philippines. I
        graduated from the Technological University of the Philippines with a
        degree in Information Technology. I am extremely passionate about this
        profession, and my dedication reflects in my skills and experience in
        the field. This passion also fuels my lifelong commitment to
        continuously enhance my web and mobile application development skills
      </div>

      <btn-secondary class="mt-2"
                     :link="cv"
                     target="_blank"
                     label="Download my Resume" />
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import splitText from "@/utils/splitText";

export default {
  data() {
    return {
      cv: "christian-lugod-resume.pdf?v=" + Date.now(),
    };
  },
  mounted() {
    const gsap = this.$gsap;
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
      transformOrigin: "right",
    });

    const ease = new ScrollMagic.Scene({
      tweenChanges: true,
      triggerElement: "#intro",
      triggerHook: "onEnter",
      duration: "50%",
      offset: 100,
      reverse: false,
    })
      .setTween(timeline)
      .addTo(controller);
  },
};
</script>