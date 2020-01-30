<template>
  <section id="rootRoadmap">
    <h2 class="titleSection">Experiences</h2>
    <div class="containerRoadmap">
      <Timeline :show="this.positionY < currentPosition.y" />
    </div>
  </section>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import Timeline from "./Timeline.vue";
  
  export default {
    name: "tamanagi-experience-project",
    data: () => ({
      positionY: 0
    }),
    mounted() {
      let elem = document.getElementById("rootRoadmap");
      let rect = elem.getBoundingClientRect();
      this.positionY = rect.top + window.pageYOffset + 48;
    },
    computed: mapState({
      currentPosition: (state) => {
        const {
          position
        } = state.common;
        return {
          y: position.y,
        };
      },
    }),
    components: {
      Timeline
    },
  };
</script>

<style lang="scss" scoped>
  #rootRoadmap {
    width: 90vw;
    margin: auto;
    position: relative;
  }
  
  .containerRoadmap {}
</style>
