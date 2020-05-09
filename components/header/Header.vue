<template>
  <header class="header">
    <div class="container">
      <div class="header__intro">
        <h1 class="heading--intro">
          <div id="name-anim" class="name">
            Hello, I'm
            <span>Christopher Lugod</span>
          </div>
          <div id="title-anim" class="title">
            <div class="title-job title-job-1">
              <span>Backend Web</span>
              <span>Developer</span>
            </div>
            <div class="title-job title-job-2">
              <span>Frontend</span>
              <span>Developer</span>
            </div>
            <div class="title-job title-job-3">
              <span>UI/UX</span>
              <span>Designer</span>
            </div>
            <div class="title-job title-job-4">
              <span>Fullstack Web</span>
              <span>Developer</span>
            </div>
          </div>
        </h1>
        <btn-primary id="btn-anim" rounded class="pulse" label="Hire Me" v-scroll-to="scrollHireMe"></btn-primary>
      </div>
    </div>

    <img class="header__image" src="@/assets/img/me.png" alt="Christopher Lugod Image" />
  </header>
</template>

<script>
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

export default {
  data() {
    return {
      scrollHireMe: {
        el: "#hireme",
        duration: 2000
      }
    };
  },
  mounted() {
    if (this.$route.hash) this.$scrollTo(this.$route.hash, 2000);

    gsap.registerPlugin(CSSRulePlugin);
    const controller = new ScrollMagic.Controller();
    const rule = CSSRulePlugin.getRule(".title-job::after");

    const timeline = gsap.timeline();
    timeline
      .set(".title-job-1", { autoAlpha: 1, display: "block" })
      .to(rule, {
        duration: 1,
        cssRule: { scaleY: 0 }
      })
      .from(".title-job-1", { display: "none", autoAlpha: 0, duration: 0.01 })
      .to(".title-job-2", { autoAlpha: 1, display: "block", duration: 2 })

      .from(".title-job-2", { display: "none", autoAlpha: 0, duration: 0.01 })
      .to(".title-job-3", { autoAlpha: 1, display: "block", duration: 2 })
      .from(".title-job-3", { display: "none", autoAlpha: 0, duration: 0.01 })
      .to(".title-job-4", { autoAlpha: 1, display: "block", duration: 2 });

    const timeline2 = gsap.timeline();

    timeline2
      .to("#name-anim", {
        duration: 5,
        autoAlpha: 0,
        y: "-100%",
        ease: "Power3.easeOut"
      })
      .to(
        "#title-anim",
        { duration: 10, autoAlpha: 0, y: "-100%", ease: "Power1.easeOut" },
        "-=.3"
      )
      .to(
        "#btn-anim",
        {
          duration: 8,
          autoAlpha: 0,
          top: "-200",
          ease: "Power1.easeOut"
        },
        "-=9"
      )
      .to(
        ".header__image",
        {
          duration: 20,
          autoAlpha: 0,
          ease: "Power3.easeOut"
        },
        "-=3"
      );

    const scene = new ScrollMagic.Scene({
      triggerElement: ".header",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setTween(timeline2)
      .addIndicators()
      .addTo(controller);
  }
};
</script>

