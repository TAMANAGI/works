<template>
  <section class="root">
    <v-icon class="icon" size="24" color="white" @click="toggleMenu">mdi-settings-outline</v-icon>
    <div class="menu" :class="{open:openMenu}">
      <div class="header">
        <p class="title">thema customizer</p>
      </div>
      <div class="main">
        <article>
          <p class="title">header type</p>
          <v-radio-group v-model="data.type" :mandatory="false" @change="changeType">
            <v-radio label="Float" value="float"></v-radio>
            <v-radio label="Static" value="static"></v-radio>
          </v-radio-group>
        </article>
        <article>
          <p class="title">thema type</p>
          <v-switch v-model="$vuetify.theme.dark" hide-details inset label="Theme Dark"></v-switch>
        </article>
      </div>
    </div>
    <div class="background" :class="{open:openMenu}" @click="toggleMenu"></div>
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
        openMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.openMenu = !this.openMenu;
      },
      changeType() {
        this.$store.commit("common/setHeaderType", this.data.type);
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
  .root {
    align-items: center;
    background-color: #10163a;
    border-radius: .5rem 0 0 .5rem;
    display: flex;
    height: 2rem;
    justify-content: center;
    position: fixed;
    right: 0;
    top: 50%;
    width: 2rem;
    z-index: 10;
    & .icon {
      animation: 4s linear infinite rotateIcon;
      -webkit-animation: 4s linear infinite rotateIcon;
    }
  }
  
  .menu {
    // background-color: #342d4a;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    width: 80%;
    right: -100%;
    transition: right 1s;
    border-radius: .5rem;
    opacity: 0.9;
    z-index: 101;

    @include pc {
      width: 25%;
    }
    @include tab {
      width: 30%;
    }
    @include sp {
      width: 100%;
    }

    &.open {
      right: 0;
    }
    & .header {
      height: 3.5rem;
      width: 100%;
      border-bottom: 1px solid #fcfcfc75;
      padding: 0 1rem;
      &>.title {
        line-height: 3.5rem;
        font-size: 1.8rem !important;
        margin-bottom: 0;
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
  }

  .theme--dark {
    .header {
      background: #000000;
    }

    .background {
      background: #4caf5040;
    }
  }

  .theme--light {
    .header {
      background: #ffffff;
    }
    .background {
      background: #00f0ff2b;
    }
  }

  .background {

    display: none;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    &.open {
      position: fixed;
      display: unset;
      cursor: pointer;
    }
  }
  
  @keyframes rotateIcon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
