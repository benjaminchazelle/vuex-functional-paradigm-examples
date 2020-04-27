export default {
  a: {
    $default: () => false,
    // $model: "updateA",
    $model: {
      action: "updateA",
      value: self => self
    },
    updateA: payload => {
      console.log(77);
      return payload;
    }
  },
  b: {
    $default: () => ({
      value: false,
      isShow: false
    }),
    $apply: (self, state) => {
      const isShow = state.a;
      const value = isShow ? self.value : false;
      return {
        value,
        isShow
      };
    },
    $model: {
      action: "updateB",
      value: self => self.value
    },
    updateB: (payload, self) => ({
      ...self,
      value: payload
    })
  },
  bprime: {
    $default: () => ({
      value: false,
      isShow: false
    }),
    $apply: (self, state) => {
      const isShow = state.a;
      const value = isShow ? self.value : false;
      return {
        value,
        isShow
      };
    },
    $model: {
      action: "updateBprime",
      value: self => self.value
    },
    updateBprime: (payload, self) => ({
      ...self,
      value: payload
    })
  },
  c: {
    $default: () => ({
      value: false,
      isShow: false
    }),
    $apply: (self, state) => {
      const isShow = state.b.value && state.bprime.value;
      const value = isShow ? self.value : false;
      return {
        value,
        isShow
      };
    },
    $model: {
      action: "updateC",
      value: self => self.value
    },
    updateC: (payload, self) => ({
      ...self,
      value: payload
    })
  }
};
