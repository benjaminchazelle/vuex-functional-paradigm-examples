<template>
  <div>
    <div>
      <label>
        <input v-model="a$model" type="checkbox" />
        A
      </label>
    </div>
    <div>
      <label v-if="b.isShow">
        <input v-model="b$model" type="checkbox" />
        B
      </label>

      <label v-if="bprime.isShow">
        <input v-model="bprime$model" type="checkbox" />
        B'
      </label>
    </div>
    <div>
      <label v-if="c.isShow">
        <input v-model="c$model" type="checkbox" />
        C
      </label>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { mapActions } from "vuex";
import FunctionalParadigm from "../store/functional";

const functionalHelpers = FunctionalParadigm.getHelpers("checkboxes", store);

export default {
  name: "CheckboxDependencies",
  data: function() {
    return {
      checked: true
    };
  },
  computed: {
    ...functionalHelpers.getters
  },
  methods: {
    ...mapActions("checkboxes", []),
    ...functionalHelpers.actions
  }
};
</script>

<style scoped>
div {
  text-align: center;
}

label {
  padding: 15px 30px;
  display: inline-block;
}
</style>
