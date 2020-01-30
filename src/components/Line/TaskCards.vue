<template>
  <div class="rootTasks">
    <div class="actionTasks">
      <v-bottom-navigation background-color="transparent" height="2.5rem" style="box-shadow: unset;">
        <Editor/>
        <v-btn @click="remove">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <div class="contentTasks">
      <v-card class="rootCard mx-auto" @click="setCurrent(task.id)" v-for="(task, index) in tasks" :key="`nbaTask${index}`" :class="{current:task.id==current}" :elevation="task.id==current ? 24 : 1">
        <v-card-text class="detailCard">
          <p class="categoryCard">【{{task.type}}】</p>
          <p class="titleCard">{{task.name}}</p>
          <div class="detailCard">
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  import Editor from "./TaskCardEditor.vue";
  
  export default {
    namespaced: true,
    data() {
      return {}
    },
    computed: mapState({
      tasks: (state) => {
        return state.bsp.tasks;
      },
      current: (state) => {
        return state.bsp.current;
      },
    }),
    methods: {
      setCurrent(id) {
        this.$store.commit('bsp/updateCurrentTask', id);
      },
      remove() {
        this.$store.commit('bsp/removeTask');
      },
    },
    components: {
      Editor,
    },
  }
</script>

<style lang="scss" scoped>
  .rootTasks {
    height: 100%;
    width: 100%;
    &>.actionTasks {
      height: 2.5rem;
      width: 100%;
    }
    &>.contentTasks {
      margin-top: 1rem;
      max-height: calc(100% - 3rem - 1rem);
      overflow-y: scroll;
    }
  }
  
  .rootCard {
    width: calc(100% - 1rem);
    &+.rootCard {
      margin-top: 1.5rem;
    }
    .detailCard {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: .5rem;
        background-color: #ff9e6670;
        transition: width 1s;
        border-radius: 4px 0 0 4px
      }
      &:hover {
        &::before {
          width: 100%;
          border-radius: 4px
        }
      }
      & p {
        margin: 0;
        word-break: keep-all;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      & .categoryCard {
        font-size: .6rem;
        position: absolute;
        top: 0;
        right: 0;
        color: #7d7d7d75;
      }
      & .titleCard {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
  }
</style>