<template>
  <div id="" class="chart" :class="this.className" ref="chart"></div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: "Chart",
  props: {
    data: Object,
    className: String,
  },
  data() {
    return {};
  },
  mounted() {
    this.setEchart();
  },
  updated() {
    if (!this.myChart) {
      this.setEchart();
    }
    this.chartChange();
  },
  computed: {
      opt(){
          // let _this = this;
          return this.data;
      }
  },
  methods: {
    setEchart() {
      let dom = this.$refs.chart;      
      this.Chart = echarts.init(dom);
      this.Chart.setOption(this.opt);
    },
    chartChange() {
      this.myChart.setOption(this.opt);
    //   if (this.typePick == "百分比") {
    //     this.myChart.setOption(this.percent);
    //   }
    //   if (this.typePick == "数值") {
    //     this.myChart.setOption(this.numeric);
    //   }
    },
  },
};
</script>
<style></style>