<template>
  <section id="rootFavoriteSkill">
    <h2 class="titleSection">Favolite skills</h2>
    <v-container>
      <v-layout wrap>
        <v-flex class="rootChart">
          <h4>2020</h4>
          <GChart type="PieChart" :data="data2020.chartData" :options="data2019.chartOptions" />
        </v-flex>
        <v-flex class="rootChart">
          <h4>2019</h4>
          <GChart type="PieChart" :data="data2019.chartData" :options="data2019.chartOptions" />
        </v-flex>
        <v-flex class="rootChart">
          <h4>2018</h4>
          <GChart type="PieChart" :data="data2018.chartData" :options="data2018.chartOptions" />
        </v-flex>
        <v-flex class="rootChart">
          <h4>2017</h4>
          <GChart type="PieChart" :data="data2017.chartData" :options="data2017.chartOptions" />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  import {
    GChart
  } from 'vue-google-charts';
  
  export default {
    namespaced: true,
    data() {
      const option = {
        backgroundColor: "transparent",
        legend: {textStyle: {color: '#fcfcfc', fontSize: 16}},
        chartArea: {
          left: 10,
          top: 10,
          width: '100%',
          height: '100%'
        },
        is3D: false,
      };
  
      return {
        data2020: {
          chartData: [
            ['name', 'rate'],
            ["Vue", 60],
            ["Unity", 20],
            ["C#", 10],
            ["MAYA", 10],
          ],
          chartOptions: Object.assign({}, option)
        },
        data2019: {
          chartData: [
            ['name', 'rate'],
            ["Vue", 65],
            ["jQuery", 20],
            ["tensorflow", 5],
            ["React", 10]
          ],
          chartOptions: Object.assign({}, option)
        },
        data2018: {
          chartData: [
            ['name', 'rate'],
            ["React", 90],
            ["Vue", 10]
          ],
          chartOptions: Object.assign({}, option)
        },
        data2017: {
          chartData: [
            ['name', 'rate'],
            ["React", 70],
            ["jQuery", 30]
          ],
          chartOptions: Object.assign({}, option)
        }
      }
    },
    components: {
      GChart
    },
  };
</script>

<style lang="scss" scoped>
  #rootFavoriteSkill {
    width: 90vw;
    margin: auto;
    position: relative;
  }
  
  .rootChart {
    width: 33%;

    & text {
      font-size: 1rem;
    }
    @include sp {
      width: 100%;
    }
  }
</style>
