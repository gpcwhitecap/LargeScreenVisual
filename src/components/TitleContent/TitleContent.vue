<template>
  <div class="model">
    <div class="modelTitle">
      <div>{{ this.title }}</div>
      <div v-if="this.select" class="selectbox">
        <span class="time" v-for="item in this.select" :key="item.val">{{item.text}}</span>
      </div>
    </div>

    <slot />
    <!-- <Chart :data="this.option" className="leftsidechart leftside-chart2" /> -->
    <!-- <div id="pieChart1" class="leftsidechart leftside-chart2"></div> -->
  </div>
</template>
<script>
// import Chart from '../Chart/Chart';
export default {
  name: "TitleContent",
  components: {
    // Chart
  },
  props: {
    data: Object,
    select: Array,
    title: String,
    className: String,
  },
  data() {
    return {
      option: {},
    };
  },
  updated() {
    // if (!this.myChart) {
    //   this.setEchart();
    // }
    // this.chartChange();
  },
  computed: {
    // opt() {
    //   let _this = this;
    //   return this.data;
    // },
  },
  mounted() {
    console.log(this.select)
    // setEchart() {
    // },
  },
};
</script>
<style src="./TitleContent.less" lang="less"></style>