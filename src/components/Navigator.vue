<template>
  <section class="root" :class="{open:data.navigator.open}">
    <div class="header">
      <p class="title">menu</p>
    </div>
    <div class="main">
      aaaaa
      <input type="text" style="border:solid 1px #fff"/>
    </div>
    <div class="background" :class="{open:data.navigator.open}" @click="setNavigator"></div>
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
        this.$store.commit("common/setNavigator", false);
      }
    },
    computed: mapState({
      data: (state) => {
        const {
          navigator
        } = state.common;
        return {
          navigator,
        };
      },
    }),
  };
</script>

<style scoped lang="scss">
  .root {
    background-color: #342d4a;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    left: -100%;
    transition: left 1s;
    z-index: 100;
    &.open {
      left: 0;
    }

    & .header {
      height: 3.5rem;
      width: 100%;
      border-bottom: 2px solid #fcfcfc75;
      padding: .5rem 1rem;
      &>.title {
        line-height: 2.5rem;
      }
    }
    & .main {
      height: calc(100% - 3rem);
      max-height: calc(100% - 3rem);
      padding: 1rem;
      width: 100%;
      & article {
        padding-top: .5rem;
        position: relative;
        width: 100%;
        &+article {
          margin-top: 1rem;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            border: .5px solid #fcfcfc75;
          }
        }
        &>.title {
          width: 100%;
        }
      }
    }

    & .background {
      // background: #fcfcfc35;
      background: #59418f30;
      display: none;
      height: 100%;
      left: 0;
      top: 0;
      width: 50%;
      &.open {
        position: fixed;
        display: unset;
        cursor: pointer;
      }
    }
  }
</style>
