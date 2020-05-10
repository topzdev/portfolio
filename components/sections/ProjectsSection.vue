<template>
  <section id="projects" class="section section--projects">
    <div class="container" id="projects-parallax">
      <div class="row">
        <div class="col s6" id="project-intro">
          <heading-primary overline="Projects" title="Creative Works for the last 2 years"></heading-primary>
          <div
            class="paragraph--primary mt-2"
          >Believes in perfection by design and performance by default</div>

          <btn-secondary
            class="mt-4 mb-3"
            :icon="require('@/assets/img/icons/icon_github.svg')"
            label="Visit my github"
          ></btn-secondary>
        </div>
      </div>

      <project-list></project-list>
    </div>
  </section>
</template>

<script>
import ProjectList from "@/components/list/ProjectList";
import gsap from "gsap";

export default {
  components: { ProjectList },
  mounted() {
    const timeline = gsap.timeline({
      defaults: {
        ease: "Power4.easeOut",
        y: "25%",
        autoAlpha: 0
      }
    });
    const controller = new ScrollMagic.Controller();
    const project1 = "#project-1",
      project2 = "#project-2",
      project3 = "#project-3",
      project4 = "#project-4",
      project5 = "#project-5";

    timeline
      .from(project3, {
        duration: 40,
        x: "25%",
        rotate: "-20deg"
      })
      .from(
        project1,
        {
          duration: 40,
          x: "-30%",
          rotate: "20deg"
        },
        "-=20"
      )
      .from(
        project4,
        {
          duration: 50,
          x: "30%",
          rotate: "-20deg"
        },
        "-=20"
      )
      .from(
        project2,
        {
          duration: 120,
          x: "-30%",
          rotate: "20deg"
        },
        "-=50"
      )
      .from(
        project5,
        {
          duration: 160,
          x: "30%",
          rotate: "-20deg"
        },
        "-=120"
      );

    const scene = new ScrollMagic.Scene({
      triggerElement: "#projects",
      triggerHook: 0,
      duration: "450%",
      offset: -500,
      reverse: false
    })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  }
};
</script>

<style>
</style>