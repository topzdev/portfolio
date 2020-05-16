import { PROPOSAL_SNACK } from "./types";

export const state = () => ({
  proposalSnack: {
    show: false,
    text: "Thanks for the proposal!, I'll review it immediately.",
    error: false
  }
});

export const mutations = {
  [PROPOSAL_SNACK](state, proposal) {
    state.proposalSnack = proposal;
  }
};
