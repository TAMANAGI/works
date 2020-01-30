<template>
  <div class="rootBSP">
    <SplitPane :min-percent='20' :default-percent='30' split="vertical">
      <div class="slotBSP" slot="paneL">
          <TaskCards :tasks=tasks />
      </div>
      <div class="slotBSP" slot="paneR">
        <SplitPane split="horizontal">
          <TaskDetail slot="paneL"/>
          <div slot="paneR">XXXXX</div>
        </SplitPane>
      </div>
    </SplitPane>
  </div>
</template>

<script>
// <v-card class="d-flex align-start flex-column taskCardWrapper" color="transparent">
        // <a @click="addTask">追加</a>
  import SplitPane from "vue-splitpane";
  import TaskCards from "../components/Line/TaskCards.vue";
  import TaskDetail from "../components/Line/TaskDetail.vue";
  import {
    mapState
  } from 'vuex';
  
  export default {
    namespaced: true,
    data: () => {
      return {
        width: 0,
        count: 2,
      }
    },
    computed: mapState({
      tasks: (state) => {
        return state.bsp.tasks;
      }
    }),
    created() {
      this.$store.commit("contract");
    },
    methods: {
      addTask() {
        let test = {
        name: "試用期間チェック",
        type: "List",
        user: "Fuji",
        };
        test.name= "退職チェック";
        this.$store.dispatch('bsp/addTaskAsync', test);
      }
    },
    components: {
      SplitPane,
      TaskCards,
      TaskDetail
    },
  }
</script>

<style lang="scss" scoped>
  .rootBSP {
    max-height: 100%;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    padding: .5rem;
    background: aliceblue;
    position: relative;
  }
  .slotBSP {
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    position: relative; 
  }
</style>
