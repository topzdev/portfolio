<template>
  <section id="hireme" class="section section--proposal">
    <div class="container">
      <div class="row">
        <div class="col s12 l6">
          <div class="section--proposal__intro">
            <heading-primary
              title="Got a project?<br>Hmmm... Let's Talk"
            ></heading-primary>
            <div class="paragraph paragraph--primary mt-2">
              Don’t hesitate, lets talk about your idea and make it happen.
            </div>
          </div>
        </div>
        <div class="col s12 l6">
          <div class="section--proposal__form">
            <h1 class="heading--secondary mb-3">
              Estimate your project?
              <br />Let me know here.
            </h1>
            <proposal-form />
          </div>
        </div>
      </div>
    </div>
    <proposal-snackbars />
  </section>
</template>

<script>
import ProposalForm from "@/components/form/ProposalForm";
import ProposalSnackbars from "@/components/snackbars/ProposalSnackbar";
export default {
  components: { ProposalForm, ProposalSnackbars },
};
</script>

<style>
</style>