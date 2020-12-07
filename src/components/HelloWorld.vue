<template>
  <div class="dashboard">
    <div class="mapbg"></div>
    <div class="mapbg1"></div>
    <div class="dashboard-header">
      <div class="dashboard-header-main">
        <div class="dashboard-headercon">
          <div class="chinaUnicom-img space">
            <img width="100%" src="images/ChinaUnicomlogo.svg" alt="" />
          </div>
          <div class="header-title space">北京联通端到端</div>
          <div class="fiveg space">
            <img width="100%" src="images/5G.svg" alt="" />
          </div>
          <div class="header-title space">切片运营NSMF平台</div>
        </div>
      </div>
    </div>
    <!-- 左侧图表 -->
    <div class="dashboard-leftside">
      <div class="model">
        <div class="modelTitle">
          <div>企业/行业分布Top5</div>
        </div>
        <div class="leftsidechart leftside-chart1">
          <div class="leftside-chart1-bg"></div>
          <div class="circlechart circlechart1">
            <div class="circlechart-text" style="margin-top: 0.75rem">
              <span class="num">6</span>个
              <p>教育</p>
            </div>
          </div>
          <div id="circle1" class="circlechart circlechart2">
            <div class="circlechart-text" style="margin-top: 1rem">
              <span class="num">18</span>个
              <p>传媒</p>
            </div>
          </div>
          <div id="circle2" class="circlechart circlechart3">
            <div class="circlechart-text" style="margin-top: 1rem">
              <span class="num">12</span>个
              <p>工业</p>
            </div>
          </div>
          <div class="circlechart circlechart4">
            <div class="circlechart-text" style="margin-top: 0.75rem">
              <span class="num">9</span>个
              <p>工地</p>
            </div>
          </div>
          <div id="circle3" class="circlechart circlechart5">
            <div class="circlechart-text" style="margin-top: 0.75rem">
              <span class="num">11</span>个
              <p>医院</p>
            </div>
          </div>
          <div class="leftside-chart1-legend">
            <div class="chart1-legend chart1-legend1"><span></span> 行业</div>
            <div class="chart1-legend chart1-legend2"><span></span> 企业</div>
          </div>
        </div>
      </div>
      <div class="model">
        <div class="modelTitle">
          <div>切片模型分类</div>
        </div>
        <div id="pieChart1" class="leftsidechart leftside-chart2"></div>
      </div>
      <div class="model">
        <div class="modelTitle">
          <div>切片新增趋势</div>
          <div class="selectbox">
            <span class="time">近半年</span>
          </div>
        </div>
        <!-- <div class="tipsBox">
                    <div class="tips">
                        <span class="">本月</span>
                        <img class="tips-arr" src="images/tips-arr.svg" alt="">
                        <span class="num">16</span>
                    </div>
                </div> -->
        <div id="barChart2" class="leftsidechart"></div>
      </div>
      <div class="model last-model">
        <div class="modelTitle">
          <div>用户新增趋势</div>
          <div class="selectbox">
            <span class="time">近半年</span>
          </div>
        </div>
        <!-- <div class="tipsBox">
                    <div class="tips">
                        <span class="">本月</span>
                        <span class="tips-arr"><img width="100%" src="images/tips-arr.svg" alt=""></span>
                        <span class="num">482</span>
                    </div>
                </div> -->
        <div id="barChart3" class="leftsidechart"></div>
      </div>
    </div>
    <!-- 中间 -->
    <div class="dashboard-middle">
      <div class="dashboard-middle-lists">
        <div class="listItem">
          <P class="data">
            <span class="num">58</span>
            <span>切片</span>
            <!-- <img class="tips-arr" src="images/tips-arr.svg" alt=""> -->
          </P>
          <!-- <P class="info">
                        <span>切片</span><span class="sub">（本月新增：16）</span>
                    </P> -->
        </div>
        <div class="listItem">
          <P class="data">
            <span class="num">9</span>
            <span>企业</span>
            <!-- <img class="tips-arr" src="images/tips-arr.svg" alt=""> -->
          </P>
          <!-- <P class="info">
                        <span>企业</span><span class="sub">（本月新增：2）</span>
                    </P> -->
        </div>
        <div class="listItem">
          <P class="data">
            <span class="num">458</span>
            <span>用户</span>
            <!-- <img class="tips-arr" src="images/tips-arr.svg" alt="">
                        <span class="up">3</span> -->
          </P>
          <!-- <P class="info">
                        <span>用户</span><span class="sub">（本月新增：482）</span>
                    </P> -->
        </div>
      </div>
      <!-- 各个基站点 -->
      <div class="site site1"></div>
      <div class="site-box site1-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-B-1.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">阿里巴巴园区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">阿里巴巴</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">25</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">是</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site2"></div>
      <div class="site-box site2-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-R-1.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">国家电网北区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">国家电网</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">16</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">否</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site3"></div>
      <div class="site-box site3-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-B-2.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">国家电网园区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">国家电网</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">25</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">否</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site4"></div>
      <div class="site-box site4-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-B-4.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">三一重工园区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">三一重工</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">10</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">否</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site5"></div>
      <div class="site-box site5-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-B-5.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">百度本部园区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">百度</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">5</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">是</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site6"></div>
      <div class="site-box site6-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-B-3.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">中央电视台高清直播切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">央视</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">36</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">是</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site7"></div>
      <div class="site-box site7-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-R-2.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">百度东园区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">百度</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">16</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">是</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="site site8"></div>
      <div class="site-box site8-con sitehide">
        <div class="sitecon">
          <div class="img">
            <img width="100%" src="images/in-B-1.svg" alt="" />
          </div>
          <div class="info">
            <div class="title">阿里巴巴北区切片</div>
            <ul>
              <li>
                <span class="dot"></span>
                <span class="label">租户：</span>
                <span class="name">阿里巴巴</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">用户数：</span>
                <span class="name">18</span>
              </li>
              <li>
                <span class="dot"></span>
                <span class="label">是否共享：</span>
                <span class="name">否</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="dashboard-middle-operate">
        <img src="images/operate-btn.svg" alt="" />
      </div>
    </div>
    <!-- 右边图表 -->
    <div class="dashboard-right">
      <div class="model">
        <div class="modelTitle">
          <div>SLA监控</div>
          <div class="selectbox">
            <span class="time">近半年</span>
            <span class="img">
              <img width="100%" src="images/CCTV.svg" alt="" />
            </span>
          </div>
        </div>
        <div class="showinfo">
          <div class="left">
            <div class="num">
              62
              <span class="unit">MBPS</span>
            </div>
            <div class="label">上行速率</div>
          </div>
          <div class="right">
            <ul>
              <li>
                <span class="dot dot1"></span>
                <span class="label">下行速率</span>
                <span class="name">258 Mbps</span>
              </li>
              <li>
                <span class="dot dot2"></span>
                <span class="label">低时延</span>
                <span class="name">32 ms</span>
              </li>
              <li>
                <span class="dot dot3"></span>
                <span class="label">PDU链接数</span>
                <span class="name">3000</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="barChart4" class="rightsidechart rightside-chart1"></div>
      </div>
      <div class="model">
        <div class="modelTitle">
          <div>告警趋势</div>
          <div class="selectbox">
            <span class="time">近3月</span>
          </div>
        </div>
        <div class="showinfo-model3">
          <div class="left-model3">
            <div class="num">
              6
              <span class="unit">个</span>
            </div>
            <div class="label">当前值</div>
          </div>
          <div class="right-model3">
            <ul>
              <li>
                <div class="con">
                  <span class="dot dot1"></span>
                  <span class="label">新增重要</span>
                </div>
              </li>
              <li>
                <div class="con">
                  <span class="dot dot2"></span>
                  <span class="label">新增紧急</span>
                </div>
              </li>
              <!-- <li>
                                <div class="con">
                                    <span class="dot dot3"></span>
                                    <span class="label">现有趋势</span>
                                </div>
                            </li> -->
              <li>
                <div class="con">
                  <span class="dot dot4"></span>
                  <span class="label">新增提示</span>
                </div>
              </li>
              <li>
                <div class="con">
                  <span class="dot dot5"></span>
                  <span class="label">新增次要</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="barChart5" class="rightsidechart rightside-chart1"></div>
      </div>
      <div class="model last-model">
        <div class="modelTitle">
          <div>工单里程碑</div>
        </div>
        <div class="showinfo">
          <div class="left">
            <div class="num line">
              8
              <span class="unit">待开通</span>
            </div>
            <div class="num">
              58
              <span class="unit">已开通</span>
            </div>
          </div>
        </div>
        <div class="rightside-chart2-unit">单位：个</div>
        <div class="rightsidechart rightside-chart2">
          <img src="images/rightside-chart4.svg" width="100%" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted: () => {
    axios
      .get("/user/userinfo")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

*:after,
*:before {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-family: "RobotoRegular", "Microsoft YaHei";
  color: #ffffff;
}

body {
  min-width: 1280px;
  overflow-x: hidden;
  font-weight: normal;
  font-size: 1rem;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

li {
  list-style: none;
}

input,
textarea {
  border: 0;
  background: none;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.01);
  background: #ccc;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  background: #ededed;
}
.dashboard {
  height: 100vh;
  overflow: hidden;
  /* background: url(../images/bg.png) no-repeat; */
  background: #1c2027;
  background-size: 100% 100%;
  position: relative;
}

.mapbg {
  border-top: 2px solid #0488a8;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: url(../images/mapbg.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transition: all 0.1s linear;
}

.mapbg1 {
  border-top: 2px solid #0488a8;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url(../images/mapbg1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transition: all 0.1s linear;
}

.dashboard-header {
  border-top: 2px solid #0488a8;
}

.dashboard-header-main {
  width: 55.625rem;
  height: auto;
  margin: auto;
  background: url(../images/headerbg.svg) no-repeat center;
  background-size: contain;
  position: relative;
  z-index: 2;
  padding: 0.75rem 0;
  color: #ffffff;
  margin-top: -2px;
}

.dashboard-headercon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chinaUnicom-img {
  width: 1.875rem;
  height: 1.5rem;
  vertical-align: middle;
}

.header-title {
  font-size: 1.5rem;
}

.fiveg {
  width: 4.25rem;
}

.space + .space {
  margin-left: 1rem;
}

.dashboard-leftside {
  width: 17%;
  position: absolute;
  z-index: 2;
  left: 2rem;
  top: 4rem;
  height: calc(100% - 4rem);
}

.dashboard-leftside .model {
  /* height: 25%; */
  height: calc(25% - 4rem);
  position: relative;
  margin-bottom: 4rem;
}

.dashboard-leftside .model.last-model {
  height: calc(25% - 3rem);
  margin-bottom: 3rem;
}

.modelTitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modelTitle .selectbox {
  font-size: 0.75rem;
  color: #ffffff;
}

.modelTitle .selectbox span {
  display: inline-block;
  position: relative;
}

.modelTitle .selectbox .time {
  cursor: pointer;
}

.modelTitle .selectbox .time::after {
  content: "";
  display: inline-block;
  width: 0.5rem;
  height: 0.375rem;
  background: url(../images/arr-down.svg) no-repeat;
  margin-left: 0.5rem;
}

.modelTitle .selectbox .img {
  margin-left: 0.75rem;
  width: 6.375rem;
}

.tipsBox {
  position: absolute;
  top: 2.75rem;
  right: 0;
}

.tips {
  display: flex;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  align-items: center;
}

.tips span {
  display: inline-block;
}

.tipsBox .tips .tips-arr {
  margin: 0 0.25rem;
  width: 0.75rem;
}

.tipsBox .tips .num {
  font-size: 1rem;
  color: #ffffff;
}

.leftsidechart {
  width: 100%;
  height: calc(100% - 1.25rem);
}

.leftside-chart1 {
  position: relative;
}

.leftside-chart1-bg {
  width: 100%;
  height: 100%;
  background: url(../images/chart1bg.svg) no-repeat center;
  background-size: contain;
}

.leftsidechart.leftside-chart2 {
  margin-top: 1rem;
  height: calc(100% - 2.25rem);
}

.circlechart {
  position: absolute;
  z-index: 2;
  text-align: center;
  /* display: flex;
    align-items: center;
    justify-content: center; */
}

.circlechart-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.69);
}

