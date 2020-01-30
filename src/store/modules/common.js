export default {
  namespaced: true,
  state: {
    header: {
      type: "float",
    },
    navigator: {
      open: false,
    },
    position: {
      y: 0,
    }
  },
  mutations: {
    setNavigator(state, open) {
      state.navigator = {
        ...state.navigator.open,
        open: open
      }
    },
    setPositionY(state, y) {
      state.position = {
        ...state.position,
        y: y
      }
    },
    setHeaderType(state, type) {
      state.header = {
        ...state.header,
        type: type
      };
    },
    setHeaderColor(state, color) {
      state.header = {
        ...state.header,
        color: color
      };
    }
  },
  actions: {},
  getters: {},
};