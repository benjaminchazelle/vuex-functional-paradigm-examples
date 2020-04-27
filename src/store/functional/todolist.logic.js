export default {
  tasks: {
    $default: () => ({
      list: [],
      nextID: 0
    }),
    pushTask: (payload, self) => {
      return {
        list: [
          ...self.list,
          {
            title: payload,
            id: self.nextID
          }
        ],
        nextID: self.nextID + 1
      };
    },
    popTask: (payload, self) => {
      return {
        ...self,
        list: self.list.filter(task => task.id !== payload)
      };
    }
  },
  title: {
    $default: () => "",
    $model: {
      action: "updateTitle",
      value: self => self
    },
    updateTitle: payload => payload
  }
};
