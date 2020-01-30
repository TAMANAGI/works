<template>
  <div class="root">
    <section id="cb-section" class="cb-section">
      <div class="cb-voices" v-for="(data, index) in voices" :key="`voiceIndx${index}`">
        <div class="voice zoomIn" :class="data.owner" v-for="(voice, indexVoice) in data.text" :key="`voiceIndx${indexVoice}`">
          {{voice}}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    namespaced: "tamanagi-chatbot",
    data: () => {
      return {
        voices: [],
        bot_voice: {
          "greeting": {
            text: ["こんにちわ。アフラックさん", "本日はどうなさいましたか？"],
          },
        },
        user_voice: {
          "voice1": {
            text: ["健康応援医療保険の資料が欲しい"],
          },
        }
      }
    },
    created() {
      // this.$store.commit("contract");
      // const greeting = this.bot_voice["greeting"];
      // this.voices.push({
      //   owner: "bot",
      //   ...greeting,
      // });
      // const userVoice1 = this.user_voice["voice1"];
      // this.voices.push({
      //   owner: "user",
      //   ...userVoice1,
      // });
    },
    methods: {
      sendCommnet(comment) {
        this.voices.push({
          owner: "user",
          text: [comment],
        });
  
        const voice = comment;
        this.emotion = voice.avatar;
        this.voices.push({
          owner: "bot",
          text: [comment],
        });
  
        setTimeout(function() {
          var elem = document.getElementById('chatbot-body');
          elem.scrollTop = elem.scrollHeight;
        }, 100)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .root {
    min-height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }
  
  .cb-section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  // .chatbot-body {
  //   flex: 1 0 300px;
  //   overflow-y: auto;
  //   position: relative;

  .cb-voices {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .voice {
    margin: 3px 0;
    padding: .75rem;
    border: 1px solid #7d7d7d;
    animation-duration: .5s;
    &.user {
      align-self: flex-end;
      width: auto;
      border-radius: 20px 20px 4px 20px;
      border: 0;
      background: #7d7d7d;
      color: #fcfcfc;
    }
    &.bot {
      width: auto;
      max-width: 80%;
      border-radius: 20px 20px 20px 4px;
    }
    &.zoomIn {
      -webkit-animation-name: zoomIn;
      animation-name: zoomIn
    }
    @keyframes zoomIn {
      0% {
        -webkit-transform: scale3d(.3, .3, .3);
        opacity: 0;
        transform: scale3d(.3, .3, .3)
      }
      50% {
        opacity: 1
      }
    }
  }
</style>
