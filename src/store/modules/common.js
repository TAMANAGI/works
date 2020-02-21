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
              title: "3D Ball",
              url: "/unity/ball",
            },
            {
              title: "3D Avatar",
              url: "/unity/avatar",
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