import FunctionalParadigm from "./functional";

const checkboxesFunctionalStore = FunctionalParadigm.getStore("checkboxes");

export default {
  namespaced: true,
  state: {
    ...checkboxesFunctionalStore.state
  },
  mutations: {
    ...checkboxesFunctionalStore.mutations
  },
  actions: {
    ...checkboxesFunctionalStore.actions
  },
  getters: {
    ...checkboxesFunctionalStore.getters
  }
};
