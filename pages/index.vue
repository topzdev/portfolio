<template>
  <div>
    <page-header />
    <main>
      <intro-section />
      <stack-section />
      <projects-section />
      <testimony-section />
      <proposal-section />
    </main>

    <main-footer></main-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/header/Header";
import IntroSection from "@/components/sections/IntroductionSection";
import StackSection from "@/components/sections/StacksSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonySection from "@/components/sections/TestimonySection";
import ProposalSection from "@/components/sections/ProposalSection";
import MainFooter from "@/components/footer/MainFooter";

export default {
  components: {
    PageHeader,
    IntroSection,
    StackSection,
    ProjectsSection,
    TestimonySection,
    ProposalSection,
    MainFooter
  }
};
</script>

