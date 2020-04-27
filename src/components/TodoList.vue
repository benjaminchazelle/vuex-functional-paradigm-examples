<template>
  <div>
    <input v-model="title$model" />
    <button @click="addTask">Add</button>

    <ul>
      <li v-for="task in tasks.list" :key="task.id">
        {{ task.title }}
        <button @click="popTask(task.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store";
import { mapActions } from "vuex";
import FunctionalParadigm from "../store/functional";

const functionalHelpers = FunctionalParadigm.getHelpers("todolist", store);
// const functionalMappings = FunctionalParadigm.getMappings("todolist");

console.log(functionalHelpers.getters);

export default {
  name: "TodoList",
  computed: {
    ...functionalHelpers.getters
  },
  methods: {
    ...mapActions("todolist", ["addTask"]),
    ...functionalHelpers.actions
  }
};
</script>

<style scoped></style>
