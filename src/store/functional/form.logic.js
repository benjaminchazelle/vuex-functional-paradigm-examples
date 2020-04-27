export default {
  pricingType: {
    $default: () => ({
      value: "FLAT"
    }),
    updatePricingType: payload => ({
      value: payload
    })
  },
  odOptionsSection: {
    $default: () => ({
      isShow: false
    }),
    $apply: (self, state) => ({
      isShow: state.symmetricalOd.isShow || state.flexibleOd.isShow
    })
  },
  symmetricalOd: {
    $default: () => ({
      value: false,
      isShow: false
    }),
    $apply: (self, state) => {
      const isShow = state.pricingType.value !== "FLAT";
      return {
        value: isShow ? self.value : false,
        isShow
      };
    },
    toggleSymmetricalOd: (payload, self) => {
      return {
        ...self,
        value: !self.value
      };
    }
  },
  flexibleOd: {
    $default: () => ({
      value: false,
      isShow: false
    }),
    $apply: (self, state) => {
      const isShow =
        state.pricingType.value === "ZONAL_OD" && state.symmetricalOd.value;
      return {
        value: isShow ? self.value : false,
        isShow
      };
    },
    toggleFlexibleOd: (payload, self) => ({
      ...self,
      value: !self.value
    })
  }
};
