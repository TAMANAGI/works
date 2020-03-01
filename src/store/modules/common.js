export default {
  namespaced: true,
  state: {
    header: {
      type: "float",
      color: "dark"
    },
    navigator: {
      open: false,
      links: [{
          type: "item",
          title: "Home",
          url: "/",
        },
        {
          type: "item",
          title: "Profile",
          url: "/profile",
        },
        {
          type: "list",
          title: "Unity",
          children: [{
            title: "1st App(BounceBall)",
            url: "/unity/app/1",
            }
          ],
        },
      ]
    },
    preferences: {
      open: false,
    },
  },
  mutations: {
    setPreferences(state, show) {
      state.preferences = {
        ...state.preferences,
        show: show
      }
    },
    setNavigator(state, open) {
      state.navigator = {
        ...state.navigator,
        open: open
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