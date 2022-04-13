<template>
  <div class="page">
    <div v-if="result.physical == ''">
      <div class="index" v-if="gender == null">
        <div class="title">
          <div class="main-title">Z式养生·中医体质自测</div>
          <div class="sub-title">本测试来自《中医体质分类与判定》国家标准</div>
        </div>

        <div class="sex-box">
          <div class="sex-box__title">请选择您的性别：</div>
          <div class="sex">
            <div class="btn male" @click="onSelectGender(0)">
              <img src="/male.svg" alt="" srcset="" />
              <div>男</div>
            </div>
            <div class="btn female" @click="onSelectGender(1)">
              <img src="/female.svg" alt="" srcset="" />
              <div>女</div>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div class="xiaohongshu">
          <img
            src="/xiaohongshu.png"
            width="40"
            height="40"
            style="background: #fff; border-radius: 5px"
          />
          <div class="text">X</div>
          <img
            src="/logo.png"
            width="40"
            height="40"
            style="border-radius: 5px"
          />
        </div>
      </div>

      <div class="content" v-if="gender != null">
        <div class="top">
          <div class="top-title">
            <div class="top-title__main-title">
              <img
                src="/logo.png"
                width="50"
                height="50"
                style="border-radius: 5px"
              />
              <div class="right">
                <div class="top-title__main-title__text">中医体质自测</div>
                <div class="top-title__sub-title">
                  本测试来自《中医体质分类与判定》国家标准
                </div>
              </div>
            </div>
          </div>
          <div class="info">‼️ 请根据最近三个月的体验和感觉回答</div>
        </div>

        <ol class="quesitem" id="questionData">
          <template v-for="(item, index) in questionDataList">
            <li v-if="true" :key="item.id" :id="`question_${index}`">
              <p id="problem">{{ index + 1 }}. {{ item.questionText }}</p>
              <check-btn
                :index="index"
                v-model:value="questionDataList[index].value"
                @change="onChange(index)"
              />
            </li>
          </template>
          <div class="submit-btn" @click="onSubmit">查看结果</div>
        </ol>
      </div>
    </div>

    <div class="result" v-else>
      <div class="top">
        <div>Z式养生</div>
        <div>养生绝不放松，走上人生巅峰</div>
      </div>
      <div class="my">
        <div class="label">你的体质</div>
        <div class="tizhi">{{ result.physical }}</div>
      </div>
      <div class="both">
        <div>兼有体质</div>
        <div>{{ result.both }}</div>
      </div>

      <div class="tender">
        <div>倾向体质</div>
        <div>{{ result.tenden }}</div>
      </div>

      <div id="echart"></div>

      <!-- <div>
        <h5 class="title">得分：</h5>
        <ol class="scorelist" id="scorelist">
          <li class="list-group-item">平和质：{{ PingheScore }}分</li>
          <li class="list-group-item">气虚质：{{ QiXuScore }}分</li>
          <li class="list-group-item">阳虚质：{{ YangXuScore }}分</li>
          <li class="list-group-item">阴虚质：{{ YingXuScore }}分</li>
          <li class="list-group-item">痰湿质：{{ TanShiScore }}分</li>
          <li class="list-group-item">湿热质：{{ ShiReScore }}分</li>
          <li class="list-group-item">血瘀质：{{ XueYuScore }}分</li>
          <li class="list-group-item">气郁质：{{ QiYuScore }}分</li>
          <li class="list-group-item">特禀质：{{ TeBingScore }}分</li>
        </ol>
      </div> -->

      <h5 class="title">结果解析：</h5>
      <ol class="resultlist" id="resultlist">
        <li v-for="item in result.healthGuide" :key="item.id">
          <h5 class="totaltitle">{{ item.name }}</h5>
          <p><strong>常见表现：</strong>{{ item.changjianbiaoxian }}</p>
          <p><strong>形体特征：</strong>{{ item.xingtitezheng }}</p>
          <p><strong>精神特征：</strong>{{ item.jingshentezheng }}</p>
          <p><strong>心理特征：</strong>{{ item.xinlitezheng }}</p>
          <p><strong>发病倾向：</strong>{{ item.fabingqingxiang }}</p>
          <p><strong>调养方式：</strong></p>
          <ul class="tiaoyanglist" id="example">
            <li v-for="op in item.tiaoyangfangshi" :key="op">
              {{ op }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import { Pagination, Navigation } from "Swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import { QUESTION_LIST, RESULT_LIST, TYPE_PHYSIQUE_MAP } from "./data";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    // NButton,
  },
  data() {
    return {
      questionDataList: [],

      PingheScore: 0,
      QiXuScore: 0,
      YangXuScore: 0,
      YingXuScore: 0,
      TanShiScore: 0,
      ShiReScore: 0,
      XueYuScore: 0,
      QiYuScore: 0,
      TeBingScore: 0,

      result: {
        isPinghe: null, // 是否平和
        physical: "", // 当前体质
        both: [], // 兼有体质（去掉最高分）
        tenden: [], // 体质倾向
        healthGuide: [], // 健康建议
      },
    };
  },
  methods: {
    onChange(index) {
      document.getElementById(`question_${index}`).scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    },

    /**
     * 计算分数
     * @param type 体质类型：
     * 1: 平和质
     * 2: 气虚质
     * 3: 阳虚质
     * 4: 阴虚质
     * 5: 痰湿质
     * 6: 湿热质
     * 7: 血瘀质
     * 8: 气郁质
     * 9: 特禀质
     */
    calculateScore(type: Number) {
      const currentTypeList = this.questionDataList.filter(
        (i: any) =>
          i.type.includes(type) &&
          (i.gender != null ? i.gender === this.gender : true)
      );
      let totalScore = 0;
      for (const item of currentTypeList) {
        let _score = item.value;
        if (item.is_decrease) {
          _score = 6 - item.value;
        }
        totalScore += _score;
      }
      const len = currentTypeList.length;
      const _score = ((totalScore - len) / (len * 4)) * 100;
      return _score.toFixed(1);
    },

    onSubmit() {
      const PingheScore = this.calculateScore(1);
      const QiXuScore = this.calculateScore(2);
      const YangXuScore = this.calculateScore(3);
      const YingXuScore = this.calculateScore(4);
      const TanShiScore = this.calculateScore(5);
      const ShiReScore = this.calculateScore(6);
      const XueYuScore = this.calculateScore(7);
      const QiYuScore = this.calculateScore(8);
      const TeBingScore = this.calculateScore(9);

      this.PingheScore = PingheScore;
      this.QiXuScore = QiXuScore;
      this.YangXuScore = YangXuScore;
      this.YingXuScore = YingXuScore;
      this.TanShiScore = TanShiScore;
      this.ShiReScore = ShiReScore;
      this.XueYuScore = XueYuScore;
      this.QiYuScore = QiYuScore;
      this.TeBingScore = TeBingScore;

      const scoreList = [
        { type: 1, value: PingheScore },
        { type: 2, value: QiXuScore },
        { type: 3, value: YangXuScore },
        { type: 4, value: YingXuScore },
        { type: 5, value: TanShiScore },
        { type: 6, value: ShiReScore },
        { type: 7, value: XueYuScore },
        { type: 8, value: QiYuScore },
        { type: 9, value: TeBingScore },
      ];

      console.log(`\n
1: 平和质 得分: ${PingheScore}\n
2: 气虚质 得分: ${QiXuScore}\n
3: 阳虚质 得分: ${YangXuScore}\n
4: 阴虚质 得分: ${YingXuScore}\n
5: 痰湿质 得分: ${TanShiScore}\n
6: 湿热质 得分: ${ShiReScore}\n
7: 血瘀质 得分: ${XueYuScore}\n
8: 气郁质 得分: ${QiYuScore}\n
9: 特禀质 得分: ${TeBingScore}\n
`);

      // 平和质判定标准：
      // 1. 除平和质外没有超过 40分的体质
      // 2. 平和质 >= 60分

      // 非平和质判定标准：
      // 1. 平和质 < 60分 或者 除平和质外有 >= 30 && < 40 分的体质

      // 体质判定标准：
      // 1. >= 40分 就属于这种体质（取最大值）
      // 2. >= 30 && < 40分 属于有这种体质的倾向 需要注意

      // 结果：
      // 1. 当前体质（分数最高的体质）
      // 2. 兼有体质（其他 >= 40分的体质）
      // 3. 体质倾向（>= 30 && < 40分的体质）

      const scoreList1 = []; // >= 40分的体质
      const scoreList2 = []; // >= 30 && < 40分的体质

      console.log(scoreList1);
      console.log(scoreList2);

      for (const item of scoreList) {
        if (item.type != 1) {
          if (item.value >= 40) {
            scoreList1.push(item);
          }
          if (item.value >= 30 && item.value < 40) {
            scoreList2.push(item);
          }
        }
      }

      // 结果
      const result = {
        isPinghe: null, // 是否平和
        physical: "", // 当前体质
        both: [], // 兼有体质（去掉最高分）
        tenden: [], // 体质倾向
        healthGuide: [], // 健康建议
      };

      if (PingheScore >= 60 && scoreList1.length == 0) {
        // 平和质
        result.isPinghe = true;
        result.physical = "平和质";
        for (const item of scoreList) {
          if (item.type != 1) {
            if (item.value >= 30 && item.value < 40) {
              result.tenden.push(TYPE_PHYSIQUE_MAP[item.type]);
            }
            if (item.value >= 40) {
              result.both.push(TYPE_PHYSIQUE_MAP[item.type]);
            }
          }
        }
        result.healthGuide.push(RESULT_LIST.find((i) => i.type === 1));
      } else {
        // 非平和质
        result.isPinghe = false;

        if (scoreList1.length > 0) {
          const _list = scoreList1.sort((a, b) => {
            return a.value - b.value;
          });

          // 体质(最大值)
          result.physical = TYPE_PHYSIQUE_MAP[_list[0].type];
          result.healthGuide.push(
            RESULT_LIST.find((i) => i.type === _list[0].type)
          );

          // 兼有
          result.both = _list
            .filter((_item, index) => index > 0)
            .map((i) => TYPE_PHYSIQUE_MAP[i.type]);

          // 倾向
          result.tenden = scoreList2.map((i) => TYPE_PHYSIQUE_MAP[i.type]);
        } else {
          const _list = scoreList2.sort((a, b) => {
            return a.value - b.value;
          });

          // 体质(最大值)
          result.physical = TYPE_PHYSIQUE_MAP[_list[0].type];

          result.healthGuide.push(
            RESULT_LIST.find((i) => i.type === _list[0].type)
          );
        }
      }

      console.log(result);
      this.result = result;

      this.initChart();
    },

    initChart() {
      let {
        PingheScore, // 平和
        QiXuScore, // 气虚
        YangXuScore, // 阳虚
        YingXuScore, // 阴虚
        TanShiScore, // 痰湿质
        ShiReScore, // 湿热质
        XueYuScore, // 血瘀质
        QiYuScore, // 气郁质
        TeBingScore, // 特禀质
      } = this;
      // QiXuScore = 11;
      // YangXuScore = 55;
      // YingXuScore = 33;
      // TanShiScore = 22;
      // ShiReScore = 33;
      // XueYuScore = 34;
      // QiYuScore = 44;
      // TeBingScore = 11;
      const chartDom = document.getElementById("echart");
      const myChart = echarts.init(chartDom);

      console.log(chartDom);
      myChart.setOption({
        xAxis: {
          type: "category",
          data: [
            "气虚",
            "阳虚",
            "阴虚",
            "痰湿",
            "湿热",
            "血瘀",
            "气郁",
            "特禀",
          ],
        },
        yAxis: {
          type: "value",
          show: false,
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 0,
              lte: 40,
              color: "#007aff",
            },
            {
              gt: 40,
              //中间部分颜色显示
              color: "#ed6858",
            },
            {
              gt: 100, //这儿设置基线上下颜色区分 基线上面为红色
              color: "#ed6858",
            },
          ],
        },
        series: [
          {
            data: [
              QiXuScore,
              YangXuScore,
              YingXuScore,
              TanShiScore,
              ShiReScore,
              XueYuScore,
              QiYuScore,
              TeBingScore,
            ],
            type: "bar",
            markLine: {
              lineStyle: { type: "solid", width: 1 },
              data: [{ type: "average", yAxis: 40 }],
              label: {
                normal: {
                  formatter: "判定", // 这儿设置安全基线
                },
              },
            },
          },
        ],
      });
    },
  },

  setup() {
    // 性别
    const gender = ref(null);
    // 题库
    const questionDataList = ref(null);

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const onSelectGender = (value) => {
      gender.value = value;

      questionDataList.value = QUESTION_LIST.filter((i) =>
        i.gender != null ? i.gender === value : true
      );
    };

    return {
      gender,
      modules: [Pagination, Navigation],
      onSwiper,
      onSlideChange,
      onSelectGender,
      questionDataList,
    };
  },
});
</script>

