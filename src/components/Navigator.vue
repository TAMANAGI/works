<template>
  <section class="root" :class="{open:data.navigator.open}">
    <div class="header">
      <p class="title">menu</p>
      <v-icon class="icon retrun" size="36" @click="setNavigator">mdi-window-close</v-icon>
    </div>  
    <div class="main">
      <article>
        <div v-for="(link, index) in data.navigator.links" :key="`navlink${index}`">
          <template v-if="link.type=='list'">
            {{link.title}}
            <ul>
              <li v-for="(child, index) in link.children" :key="`navChildlink${index}`" class="sub-title">
                <router-link class="menu" :to="child.url">{{child.title}}</router-link>
              </li>
            </ul>
          </template>
          <template v-if="link.type=='item'">
            <router-link class="menu" :to="link.url">{{link.title}}</router-link>
          </template>
        </div>
      </article>
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
        this.$store.commit("common/setNavigator", false);
      },
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
    height: 100%;
    position: fixed;
    top: 0;
    width: 80%;
    left: -100%;
    transition: left .8s;
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
      left: 0;
    }

    & .header {
      display: flex;
      height: 3.5rem;
      width: 100%;
      border-bottom: 1px solid #fcfcfc75;
      padding: 0 1rem;

      &>.title {
        line-height: 3.5rem;
        font-size: 1.8rem !important;
        margin-bottom: 0;
        width: 90%;
      }
      &>.retrun {
        width: 10%;
      }
    }
    & .main {
      height: calc(100% - 3rem);
      max-height: calc(100% - 3rem);
      padding: 1rem;
      width: 100%;
      
      & article {
        font-size: 1.5rem;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        & a {
          color: unset !important;
          cursor: pointer;
          padding-left: 1rem;
          position: relative;

          &::before {
            content: "";
            width: 0.5rem;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fcfcfc;
            transition: width 1s;
            opacity: 0.3;
          }

          &:hover {
            color: #7d7d7d !important;
            text-decoration: none;

            &::before {
              content: "";
              width: 100%;
            }
          }

          & + a {
            margin-top: 1rem;
          }

        }

        &+article {
          margin-top: 1rem;
        }
        &>.title {
          width: 100%;
        }

        & .sub-title {
          padding-left: 1rem;
          list-style: none;
        }
      }
    }
  }

  .theme--dark {
    .header {
      background: #000000;
    }
    .main {
      background: #044286ed;
    }
  }

  .theme--light {
    .header {
      background: #ffffff;
    }
    .main {
      background: #d3ffe5ed;
    }
  }
</style>
