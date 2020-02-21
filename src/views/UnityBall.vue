<template>
  <div id="unity" class="view-root" :class="[data.type, data.color]">
    <unity class="unity" src="unityBuild/Build/ball/test.json"
      v-bind="{ width: gameWidth, height: gameHeight }"
      unityLoader="unityBuild/Build/ball/UnityLoader.js"></unity>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import Unity from 'vue-unity-webgl'
  
  export default {
    namespaced: true,
    data() {
      return {
        gameWidth: window.innerWidth,
        gameHeight: window.innerHeight / 2
      }
    },
    created() {
      this.$store.commit("common/setPreferences", false);
      window.addEventListener('resize', this.handleResize)
    },
    mounted () {
      setTimeout(() => {
        this.$store.commit("common/setNavigator", false);        
      }, 100);
    },
    // ready: function () {
    //   debugger;
    //   window.addEventListener('resize', this.handleResize)
    // },
    // beforeDestroy: function () {
    //   window.removeEventListener('resize', this.handleResize)
    // },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      // onClick () {
      //   this.$refs.myInstance.message("object", "method", "param")
      // },
      handleResize: function () {
        this.gameWidth = window.innerWidth
      }
    },
    computed: mapState({
      data: (state) => {
        const {
          type,
          color
        } = state.common.header;
        return {
          type,
          color
        };
      },
    }),
    components: {
      Unity
    },
  }
</script>

<style lang="scss" scoped>
  .view-root {
    &.float {
      padding: 6rem 0;
    }
    &.static {}

    & > .unity {
      border-top: 1px solid;
      border-bottom: 1px solid;
      color: #7d7d7d;
      font-size: 1.2rem;
    }
  }
</style>