<template>
  <section id="rootResume">
    <h2 class="titleSection">Resume</h2>
    <div class="containerResume">
      <div class="imageResume">
        <v-img src="../assets/images/profile.jpg" lazy-src="../assets/images/profile.jpg" aspect-ratio="1" max-width="400" max-height="300"></v-img>
      </div>
      <div class="contentsResume">
        <v-tabs background-color="transparent" v-model="resumeTab">
          <v-tab v-for="(resume, index) in resumeList" :key="`tab${index}`">
            {{resume.key}}
          </v-tab>
        </v-tabs>
        <v-tabs-items class="detailResume" v-model="resumeTab" background-color>
          <v-tab-item v-for="(resume, index) in resumeList" :key="`tabItems${index}`">
  
            <v-card-text v-if="resume.type=='profile'">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{resume.name}}</v-list-item-title>
                  <div class="overline mb-4">{{resume.birthday}}</div>
                  <v-list-item-subtitle>{{resume.greeting}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
  
            <template v-if="resume.type=='tip'">
              <v-card-text v-for="(item, index) in resume.items" :key="`skill${index}`">
                <h2>{{item.category}}</h2>
                <v-chip-group multiple column active-class="primary--text">
                  <v-chip v-for="(skill, index) in item.list" :key="`tipItem${index}`">
                    {{ skill }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </template>

            <v-card v-if="resume.type=='table'">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">School</th>
                      <th class="text-left">Graduate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in resume.list" :key="`education${index}`">
                      <td>{{ item.name }}</td>
                      <td>{{ item.graduate }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    namespaced: true,
    data() {
      return {
        resumeTab: null,
        resumeList: [{
            key: "Profile",
            type: "profile",
            name: "Daisuke Fujisawa",
            birthday: "1982.02.13",
            greeting: "うんたらかんたら・・・"
          },
          {
            key: "Skill",
            type: "tip",
            items: [{
                category: "Frontend",
                list: [
                  "HTML",
                  "javascript",
                  "css",
                  "Vue",
                  "Vuex",
                  "React",
                  "Redux",
                  "jQuery",
                  "scss",
                  "Amplify",
                  "babel",
                  "webpack",
                  "Sketch",
                ]
              },
              {
                category: "Backend",
                list: [
                  "AWS Cloud Front",
                  "AWS API Gateway",
                  "AWS lambda",
                  "AWS S3",
                  "AWS cognito",
                  "Java",
                  "Spring Framwork",
                  "vb.net",
                  "c#.net",
                ]
              },
              {
                category: "Other",
                list: [
                  "Unity",
                  "JIRA",
                  "Git",
                  "Git Hub",
                ]
              }
            ]
          },
          {
            key: "Education",
            type: "table",
            list: [{
              name: "luther University",
              graduate: "2003.03.31"
            }]
          },
        ],
      }
    },
    components: {},
  };
</script>

<style lang="scss" scoped>
  #rootResume {
    width: 90vw;
    margin: auto;
    position: relative;
  }
  
  .containerResume {
    display: flex;
    @include sp {
      flex-direction: column;
    }
    &>div+div {
      margin-left: 1rem;
      @include sp {
        margin-left: 0;
      }
    }
    &>.imageResume {
      width: 400px;
      height: 270px;
      background: #c6dfef45;
      border-radius: 1rem;
      opacity: .9;
      overflow: hidden;
      z-index: 0;
      @include sp {
        width: auto;
      }
    }
    &>.contentsResume {
      width: calc(100% - 300px);
      z-index: 1;
      @include sp {
        width: unset;
        margin-top: 1rem;
      }
      &>.detailResume {
        padding: 1rem 0 .5rem 0;
        background: transparent;
      }
    }
  }
  
  .imageResume {
    -webkit-animation: roll-in-blurred-left 2s cubic-bezier(.230, 1.000, .320, 1.000) both;
    animation: roll-in-blurred-left 2s cubic-bezier(.230, 1.000, .320, 1.000) both;
  }
  
  @-webkit-keyframes roll-in-blurred-left {
    0% {
      -webkit-transform: translateX(-1000px) rotate(-720deg) scale(0);
      transform: translateX(-1000px) rotate(-720deg) scale(0);
      -webkit-filter: blur(50px);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg) scale(1);
      transform: translateX(0) rotate(0deg) scale(1);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  
  @keyframes roll-in-blurred-left {
    0% {
      -webkit-transform: translateX(-1000px) rotate(-720deg) scale(0);
      transform: translateX(-1000px) rotate(-720deg) scale(0);
      -webkit-filter: blur(50px);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg) scale(1);
      transform: translateX(0) rotate(0deg) scale(1);
      -webkit-filter: blur(0);
      filter: blur(0);
      scale: 1;
      opacity: 1;
    }
  }
</style>
