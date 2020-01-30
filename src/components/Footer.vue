<template>
  <section id="footer" class="root">
    <div class="contents" :class="[data.type, data.color]">
      <div class="icons">
        <v-icon class="icon" size="24" @click="alert('test')">mdi-bell-outline</v-icon>
        <v-icon class="icon" size="24" @click="alert('test')">mdi-account-outline</v-icon>
        <v-icon class="icon" size="24" @click="alert('test')">mdi-account-outline</v-icon>
      </div>
      <p class="title">TAMANAGI from my girl & boy</p>
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
      return {
        icons: [
          'mdi-home',
          'mdi-email',
          'mdi-calendar',
          'mdi-delete',
        ],
      };
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

    & .title {
      margin: 0;
      text-align: center;
      width: 100%;
    }
  }

  .theme--dark .contents {
    background-color: #10163a;
  }
  .theme--light .contents {
    background-color: #c6f1ef;
  }
  
  .contents {
    box-sizing: border-box;

    @include pc {
      height: 2rem;
      padding: .2rem 1rem;
      display: flex;
      flex-direction: row;
    }
    @include tab {
      display: flex;
      flex-direction: row;
      height: 2rem;
      padding: .2rem 1rem;
    }
    @include sp {
      display: flex;
      flex-direction: column;
      height: 5rem;
      padding: .5rem 1rem;
    }

    &.float {
      border-radius: .5rem;
      position: fixed;
      bottom: .5rem;
      width: calc(100% - 2rem);
      z-index: 10;
    }
    &.static {
      position: static;
      bottom: 0;
      width: 100%;
      left: 1rem;
      z-index: 10;
    }

    & .icons {
      display: flex;
      flex-direction: row;
      justify-content: center;

      @include pc {
        width: 30%;
      }
      @include tab {
        width: 30%;
      }
      @include sp {
        width: 100%;
      }

      & .icon {
        & + .icon {
          margin-left: 1rem;
        }
      }
    }
  }
</style>
