import FunctionalParadigm from "./functional";

const todolistFunctionalStore = FunctionalParadigm.getStore("todolist");

export default {
  namespaced: true,
  state: {
    ...todolistFunctionalStore.state
  },
  mutations: {
    ...todolistFunctionalStore.mutations
  },
  actions: {
    ...todolistFunctionalStore.actions,

    addTask: ({ dispatch, state }) => {
      dispatch("pushTask", state.title);
      dispatch("updateTitle", "");
    }
  },
  getters: {
    ...todolistFunctionalStore.getters
  }
};
