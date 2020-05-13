<template>
  <div class="snackbars snackbars--proposal bottom-center" :class="proposalClass">
    {{proposal.text}}
    <button class="btn snackbars__exit" @click="close">Close</button>
  </div>
</template>

<script>
import { PROPOSAL_SNACK } from "@/store/types";

export default {
  computed: {
    proposal() {
      let self = this;
      let state = this.$store.state.frontend.proposalSnack;

      if (state) {
        setTimeout(() => {
          self.close();
        }, 5000);
      }
      return this.$store.state.frontend.proposalSnack;
    },
    proposalClass() {
      return `${this.proposal.show ? "" : "snackbars-closed"} ${
        this.proposal.error ? "red" : ""
      }`;
    }
  },
  methods: {
    close() {
      this.$store.commit("frontend/" + PROPOSAL_SNACK, { show: false });
    }
  }
};
</script>
