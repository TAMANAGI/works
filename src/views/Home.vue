<template>
  <div id="home" class="view-root" :class="[data.type, data.color]">
    <div class="topview">
      <v-img class="logo" src="@/assets/images/logo.png" />
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  
  export default {
    namespaced: true,
    created() {
      this.$store.commit("common/setPreferences", true);
    },
    mounted () {
      setTimeout(() => {
        this.$store.commit("common/setNavigator", false);
        var msg = new SpeechSynthesisUtterance('Welcome');
        window.speechSynthesis.speak(msg);
      }, 100);
    },
    methods: {
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
    })
  }
</script>

<style lang="scss" scoped>
  .view-root {
    box-sizing: border-box;
    overflow-y: scroll;
    width: 100%;
  }
  
  .topview {
    position: relative;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-image: url("../assets/images/home.jpg");
  }

  .float > .topview {
    min-height: 100vh;
  }

  .static > .topview {
    @include tab {
      min-height: calc(100vh - 3.5rem - 32px);
    }
    @include sp {
      min-height: calc(100vh - 3.5rem - 80px);
    }
  }
  
  .logo {
    position: absolute;
    -webkit-animation: bounce-in-top 3s both;
    animation: bounce-in-top 3s both;
    @include pc {
      left: 1rem;
      max-width: 400px;
      top: 8rem;
      width: 50%;
    }
    @include tab {
      left: 1rem;
      max-width: 400px;
      top: 8rem;
      width: 50%;
    }
    @include sp {
      left: 1rem;
      top: 15%;
      width: 65%;
    }
  }
  
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-250px);
      transform: translateY(-250px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-250px);
      transform: translateY(-250px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
</style>