<style lang="css" scoped>
.page {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  background: #a7d168;
}

/* 首页 */

.index {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #a7d168 0%, #f5e617 100%);
}

.index .bg:first-of-type {
  margin-top: 200px;
}

.index .title {
  margin-top: -200px;
  text-align: center;
}
.index .title .main-title {
  font-size: 30px;
  font-weight: 500;
  color: #242421;
}
.index .title .sub-title {
  margin-top: 5px;
  font-size: 16px;
  color: #7e7e7e;
}

.index .sex-box {
  margin-top: 70px;
}

.index .sex-box .sex-box__title {
  font-size: 18px;
  text-align: left;
  margin-bottom: 15px;
}

.index .sex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index .sex .btn:first-of-type {
  margin-right: 20px;
}
.index .sex .btn {
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #32373a;
  font-size: 16px;
  border-radius: 8px;
  background-color: #f5e617;
  border: 2px solid #32373a;
}

.index .sex .btn.male {
  /* background-color: #00a6ff; */
}

.index .sex .btn.female {
  /* background-color: #ff64bc; */
}

.xiaohongshu {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  height: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.xiaohongshu .text {
  font-size: 14px;
  color: #242421;
  height: 24px;
  line-height: 24px;
  border-radius: 6px;
  margin: 0 8px;
  font-weight: 500;
}

/* page */

.content {
  background: #a7d168;
  position: relative;
  overflow-y: scroll;
}

.content .top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #a7d168;
}

