<template>
  <section id="projects" class="section section--projects">
    <div class="container" id="projects-parallax">
      <div class="row">
        <div class="col s12 l6" id="project-intro">
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
export default {
  components: { ProjectList }
};
</script>

<style>
</style>