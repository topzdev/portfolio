<template>
  <div>
    <page-header />
    <main>
      <intro-section />
      <stack-section />
      <projects-section />
    </main>
  </div>
</template>

<script>
import PageHeader from "@/components/header/Header";
import IntroSection from "@/components/sections/IntroductionSection";
import StackSection from "@/components/sections/StacksSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default {
  components: { PageHeader, IntroSection, StackSection, ProjectsSection }
};
</script>