.content .top-title {
  height: 60px;
  text-align: left;
  padding-left: 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.content .top-title__main-title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #242421;
}
.content .right {
  margin-left: 10px;
}
.content .top-title__main-title__text {
  font-size: 20px;
}
.content .top-title__sub-title {
  font-size: 14px;
  color: #32373a;
}

.content .info {
  padding-left: 15px;
  height: 30px;
  font-size: 16px;
  color: #32373a;
}

.content .quesitem {
  padding: 0 15px;
  margin-top: 90px;
  /* position: fixed; */
  top: 90px;
  bottom: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: calc(100% - 90px);
}
.content .quesitem #problem {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
}

.content .quesitem li {
  margin-bottom: calc(100vh / 50);
}
.content .quesitem li .radio-inline {
  margin-right: 5px;
  font-size: 15px;
}
.content .quesitem li .radio-inline input {
  margin-right: 5px;
}

.submit-btn {
  width: 140px;
  height: 35px;
  background-color: #f5e617;
  border: 2px solid #32373a;
  border-radius: 8px;
  line-height: 35px;
  text-align: center;
  margin: 20px auto 0;
  border-radius: 12px;
  color: #32373a;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
}

/* 结果页面 */
.result {
  min-height: 100vh;
}

.result .my {
  text-align: center;
}

.result .my .label {
  font-size: 14px;
}

.result .my .tizhi {
  margin-top: 10px;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 15px;
}

.result #echart {
  height: 300px;
  width: 100%;
}
</style>
