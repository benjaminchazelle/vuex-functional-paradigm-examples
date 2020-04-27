<template>
  <div>
    <div>
      <b>Type</b>
      <input
        :checked="pricingType.value === 'FLAT'"
        type="radio"
        @input="updatePricingType('FLAT')"
      />
      Plat
      <input
        :checked="pricingType.value === 'ZONAL_OD'"
        type="radio"
        @input="updatePricingType('ZONAL_OD')"
      />
      O/D zonal
      <input
        :checked="pricingType.value === 'STRICT_OD'"
        type="radio"
        @input="updatePricingType('STRICT_OD')"
      />
      O/D stricte
    </div>
    <div v-if="odOptionsSection.isShow">
      <b>Option</b>
      <span v-if="symmetricalOd.isShow">
        <input
          type="checkbox"
          :checked="symmetricalOd.value"
          @input="toggleSymmetricalOd"
        />
        Symétrique
      </span>

      <span v-if="flexibleOd.isShow">
        <input
          type="checkbox"
          :checked="flexibleOd.value"
          @input="toggleFlexibleOd"
        />
        Flexible
      </span>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { mapActions } from "vuex";
import FunctionalParadigm from "../store/functional";

const formFunctionalHelpers = FunctionalParadigm.getHelpers("form", store);

export default {
  name: "FormDependencies",
  computed: {
    ...formFunctionalHelpers.getters
  },
  methods: {
    ...mapActions("form", []),
    ...formFunctionalHelpers.actions
  }
};
</script>

<style scoped></style>
