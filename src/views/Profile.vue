<template>
  <div id="profile" class="root" :class="[data.type, data.color]">
    <Resume/>
    <FavoriteSkill/>
    <Timeline/>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import Resume from "@/components/Resume.vue";
  import Timeline from "@/components/Timeline.vue";
  import FavoriteSkill from "@/components/FavoriteSkill.vue";

  export default {
    namespaced: true,
    created() {
      this.$store.commit("common/setPreferences", false);
    },
    mounted () {
      setTimeout(() => {
        this.$store.commit("common/setNavigator", false);        
      }, 100);
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
    components: {
      Resume,
      Timeline,
      FavoriteSkill,
    },
  }
</script>

<style lang="scss" scoped>
  .root {
    &.float {
      padding: 6rem 0;
    }
    &.static {

    }
  }
</style>
