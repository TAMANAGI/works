<template>
  <section class="root">
    <div class="contents" :class="[data.type, data.color]">
      <v-icon class="icon" size="24" @click="setNavigator">mdi-menu</v-icon>
      <div class="spacer"></div>
      <v-icon class="icon" size="24" @click="alert('test')">mdi-bell-outline</v-icon>
      <v-icon class="icon" size="24" @click="alert('test')">mdi-account-outline</v-icon>
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
    justify-content: center;
    padding: .8rem 1rem;

    @include pc {
      flex-direction: column;
      height: 4rem;
      width: 4rem;

      & *:first-of-type {
        font-size: 2.5rem !important;
      }

      & *:not(:first-of-type) {
        display: none;
      }
    }
    @include tab {
      flex-direction: column;
      height: 4rem;
      width: 4rem;

      & *:first-of-type {
        font-size: 2.5rem !important;
      }

      & *:not(:first-of-type) {
        display: none;
      }
    }
    @include sp {
      flex-direction: row;
      height: unset;

      & *:first-of-type {
        font-size: 24px !important;
      }

      & *:not(:first-of-type) {
        display: block;
      }
    }

    &.float {
      border-radius: .5rem;
      position: fixed;
      top: .5rem;
      z-index: 10;

      @include pc {
        left: 1rem;
        height: 4rem;
        width: 4rem;
      }
      @include tab {
        left: 1rem;
      }
      @include sp {
        left: 1rem;
        width: calc(100% - 2rem);
      }

      & *:first-of-type {
        font-size: 2.5rem !important;
      }

      & *:not(:first-of-type) {
        display: none;
      }
    }
    &.static {
      position: static;
      width: 100%;
      z-index: 10;
    }

    & > .icon {
      margin: 0 .5rem;
    }
  }

</style>
