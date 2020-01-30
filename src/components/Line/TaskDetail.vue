import { mdiCheckboxMultipleMarkedOutline } from '@mdi/js';
<template>
  <div class="rootTaskDetail">
    <v-card class="d-flex align-start flex-column contentTaskDetail" flat color="transparent">
      <v-card class="pa-2 rowTaskDetail" tile flat color="transparent">
        <v-bottom-navigation background-color="transparent" height="1rem" style="box-shadow: unset;">
          <v-btn @click="remove">
            <v-icon>mdiAccount</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-card>
      <v-card class="pa-2 mt-auto " tile color="transparent">
        Flex item3
      </v-card>
    </v-card>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  
  export default {
    namespaced: true,
    data() {
      return {}
    },
    computed: mapState({
      task: (state) => {
        const targets = state.bsp.tasks.filter(task => {
          return task.id == state.bsp.current;
        });
        return targets.shift();
      },
    }),
    methods: {
  
    },
    components: {},
  }
</script>

<style lang="scss" scoped>
  .rootTaskDetail {
    height: 100%;
    width: 100%;
    padding: .5rem 1rem;
  }
  
  .contentTaskDetail {
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    .rowTaskDetail {
      width: 100%;
    }
  }
</style>

        // id: "00001",
        // name: "社内公募一覧一覧",
        // type: "list",
        // release: false,
        // releaseDate: null,
        // creator: null,
        // created: null,
        // modifier: null,
        // modified: null,