<template>
  <section id="intro" class="section section--intro">
    <div class="container">
      <heading-primary overline="Introduction" title="Know more about me" />

      <div class="paragraph--primary mt-3" id="intro-anim">
        Hi I'm
        <b>Christopher Lugod</b>, 19 years old and currently living
        in
        <b>Manila, Philippines</b>. Currently,
        I am taking
        <b>Bachelor of Science in Information Technology</b> at
        <b>Technological University</b>

        <b>of the Philippines</b>
        . I love designs and creating something interesting. I'm very passionate
        about this field and I always strive forward to enhance my knowledge about Web
        development to be able to excel in this field.
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import splitText from "@/utils/splitText";

export default {
  mounted() {
    const timeline = gsap.timeline();
    const controller = new ScrollMagic.Controller();
    const intro = "#intro-anim";
    splitText(
      intro,
      "<span style='position:relative; display:inline-block'>",
      "</span>"
    );

    timeline
      .from(intro, {
        duration: 3,
        rotate: "2deg"
      })
      .from(
        intro + " span",
        {
          duration: 2,
          stagger: 0.2,
          y: 20,
          autoAlpha: 0,
          ease: "Power4.easeOut"
        },
        "-=3"
      );

    const ease = new ScrollMagic.Scene({
      tweenChanges: true,
      triggerElement: "#intro",
      triggerHook: "onEnter",
      duration: "50%",
      offset: 100,
      reverse: false
    })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  }
};
</script>

<style lang="stylus" scoped></style>
