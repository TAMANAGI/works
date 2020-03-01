<template>
  <section class="root" :class="[data.type]">
    <div class="contents" :class="[data.type, data.color]">
      <v-icon class="icon" size="24" @click="setNavigator">mdi-menu</v-icon>
    </div>
  </section>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  
  export default {
    namespaced: true,
    data() {
      return {};
    },
    methods: {
      setNavigator() {
        this.$store.commit("common/setNavigator", true);
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
  };
</script>

<style scoped lang="scss">
  @include common;
  .root {
    display: flex;
    justify-content: center;
    z-index: 5;
    width: 100%;
  }
  
  .theme--dark .contents {
    background-color: #10163a;
  }
  
  .theme--light .contents {
    background-color: #c6f1ef;
  }
  
  .contents {
    box-sizing: border-box;
    display: flex;
    padding: .8rem .75rem;
    height: 4rem;
    width: 4rem;
    @include tab {
      & *:first-of-type {
        font-size: 2rem !important;
      }
      & *:not(:first-of-type) {
        display: none;
      }
    }
    @include sp {
      flex-direction: row;
      & *:not(:first-of-type) {
        display: block;
      }
    }
    &.float {
      border-radius: .5rem;
      justify-content: center;
      position: fixed;
      left: 1rem;
      top: .5rem;
      z-index: 10;
      & *:first-of-type {
        font-size: 2.5rem !important;
      }
      & *:not(:first-of-type) {
        display: none;
      }
    }
    &.static {
      position: static;
      justify-content: flex-start;
      height: 3.5rem;
      width: 100%;
      z-index: 10;
    }
    &>.icon {
      margin: 0;
    }
  }
</style>
