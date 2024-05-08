export default {
  namespaced: true,
  state: {
    personList: [
      { name: "张飞", id: "004" },
      { name: "武则天", id: "005" },
      { name: "秀吉", id: "006" }
    ]
  },
  mutations: {
    addMutation(state, value) {
      state.personList.push(value);
    },
    removeMutaion(state, value) {
      state.personList = state.personList.filter((el) => el.id != value.id);
    }
  },
  actions: {
    addAction(context, value) {
      setTimeout(() => {
        context.commit("addMutation", value);
      }, 1000);
    },
    removeAction(context, value) {
      context.commit("removeMutaion", value);
    }
  },
  getters: {
    personList(state) {
      return state.personList;
    }
  }
};