.circlechart-text .num {
  color: #ffffff;
  font-size: 1rem;
}

.circlechart1 {
  left: 6%;
  top: 28.4%;
  width: 3.75rem;
  height: 3.75rem;
  background: url(../images/circlechart-13.svg) no-repeat;
  background-size: contain;
}

.circlechart2 {
  left: 20.8%;
  top: 12.2%;
  width: 5.5rem;
  height: 5.5rem;
  background: url(../images/circlechart-18.svg) no-repeat;
  background-size: contain;
}

.circlechart2 .circlechart-text .num {
  font-size: 1.75rem;
}

.circlechart3 {
  left: 49%;
  top: 20%;
  width: 4.375rem;
  height: 4.375rem;
  background: url(../images/circlechart-15.svg) no-repeat;
  background-size: contain;
}

.circlechart4 {
  left: 66.8%;
  top: 7%;
  width: 4rem;
  height: 4rem;
  background: url(../images/circlechart-14.svg) no-repeat;
  background-size: contain;
}

.circlechart5 {
  left: 65%;
  top: 45%;
  width: 4.125rem;
  height: 4.125rem;
  background: url(../images/circlechart-16.svg) no-repeat;
  background-size: contain;
}

.leftside-chart1-legend {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.75rem;
}

.chart1-legend + .chart1-legend {
  margin-left: 1rem;
}

