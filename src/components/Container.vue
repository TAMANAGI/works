<template>
  <v-content class="root" :class="[data.type, data.color]">
    <transition name="view">
      <router-view/>
    </transition>
  </v-content>
</template>

<script>
  import {
    mapState
  } from 'vuex';

  export default {
    name: "tamanagi-container",
    components: {},
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
  }
</script>

<style lang="scss" scoped>
  .root {
    &.float {
    }
    &.static {
    }
  }
  .view-enter-active {
    animation: view-in .5s;
  }
  
  .view-leave-active {
    animation: view-in .5s reverse;
  }
  
  @keyframes view-in {
    0% {
      opacity: 0;
      /* transform: scale(.5); */
    }
    50% {
      opacity: .5;
      /* transform: scale(.75); */
    }
    100% {
      opacity: 1;
      /* transform: scale(1); */
    }
  }
</style>