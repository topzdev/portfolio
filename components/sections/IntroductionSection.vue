<template>
  <section id="intro" class="section section--intro">
    <div class="container">
      <heading-primary overline="Introduction" title="Know more about me" />

      <div class="paragraph--primary mt-3" id="intro-anim">
             Hello! My name is Christian Lugod, and I'm currently a full-stack web developer working in the city Capital of Manila, Philippines. A Technological University of the Philippines Information Technology graduate. I'm highly passionate about this profession and it shall show in my skills and experience of the subject. This very passion of mine also drive me to a lifetime commitment of constantly improving my web application development skills.
      </div>

      <btn-secondary
        class="mt-2"
        :link="cv"
        label="Download my Resume"
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
      cv: "/christian-lugod-resume-2022.pdf",
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