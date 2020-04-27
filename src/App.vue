<template>
  <div id="app">
    <h1>Checkboxes</h1>
    <CheckboxDependencies />

    <h1>Form</h1>
    <FormDependencies />

    <hr />
    <h1>TodoList</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import FormDependencies from "./components/FormDependencies";
import CheckboxDependencies from "./components/CheckboxesDependencies";
export default {
  name: "App",
  components: {
    CheckboxDependencies,
    FormDependencies,
    TodoList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
