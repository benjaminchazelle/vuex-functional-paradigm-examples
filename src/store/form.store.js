import FunctionalParadigm from "./functional";

const formFunctionalStore = FunctionalParadigm.getStore("form");

export default {
  namespaced: true,
  state: {
    ...formFunctionalStore.state
  },
  mutations: {
    ...formFunctionalStore.mutations
  },
  actions: {
    ...formFunctionalStore.actions
  },
  getters: {
    ...formFunctionalStore.getters
  }
};
