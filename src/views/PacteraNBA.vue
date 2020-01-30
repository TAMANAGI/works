<template>
  <div class="rootNba">
   <SplitPane :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        <component :is="Chatbot" ></component>
      </template>
      <template slot="paneR">
        <SplitPane split="horizontal">
          <template slot="paneL">
            詳細１が表示されます
          </template>
          <template slot="paneR">
            詳細２が表示されます
          </template>
        </SplitPane>
      </template>
    </SplitPane>
  </div>
</template>

<script>
  // import {
  //   mapState
  // } from 'vuex';
  import SplitPane from "vue-splitpane";
  import Chatbot from "../components/Chatbot.vue";

  export default {
    namespaced: true, 
    data: () => {
      return {
        width: 0,
        count: 2,
        contents: ["Chatbot","Chatbot"]
      }
    },
    created() {
      this.$store.commit("contract");
    },
    methods: {
    },
    components: {
      SplitPane,
      Chatbot
    },
  }
</script>

<style lang="scss" scoped>
  .rootNba {
    max-height: 100%;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    padding: .5rem;
    background: aliceblue;
    position: relative; 
  }
</style>
