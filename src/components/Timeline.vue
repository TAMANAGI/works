<template>
  <section id="rootTimeline">
    <h2 class="titleSection">Experiences</h2>
    <div class="contents">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="grey lighten-1" small v-for="(resume, index) in list" :key="`tab${index}`">
          <v-card class="card" :class="{'show': show}">
            <v-card-title class="lighten-2" :class="resume.color">
              <v-icon dark size="28" class="mr-4">
                {{resume.icon}}
              </v-icon>
              <h3 class="white--text font-weight-light">{{resume.name}}</h3>
              <h5 class="white--text font-weight-light" style="position:absolute;right:0;top:0;padding:.25rem;font-size:.75rem;line-height:.75rem;">{{resume.from}} ~ {{resume.to? resume.to: "working"}}</h5>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  {{show}}
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'tamanagi-timeline',
    data() {
      return {
        list: [{
            icon: "mdi-account-multiple-outline",
            color: "green",
            from: "2017/01",
            to: "2018/09",
            name: "[EC] &mall",
            user: "Mitsui-Hudosan",
            role: "Frontend developer",
            skill: ["Hybris", "JSP", "html", "css", "jQuery", "Git Hub", "JIRA"]
          },
          {
            icon: "mdi-account-multiple-outline",
            color: "blue",
            from: "2018/10",
            to: "2019/03",
            name: "[ERP] AdminSystem",
            user: "Fast Retailing",
            role: "Frontend developer",
            skill: ["html", "scss", "React", "Redux", "Sketch", "GitHub", "JIRA", "Confluence"]
          },
          {
            icon: "mdi-account-multiple-outline",
            color: "orange",
            from: "2019/01",
            to: "2019/03",
            name: "[Prototype] Insurance System",
            user: "Aflac",
            role: "Frontend",
            skill: ["html", "css", "React", "Redux", "scss", "aws", "Sketch", "GitHub", "JIRA", "Confluence"]
          },
          {
            icon: "mdi-account-multiple-outline",
            color: "blue",
            from: "2019/04/01",
            to: "",
            name: "[ERP] Workflow System",
            user: "Line Corporation",
            role: "Fullstack",
            skill: ["Java", "Spring Framwork", "html", "css", "jQuery", "GitHub", "JIRA", "Confluence"]
          },
          {
            icon: "mdi-account-multiple-outline",
            color: "blue",
            from: "2019/12",
            to: "",
            name: "[XXXX] XXXX",
            user: "Aflac",
            role: "Frontend",
            skill: ["html", "css", "Vue", "Vuex", "Vuetify", "scss", "GitHub", "JIRA", "Confluence"]
          },
        ]
      };
    },
    props: {
      show: Boolean
    },
  };
</script>

<style scoped lang="scss">
  #rootTimeline {
    width: 90vw;
    margin: auto;
    position: relative;
  }
</style>
