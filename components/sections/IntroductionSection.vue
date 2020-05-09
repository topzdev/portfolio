<template>
  <section id="intro" class="section section--intro">
    <div class="container">
      <heading-primary overline="Introduction" title="Know more about me" />

      <div class="paragraph--primary mt-3" id="intro-anim" style="width: 80%">
        <div>
          <span>
            Hi I'm
            <b>Christopher Lugod</b>, 19 years old and currently living
            in
            <b>Manila, Philippines</b>. Currently,
          </span>
        </div>
        <div>
          <span>
            I am taking
            <b>Bachelor of Science in Information Technology</b> at
            <b>Technological University</b>
          </span>
        </div>
        <div>
          <span>
            <b>of the Philippines</b>. I love designs and creating something interesting. I'm very passionate
          </span>
        </div>
        <div>
          <span>about this field and I always strive forward to enhance my knowledge about Web</span>
        </div>
        <div>
          <span>development to be able to excel in this field.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    const timeline = gsap.timeline();
    const controller = new ScrollMagic.Controller();
    timeline.to("#intro-anim div span", {
      duration: 2.5,
      stagger: 0.2,
      y: -22,
      ease: "Power4.easeOut"
    });

    const ease = new ScrollMagic.Scene({
      tweenChanges: true,
      triggerElement: "#intro",
      triggerHook: "onEnter",
      duration: "100%",
      offset: 100
    })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  }
};
</script>
