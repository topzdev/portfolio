<template>
  <section class="section section--projects">
    <div class="container">
      <div class="row">
        <div class="col s6">
          <heading-primary overline="Projects" title="Creative Works for the last 2 years"></heading-primary>
          <div
            class="paragraph--primary mt-2"
          >For that years i spent in web development i made a lot of masterpiece and greatness</div>

          <btn-secondary
            class="mt-3 mb-5"
            :icon="require('@/assets/img/icons/icon_github.svg')"
            label="Visit my github"
          ></btn-secondary>

          <project-list></project-list>
        </div>
      </div>
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