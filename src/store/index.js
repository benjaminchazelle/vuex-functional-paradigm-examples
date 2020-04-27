import Vue from "vue";
import Vuex from "vuex";

import todolist from "./todolist.store";
import form from "./form.store";
import checkboxes from "./checkboxes.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todolist,
    form,
    checkboxes
  }
});
