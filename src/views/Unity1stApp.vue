<template>
  <div id="unity" class="view-root" :class="[data.type, data.color]">
    <unity class="unity" src="/unity/bounce-ball/Build/bounce-ball.json"
      v-bind="{ width: gameWidth, height: gameHeight }"
      unityLoader="/unity/bounce-ball/Build/UnityLoader.js"></unity>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import unity from 'vue-unity-webgl'
  
  export default {
    namespaced: true,
    data() {
      return {
        gameWidth: window.innerWidth > 900? 900: window.innerWidth,
        gameHeight: window.innerHeight / 2
      }
    },
    created() {
      this.$store.commit("common/setPreferences", false);
    },
    mounted () {
      setTimeout(() => {
        this.$store.commit("common/setNavigator", false);        
      }, 100);
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
      unity
    },
  }
</script>

<style lang="scss" scoped>
  .view-root {
    &.float {
      padding: 6rem 0;
    }
    &>.unity {
      border-top: 1px solid;
      border-bottom: 1px solid;
      color: #7d7d7d;
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>