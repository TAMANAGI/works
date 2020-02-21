<template>
  <v-app id="app">
    <Header/>
    <Container/>
    <Navigator/>
    <Preferences/>
    <Footer/>
  </v-app>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import Header from "./components/Header.vue";
  import Container from "./components/Container.vue";
  import Navigator from "./components/Navigator.vue"
  import Preferences from "./components/Preferences.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "App",
    data() {
      return {};
    },
    created () {
      this.$vuetify.theme.dark = true;
    },
    computed: mapState({
      data: (state) => {
        const {
          mode
        } = state.common;
        return {
          mode
        };
      },
    }),
    components: {
      Header,
      Container,
      Navigator,
      Preferences,
      Footer
    }
  };
</script>

<style lang="scss" scoped>
  #app {
    min-height: 100vh;
    width: 100vw;
    -webkit-overflow-scrolling: touch;
  }
</style>