.chart1-legend span {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.25rem;
}

.chart1-legend1 {
  color: #ffffff;
}

.chart1-legend2 {
  color: #9ea4b3;
}

.chart1-legend1 span {
  background: #2c65b4;
}

.chart1-legend2 span {
  background: #494b55;
}

.dashboard-middle-lists {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.listItem .data .num {
  font-size: 3rem;
  color: #e8e8e8;
}

.listItem .data .tips-arr {
  width: 0.875rem;
  height: 1rem;
  vertical-align: top;
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.listItem .data .up {
  font-size: 3rem;
  color: #407cef;
}

.listItem .info {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.sitehide {
  opacity: 0;
  transition: all 0.3 ease-in;
}

.dashboard-middle .site {
  position: absolute;
  z-index: 2;
  width: 2.5rem;
  height: 3rem;
  opacity: 0;
  transition: all 0.1s linear;
}

.dashboard-middle .site-box {
  position: absolute;
  width: 18.875rem;
  height: 9.25rem;
  background: url(../images/sitepop.svg) no-repeat;
  background-size: contain;
  margin-left: -9.4375rem;
  z-index: 5;
}

.dashboard-middle .site1 {
  top: 40.8%;
  left: 35.2%;
  background: url(../images/icon-B-1.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site1-con {
  top: 31.5%;
  left: 35.25%;
}

.dashboard-middle .site2 {
  top: 28.5%;
  left: 43.75%;
  background: url(../images/icon-R-1.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site2-con {
  top: 19.5%;
  left: 43.83%;
}

.dashboard-middle .site3 {
  top: 52.78%;
  left: 43%;
  background: url(../images/icon-B-2.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site3-con {
  top: 43.78%;
  left: 43.05%;
}

.dashboard-middle .site4 {
  top: 61.12%;
  left: 46.5%;
  background: url(../images/icon-B-4.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site4-con {
  top: 52.12%;
  left: 46.55%;
}

.dashboard-middle .site5 {
  top: 43.2%;
  left: 48.5%;
  background: url(../images/icon-B-3.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site5-con {
  top: 34.2%;
  left: 48.53%;
}

.dashboard-middle .site6 {
  top: 36%;
  left: 55.52%;
  background: url(../images/icon-B-5.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site6-con {
  top: 26.8%;
  left: 55.52%;
}

.dashboard-middle .site7 {
  top: 46.66%;
  left: 56.6%;
  background: url(../images/icon-R-2.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site7-con {
  top: 37.66%;
  left: 56.7%;
}

.dashboard-middle .site8 {
  top: 25.3%;
  left: 62.9%;
  background: url(../images/icon-B-1.svg) no-repeat;
  background-size: contain;
  margin-left: -1.25rem;
}

.dashboard-middle .site8-con {
  top: 16.3%;
  left: 63%;
}

.sitecon {
  padding: 1.5rem;
  display: flex;
}

.sitecon .img {
  width: 2.5rem;
  height: 2.5rem;
}

.sitecon .info {
  margin-left: 1rem;
}

.sitecon .info .title {
  font-size: 1.125rem;
  color: #e8e8e8;
}

.sitecon .info li {
  display: flex;
  align-items: center;
}

.sitecon .info li {
  margin-top: 0.25rem;
}

.sitecon .info li span {
  display: inline-block;
}

.sitecon .info .dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: #9ea4b3;
  margin-right: 0.5rem;
}

.sitecon .info .label {
  font-size: 0.75rem;
  color: #9ea4b3;
  width: 3.75rem;
}

.sitecon .info .name {
  font-size: 0.875rem;
  color: #e8e8e8;
}

.dashboard-middle-operate {
  position: absolute;
  bottom: 3rem;
  right: 20%;
  width: 1.25rem;
  height: 5rem;
  cursor: pointer;
  z-index: 5;
}

.dashboard-right {
  width: 17%;
  position: absolute;
  z-index: 2;
  right: 2rem;
  top: 4rem;
  height: calc(100% - 4rem);
}

.dashboard-right .model {
  height: calc(33% - 4rem);
  position: relative;
  margin-bottom: 4rem;
}

.dashboard-right .model.last-model {
  height: calc(33% - 3rem);
  margin-bottom: 3rem;
}

.rightsidechart.rightside-chart1 {
  height: calc(100% - 7.25rem);
}

.showinfo {
  /* height: 4rem; */
  margin: 1.25rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.showinfo .left .num,
.showinfo-model3 .left-model3 .num {
  font-size: 2rem;
  color: #ffffff;
  line-height: 1.5rem;
}

.showinfo .left .num {
  float: left;
  position: relative;
}

.showinfo .left .num + .num {
  margin-left: 1.5rem;
}

.showinfo .left .line::after {
  display: inline-block;
  content: "";
  position: absolute;
  bottom: 0.5rem;
  right: -0.75rem;
  width: 1px;
  height: 0.625rem;
  background: #68707f;
}

.showinfo .left .num .unit,
.showinfo-model3 .left-model3 .num .unit {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.showinfo .left .label,
.showinfo-model3 .left-model3 .label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5rem;
}

.showinfo .right li {
  font-size: 0.75rem;
  display: flex;
  align-items: center;
}

.showinfo .right li span,
.showinfo-model3 .right-model3 li span {
  display: inline-block;
}

.showinfo .right li + li {
  margin-top: 0.5rem;
}

.showinfo .right li .dot,
.showinfo-model3 .right-model3 li .dot {
  border-radius: 50%;
  width: 0.375rem;
  height: 0.375rem;
}

.showinfo .right li .dot1 {
  background-image: linear-gradient(180deg, #cd3838 0%, #f95f5b 100%);
}

.showinfo .right li .dot2 {
  background: #7adfa0;
}

.showinfo .right li .dot3 {
  background: #7adfa0;
}

.showinfo .right li .label {
  color: rgba(255, 255, 255, 0.5);
  width: 4rem;
  margin-left: 0.75rem;
  margin-right: 1.25rem;
}

.showinfo-model3 {
  margin: 1.25rem 0 1rem;
}

.showinfo-model3::after {
  content: "";
  display: table;
  clear: both;
}

.showinfo-model3 .left-model3 {
  float: left;
}

.showinfo-model3 .right-model3 {
  width: 40%;
  float: right;
  margin-top: 1rem;
}

.showinfo-model3 .right-model3 ul::after {
  clear: both;
  display: table;
}

.showinfo-model3 .right-model3 li {
  float: right;
}

.showinfo-model3 .right-model3 li .con {
  display: flex;
  align-items: center;
}

.showinfo-model3 .right-model3 li {
  margin-right: 0.5rem;
}

.showinfo-model3 .right-model3 li:first-child,
.showinfo-model3 .right-model3 li:nth-child(3) {
  margin-right: 0;
}

/* .showinfo-model3 .right-model3 li:first-child,
.showinfo-model3 .right-model3 li:nth-child(4) {
    margin-right: 0;
} */

.showinfo-model3 .right-model3 li .label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 0.25rem;
}

.showinfo-model3 .right-model3 li .dot1 {
  background-image: linear-gradient(0deg, #f5b394 0%, #e77c5b 96%);
}

.showinfo-model3 .right-model3 li .dot2 {
  background-image: linear-gradient(180deg, #cd3838 0%, #f95f5b 100%);
}

.showinfo-model3 .right-model3 li .dot.dot3 {
  width: 0.5rem;
  height: 1px;
  background-image: linear-gradient(270deg, #6365ff 0%, #34beff 100%);
}

.showinfo-model3 .right-model3 li .dot4 {
  background-image: linear-gradient(180deg, #6365ff 0%, #34beff 100%);
}

.showinfo-model3 .right-model3 li .dot5 {
  background-image: linear-gradient(0deg, #f5cc94 0%, #e7b55b 96%);
}

.rightsidechart.rightside-chart2 {
  height: calc(100% - 7.5rem);
}

.rightside-chart2-unit {
  text-align: right;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
}
@media (min-width: 1921px) and (max-width: 4100px) {
  html {
    font-size: 200%;
  }
  /* .dashboard-header-main {
        width: 111.25rem;
    }
    .chinaUnicom-img {
        width: 1.875rem;
        height: 1.5rem;
        vertical-align: middle;
    }
    .fiveg {
        width: 9rem;
    } */
  /* .dashboard-middle .site {
        width: 5rem;
        height: 6rem;
        margin-left: -2.5rem;
    }
    .dashboard-middle .site.site6 {
        margin-left: -2.5rem;
    } */
}

@media (min-width: 1680px) and (max-width: 1920px) {
  html {
    font-size: 100%;
  }
}
</style>
