import VuexFunctionalParadigm from "vuex-functional-paradigm";
import todolistLogic from "./todolist.logic";
import formLogic from "./form.logic";
import checkboxesLogic from "./checkboxes.logic";

export default new VuexFunctionalParadigm({
  todolist: todolistLogic,
  form: formLogic,
  checkboxes: checkboxesLogic
});
