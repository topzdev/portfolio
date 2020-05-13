<template>
  <header class="header">
    <div class="container">
      <div class="header__intro">
        <h1 class="heading--intro">
          <div id="name-anim" class="name">
            <span class="name-intro">
              Hello,
              <span id="im-anim"></span>
            </span>
            <span id="me-anim">World!</span>
          </div>
          <div id="title-anim" class="title">
            <div class="title-job title-job-1">
              <span>UI/UX</span>
              <span>Designer</span>
            </div>
            <div class="title-job title-job-2">
              <span>Backend</span>
              <span>Developer</span>
            </div>
            <div class="title-job title-job-3">
              <span>Frontend</span>
              <span>Developer</span>
            </div>
            <div class="title-job title-job-4">
              <span>Fullstack</span>
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
import TextPlugin from "gsap/TextPlugin";

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

    gsap.registerPlugin(TextPlugin);
    const controller = new ScrollMagic.Controller();

    const timeline = gsap.timeline({
      onComplete: function() {
        this.restart();
      },
      defaults: { ease: "Power4.easeOut" }
    });
    const textTimeline = gsap.timeline();

    const set = {
      position: "relative",
      display: "none",
      y: -100,
      autoAlpha: 0,
      duration: 0.5,
      perspective: 50
    };

    const show = {
      display: "block",
      y: 0,
      scale: 1,
      autoAlpha: 1,
      duration: 2,
      perspective: 0,
      rotateX: "0",
      skewX: "0"
    };

    const fade = {
      display: "none",
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
      perspective: -50
    };

    textTimeline
      .to(
        "#im-anim",
        {
          duration: 0,
          text: {
            value: "I'm"
          }
        },
        "+=2"
      )
      .to("#me-anim", {
        duration: 2,
        ease: "Power4.easeOut",
        text: {
          value: "TopzDev"
        }
      })
      .to("#me-anim", {
        duration: 2,
        ease: "Power4.easeOut",
        text: {
          value: "Christopher Lugod"
        }
      });

    timeline
      .set(".title-job-1", { ...set, duration: 0.1 })
      .to(".title-job-1", show)
      .to(".title-job-1", fade)
      .set(".title-job-2", set)
      .to(".title-job-2", show)
      .to(".title-job-2", fade)
      .set(".title-job-3", set)
      .to(".title-job-3", show)
      .to(".title-job-3", fade)
      .set(".title-job-4", set)
      .to(".title-job-4", show)
      .to(".title-job-4", fade);

    const timeline2 = gsap.timeline({ defaults: { ease: "Power4.easeOut" } });

    timeline2
      .to("#name-anim", {
        duration: 5,
        autoAlpha: 0.5,
        y: "-40%"
      })
      .to("#title-anim", { duration: 10, y: "-40%", autoAlpha: 0.5 }, "-=5")
      .to(
        "#btn-anim",
        {
          duration: 15,
          top: -100,
          autoAlpha: 0.5
        },
        "-=10"
      );

    const scene = new ScrollMagic.Scene({
      triggerElement: "#intro",
      triggerHook: "onEnter",
      duration: "100%"
    })
      .setTween(timeline2)
      .addTo(controller);
  }
};
</script>

