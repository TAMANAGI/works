<template>
  <div id="profile">
    <Resume/>
    <FavoriteSkill/>
    <Roadmap/>
  </div>
</template>

<script>
  import Resume from "../components/Resume.vue";
  import Roadmap from "../components/Roadmap.vue";
  import FavoriteSkill from "../components/FavoriteSkill.vue";

  export default {
    namespaced: true,
    created() {
      this.$store.commit("contract");
    },
    components: {
      Resume,
      Roadmap,
      FavoriteSkill
    },
  }
</script>

<style lang="scss" scoped>
  
</style>
