import { PROPOSAL_SNACK } from "./types";

export const state = () => ({
  proposalSnack: {
    show: true,
    text: "Thank you!",
    error: true
  }
});

export const mutations = {
  [PROPOSAL_SNACK](state, proposal) {
    state.proposalSnack = proposal;
  }
};
