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
      <TitleContent title="切片模型分类1">
        <Chart
          :data="this.pieChart"
          className="leftsidechart leftside-chart2"
        />
      </TitleContent>
      <TitleContent title="切片新增趋势" :select="this.selectTime">
        <Chart
          :data="this.barOption2"
          
          className="leftsidechart"
        />
      </TitleContent>

      <!-- <TitleContent class="last-model" title="用户新增趋势" :select="this.selectTime">
        <Chart
          :data="this.barChart3"
          
          className="leftsidechart"
        />
      </TitleContent> -->
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
      <TitleContent title="SLA监控" :select="this.selectTime">
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
        <Chart
          :data="this.barOption4"
          
          className="rightsidechart rightside-chart1"
        />
      </TitleContent>

      <TitleContent title="告警趋势" :select="this.selectTime">
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
        <Chart
          :data="this.barOption5"
          
          className="rightsidechart rightside-chart1"
        />
      </TitleContent>

      <TitleContent title="工单里程碑">
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
      </TitleContent>
    </div>
  </div>
</template>

<script>
import { pieData, barOption2,barOption3,barOption4,barOption5} from "../../data/pieChart";
import TitleContent from "../../components/TitleContent/TitleContent";
import Chart from "../../components/Chart/Chart";
import axios from "axios";
export default {
  name: "MainView",
  components: {
    TitleContent,
    Chart,
  },
  data() {
    return {
      selectTime: [
        {
          text: "近半年",
          val: "近半年",
        },
      ],
      pieChart: pieData,
      barOption2: barOption2,
      barOption3: barOption3,
      barOption4: barOption4,
      barOption5: barOption5,
    };
  },
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
<style src="./MainView.less" lang="less"></style>
