export default {
  namespaced: true,
  state: {
    current: 1,
    taskType: ["List", "Batch", "CustomAction"],
    tasks: [{
        id: "00001",
        name: "社内公募選考一覧",
        type: "List",
        release: false,
        releaseDate: null,
        creator: null,
        created: null,
        modifier: null,
        modified: null,
      },
      {
        id: "00002",
        name: "最終選考合格通知（本人）",
        type: "Batch",
        release: false,
        releaseDate: null,
        creator: null,
        created: null,
        modifier: null,
        modified: null,
      },
      {
        id: "00003",
        name: "最終選考合格通知（上長）",
        type: "Batch",
        release: false,
        releaseDate: null,
        creator: null,
        created: null,
        modifier: null,
        modified: null,
      }
    ]
  },
  mutations: {
    updateCurrentTask(state, id) {
      state.current = id;
    },
    addTask(state, data) {
      const task = {
        id: "aaa",
        name: data.name,
        type: data.type,
        release: false,
        releaseDate: null,
        creator: data.user,
        created: "2019.12.19 00:00:00",
        modifier: data.user,
        modified: "2019.12.19 00:00:00",
      }
      state.tasks.push(task);
    },
    removeTask(state) {
      state.tasks = state.tasks.filter(task => {
        return task.id != state.current;
      });
    }
  },
  actions: {
    async addTaskAsync(context, data) {
      context.commit("addTask", data);
    },
    async removeTaskAsync(context) {
      context.commit("removeTask");
    }
  }
}