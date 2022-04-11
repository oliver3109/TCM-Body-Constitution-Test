<template>
  <div class="page">
    <div v-if="result == ''">
      <div class="index" v-if="gender == null">
        <div class="bg">
          <div class="title">
            <div class="main-title">Z式养生·中医体质自测</div>
            <div class="sub-title">
              本测试来自《中医体质分类与判定》国家标准
            </div>
          </div>
        </div>

        <div class="sex-box">
          <div class="title">请选择您的性别：</div>
          <div class="sex">
            <div class="btn male" @click="onSelectGender(0)">男</div>
            <div class="btn female" @click="onSelectGender(1)">女</div>
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
          <div class="text">Z式养生</div>
        </div>
      </div>

      <div class="content" v-if="gender != null">
        <div class="top-title">
          <div class="top-title__main-title">Z式养生·中医体质自测</div>
          <div class="top-title__sub-title">
            本测试来自《中医体质分类与判定》国家标准
          </div>
        </div>

        <div class="info">请根据最近三个月的体验和感觉回答</div>
        <ol class="quesitem">
          <template v-for="(item, index) in queslistdata">
            <li v-bind:quesid="item.id" v-if="true" :key="item.id">
              <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
              <label class="radio-inline">
                <input type="radio" v-bind:name="item.answerno" value="1" />没有
              </label>
              <label class="radio-inline">
                <input type="radio" v-bind:name="item.answerno" value="2" />很少
              </label>
              <label class="radio-inline">
                <input type="radio" v-bind:name="item.answerno" value="3" />有时
              </label>
              <label class="radio-inline">
                <input type="radio" v-bind:name="item.answerno" value="4" />经常
              </label>
              <label class="radio-inline">
                <input type="radio" v-bind:name="item.answerno" value="5" />总是
              </label>
              <div class="quesblank"></div>
            </li>
          </template>
        </ol>
        <div class="submit-btn" @click="onSubmit">查看结果</div>
      </div>
    </div>

    <div class="result" v-else>
      <div class="my">
        <div class="label">你的体质</div>
        <div class="tizhi">{{ resultlist1 }}</div>
      </div>
      <div class="both">
        <div>兼有体质</div>
        <div>{{ resultlist2 }}</div>
      </div>
      <div id="echart"></div>

      <div>
        <h5 class="title">得分：</h5>
        <ol class="scorelist" id="scorelist">
          <li class="list-group-item">平和质：{{ Ascore }}分</li>
          <li class="list-group-item">气虚质：{{ Bscore }}分</li>
          <li class="list-group-item">阳虚质：{{ Cscore }}分</li>
          <li class="list-group-item">阴虚质：{{ Dscore }}分</li>
          <li class="list-group-item">痰湿质：{{ Escore }}分</li>
          <li class="list-group-item">湿热质：{{ Fscore }}分</li>
          <li class="list-group-item">血瘀质：{{ Gscore }}分</li>
          <li class="list-group-item">气郁质：{{ Hscore }}分</li>
          <li class="list-group-item">特禀质：{{ Iscore }}分</li>
        </ol>
      </div>
      <div class="blank"></div>
      <h5 class="title">判定结果：</h5>
      <h5 class="title">{{ result }}</h5>
      <div class="blank"></div>
      <h5 class="title">结果解析：</h5>
      <ol class="resultlist" id="resultlist">
        <li
          v-bind:quesid="item.id"
          v-for="item in resultlistdata"
          :key="item.id"
        >
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

      <!-- 底部 -->
      <div class="xiaohongshu">
        <img
          src="/xiaohongshu.png"
          width="30"
          height="30"
          style="background: #fff; border-radius: 5px"
        />
        <div class="text">Z式养生</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { Pagination, Navigation } from "Swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import { NButton } from "naive-ui";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import { questionList, resultList } from "./data";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    // NButton,
  },
  data() {
    return {
      queslistdata: questionList,
      allresultlistdata: resultList,
      resultlistdata: [],
      scorelistdata: [],
      Ascorelistdata: [0, 0, 0, 0, 0, 0, 0, 0],
      Ascore: 0,
      Bscorelistdata: [0, 0, 0, 0, 0, 0, 0, 0],
      Bscore: 0,
      Cscorelistdata: [0, 0, 0, 0, 0, 0, 0],
      Cscore: 0,
      Dscorelistdata: [0, 0, 0, 0, 0, 0, 0, 0],
      Dscore: 0,
      Escorelistdata: [0, 0, 0, 0, 0, 0, 0, 0],
      Escore: 0,
      Fscorelistdata: [0, 0, 0, 0, 0, 0, 0],
      Fscore: 0,
      Gscorelistdata: [0, 0, 0, 0, 0, 0, 0],
      Gscore: 0,
      Hscorelistdata: [0, 0, 0, 0, 0, 0, 0],
      Hscore: 0,
      Iscorelistdata: [0, 0, 0, 0, 0, 0, 0],
      Iscore: 0,
      resultlist1: [],
      resultlist2: [],
      result: "",
    };
  },
  methods: {
    getscorelist: function () {
      var _list = document.getElementsByClassName("quesitem");
      for (var index = 0; index < _list.length; index++) {
        const queslist = _list.item(index);
        var li_list = queslist.getElementsByTagName("li");
        var len = li_list.length;
        for (var i = 0; i < len; i++) {
          var answervalue = 0;
          for (var j = 0; j < 5; j++) {
            var tmp = li_list[i].childNodes[1 + j].childNodes[0];
            if (tmp.checked == true) {
              answervalue = tmp.value;
            }
          }
          if (parseInt(answervalue) == 0) {
            this.scorelistdata.push(1);
          } else {
            if (this.queslistdata[i].is_decrease == true) {
              answervalue = 6 - parseInt(answervalue);
              this.scorelistdata.push(answervalue);
            } else {
              answervalue = parseInt(answervalue);
              this.scorelistdata.push(answervalue);
            }
          }
        }
      }
      console.log(this.scorelistdata);
    },

    pingheresult: function () {
      var totalscore = 0;
      this.Ascorelistdata[0] = this.scorelistdata[0];
      this.Ascorelistdata[1] = this.scorelistdata[6];
      this.Ascorelistdata[2] = this.scorelistdata[1];
      this.Ascorelistdata[3] = this.scorelistdata[2];
      this.Ascorelistdata[4] = this.scorelistdata[3];
      this.Ascorelistdata[5] = this.scorelistdata[4];
      this.Ascorelistdata[6] = this.scorelistdata[5];
      this.Ascorelistdata[7] = this.scorelistdata[47];
      for (var i = 0; i < 8; i++) {
        totalscore = totalscore + this.Ascorelistdata[i];
      }
      console.log(this.Ascorelistdata);
      var len = 8;
      this.Ascore = [(totalscore - len) / (len * 4)] * 100;
      this.Ascore = this.Ascore.toFixed(1);
      console.log("pinghe score = " + this.Ascore);
    },

    qixuresult: function () {
      var totalscore = 0;
      this.Bscorelistdata[0] = this.scorelistdata[6];
      this.Bscorelistdata[1] = this.scorelistdata[7];
      this.Bscorelistdata[2] = this.scorelistdata[8];
      this.Bscorelistdata[3] = this.scorelistdata[9];
      this.Bscorelistdata[4] = this.scorelistdata[16];
      this.Bscorelistdata[5] = this.scorelistdata[10];
      this.Bscorelistdata[6] = this.scorelistdata[1];
      this.Bscorelistdata[7] = this.scorelistdata[11];
      for (var i = 0; i < 8; i++) {
        totalscore = totalscore + this.Bscorelistdata[i];
      }
      console.log(this.Bscorelistdata);
      var len = 8;
      this.Bscore = [(totalscore - len) / (len * 4)] * 100;
      this.Bscore = this.Bscore.toFixed(1);
      console.log("qixu score = " + this.Bscore);
    },

    yangxuresult: function () {
      var totalscore = 0;
      this.Cscorelistdata[0] = this.scorelistdata[12];
      this.Cscorelistdata[1] = this.scorelistdata[13];
      this.Cscorelistdata[2] = this.scorelistdata[14];
      this.Cscorelistdata[3] = this.scorelistdata[3];
      this.Cscorelistdata[4] = this.scorelistdata[16];
      this.Cscorelistdata[5] = this.scorelistdata[17];
      this.Cscorelistdata[6] = this.scorelistdata[18];
      for (var i = 0; i < 7; i++) {
        totalscore = totalscore + this.Cscorelistdata[i];
      }
      console.log(this.Cscorelistdata);
      var len = 7;
      this.Cscore = [(totalscore - len) / (len * 4)] * 100;
      this.Cscore = this.Cscore.toFixed(1);
      console.log("yangxu score = " + this.Cscore);
    },

    yinxuresult: function () {
      var totalscore = 0;
      this.Dscorelistdata[0] = this.scorelistdata[19];
      this.Dscorelistdata[1] = this.scorelistdata[20];
      this.Dscorelistdata[2] = this.scorelistdata[21];
      this.Dscorelistdata[3] = this.scorelistdata[22];
      this.Dscorelistdata[4] = this.scorelistdata[23];
      this.Dscorelistdata[5] = this.scorelistdata[24];
      this.Dscorelistdata[6] = this.scorelistdata[25];
      this.Dscorelistdata[7] = this.scorelistdata[26];
      for (var i = 0; i < 8; i++) {
        totalscore = totalscore + this.Dscorelistdata[i];
      }
      console.log(this.Dscorelistdata);
      var len = 8;
      this.Dscore = [(totalscore - len) / (len * 4)] * 100;
      this.Dscore = this.Dscore.toFixed(1);
      console.log("yinxu score = " + this.Dscore);
    },

    tanxuresult: function () {
      var totalscore = 0;
      this.Escorelistdata[0] = this.scorelistdata[27];
      this.Escorelistdata[1] = this.scorelistdata[28];
      this.Escorelistdata[2] = this.scorelistdata[29];
      this.Escorelistdata[3] = this.scorelistdata[30];
      this.Escorelistdata[4] = this.scorelistdata[31];
      this.Escorelistdata[5] = this.scorelistdata[32];
      this.Escorelistdata[6] = this.scorelistdata[33];
      this.Escorelistdata[7] = this.scorelistdata[34];
      for (var i = 0; i < 8; i++) {
        totalscore = totalscore + this.Escorelistdata[i];
      }
      console.log(this.Escorelistdata);
      var len = 8;
      this.Escore = [(totalscore - len) / (len * 4)] * 100;
      this.Escore = this.Escore.toFixed(1);
      console.log("tanxu score = " + this.Escore);
    },

    shireresult: function () {
      var totalscore = 0;
      this.Fscorelistdata[0] = this.scorelistdata[35];
      this.Fscorelistdata[1] = this.scorelistdata[36];
      this.Fscorelistdata[2] = this.scorelistdata[37];
      this.Fscorelistdata[3] = this.scorelistdata[38];
      this.Fscorelistdata[4] = this.scorelistdata[39];
      this.Fscorelistdata[5] = this.scorelistdata[40];
      this.Fscorelistdata[6] = this.scorelistdata[41];
      for (var i = 0; i < 5; i++) {
        totalscore = totalscore + this.Fscorelistdata[i];
      }
      if (this.Fscorelistdata[5] == 1) {
        totalscore = totalscore + this.Fscorelistdata[6];
      } else {
        totalscore = totalscore + this.Fscorelistdata[5];
      }
      console.log(this.Fscorelistdata);
      var len = 6;
      this.Fscore = [(totalscore - len) / (len * 4)] * 100;
      this.Fscore = this.Fscore.toFixed(1);
      console.log("shire score = " + this.Fscore);
    },

    xueyuresult: function () {
      var totalscore = 0;
      this.Gscorelistdata[0] = this.scorelistdata[42];
      this.Gscorelistdata[1] = this.scorelistdata[43];
      this.Gscorelistdata[2] = this.scorelistdata[44];
      this.Gscorelistdata[3] = this.scorelistdata[45];
      this.Gscorelistdata[4] = this.scorelistdata[46];
      this.Gscorelistdata[5] = 6 - this.scorelistdata[47];
      this.Gscorelistdata[6] = this.scorelistdata[48];
      for (var i = 0; i < 7; i++) {
        totalscore = totalscore + this.Gscorelistdata[i];
      }
      console.log(this.Gscorelistdata);
      var len = 7;
      this.Gscore = [(totalscore - len) / (len * 4)] * 100;
      this.Gscore = this.Gscore.toFixed(1);
      console.log("xuexu score = " + this.Gscore);
    },

    qiyuresult: function () {
      var totalscore = 0;
      this.Hscorelistdata[0] = this.scorelistdata[2];
      this.Hscorelistdata[1] = this.scorelistdata[50];
      this.Hscorelistdata[2] = this.scorelistdata[51];
      this.Hscorelistdata[3] = this.scorelistdata[52];
      this.Hscorelistdata[4] = this.scorelistdata[53];
      this.Hscorelistdata[5] = this.scorelistdata[54];
      this.Hscorelistdata[6] = this.scorelistdata[55];
      for (var i = 0; i < 7; i++) {
        totalscore = totalscore + this.Hscorelistdata[i];
      }
      console.log(this.Hscorelistdata);
      var len = 7;
      this.Hscore = [(totalscore - len) / (len * 4)] * 100;
      this.Hscore = this.Hscore.toFixed(1);
      console.log("qiyu score = " + this.Hscore);
    },

    tebingresult: function () {
      var totalscore = 0;
      this.Iscorelistdata[0] = this.scorelistdata[56];
      this.Iscorelistdata[1] = this.scorelistdata[57];
      this.Iscorelistdata[2] = this.scorelistdata[58];
      this.Iscorelistdata[3] = this.scorelistdata[59];
      this.Iscorelistdata[4] = this.scorelistdata[60];
      this.Iscorelistdata[5] = this.scorelistdata[49];
      this.Iscorelistdata[6] = this.scorelistdata[15];
      for (var i = 0; i < 7; i++) {
        if (this.Iscorelistdata[i]) {
          totalscore = totalscore + this.Iscorelistdata[i];
        }
      }
      console.log(this.Iscorelistdata);
      var len = 7;
      this.Iscore = [(totalscore - len) / (len * 4)] * 100;
      this.Iscore = this.Iscore.toFixed(1);
      console.log("tebing score = " + this.Iscore);
    },

    onSubmit: function (event) {
      this.getscorelist();

      this.pingheresult();
      this.qixuresult();
      this.yangxuresult();
      this.yinxuresult();
      this.tanxuresult();
      this.shireresult();
      this.xueyuresult();
      this.qiyuresult();
      this.tebingresult();

      /*
					this.Ascore = 80;
					this.Bscore = 30;
					this.Cscore = 0;
					this.Dscore = 0;
					this.Escore = 0;
					this.Fscore = 0;
					this.Gscore = 0;
					this.Hscore = 0;
					this.Iscore = 0;
				   */

      var qitatishilist = [];
      var resultlist1 = [];
      var resultlist2 = [];

      if (this.Bscore >= 40) {
        resultlist1.push("气虚质");
        qitatishilist.push(this.allresultlistdata[1]);
      } else if (this.Bscore < 40 && this.Bscore >= 30) {
        resultlist2.push("有气虚倾向");
        qitatishilist.push(this.allresultlistdata[1]);
      }
      if (this.Cscore >= 40) {
        resultlist1.push("阳虚质");
        qitatishilist.push(this.allresultlistdata[2]);
      } else if (this.Cscore < 40 && this.Cscore >= 30) {
        resultlist2.push("有阳虚倾向");
        qitatishilist.push(this.allresultlistdata[2]);
      }
      if (this.Dscore >= 40) {
        resultlist1.push("阴虚质");
        qitatishilist.push(this.allresultlistdata[3]);
      } else if (this.Dscore < 40 && this.Dscore >= 30) {
        resultlist2.push("有阴虚倾向");
        qitatishilist.push(this.allresultlistdata[3]);
      }
      if (this.Escore >= 40) {
        resultlist1.push("痰湿质");
        qitatishilist.push(this.allresultlistdata[4]);
      } else if (this.Escore < 40 && this.Escore >= 30) {
        resultlist2.push("有痰湿倾向");
        qitatishilist.push(this.allresultlistdata[4]);
      }
      if (this.Fscore >= 40) {
        resultlist1.push("湿热质");
        qitatishilist.push(this.allresultlistdata[5]);
      } else if (this.Fscore < 40 && this.Fscore >= 30) {
        resultlist2.push("有湿热倾向");
        qitatishilist.push(this.allresultlistdata[5]);
      }
      if (this.Gscore >= 40) {
        resultlist1.push("血瘀质");
        qitatishilist.push(this.allresultlistdata[6]);
      } else if (this.Gscore < 40 && this.Gscore >= 30) {
        resultlist2.push("有血瘀倾向");
        qitatishilist.push(this.allresultlistdata[6]);
      }
      if (this.Hscore >= 40) {
        resultlist1.push("气郁质");
        qitatishilist.push(this.allresultlistdata[7]);
      } else if (this.Hscore < 40 && this.Hscore >= 30) {
        resultlist2.push("有气郁倾向");
        qitatishilist.push(this.allresultlistdata[7]);
      }
      if (this.Iscore >= 40) {
        resultlist1.push("特禀质");
        qitatishilist.push(this.allresultlistdata[8]);
      } else if (this.Iscore < 40 && this.Iscore >= 30) {
        resultlist2.push("有特禀倾向");
        qitatishilist.push(this.allresultlistdata[8]);
      }

      console.log(this.resultlist1);
      console.log(this.resultlist2);

      this.resultlist1 = resultlist1;
      this.resultlist2 = resultlist2;

      if (this.resultlist1.length > 0) {
        for (var i = 0; i < this.resultlist1.length - 1; i++) {
          this.result = this.result + this.resultlist1[i] + "，";
        }
        this.result = this.result + this.resultlist1[i];
      } else if (
        this.resultlist1.length == 0 &&
        this.Ascore >= 60 &&
        this.resultlist2.length == 0
      ) {
        this.result = "平和质";
        this.resultlistdata.push(this.allresultlistdata[0]);
      } else if (
        this.resultlist1.length == 0 &&
        this.Ascore >= 60 &&
        this.resultlist2.length > 0
      ) {
        this.result = "基本是平和质，";
        for (var i = 0; i < this.resultlist2.length - 1; i++) {
          this.result = this.result + this.resultlist2[i] + "，";
        }
        this.result = this.result + this.resultlist2[i];
        this.resultlistdata.push(this.allresultlistdata[0]);
        this.resultlistdata = this.resultlistdata.concat(qitatishilist);
        console.log(this.resultlistdata.length);
      } else if (
        this.resultlist1.length == 0 &&
        this.Ascore < 60 &&
        this.resultlist2.length == 0
      ) {
        this.result = "非平和质";
      } else if (
        this.resultlist1.length == 0 &&
        this.Ascore < 60 &&
        this.resultlist2.length > 0
      ) {
        this.result = "非平和质，";
        for (var i = 0; i < this.resultlist2.length - 1; i++) {
          this.result = this.result + this.resultlist2[i] + "，";
        }
        this.result = this.result + this.resultlist2[i];
        this.resultlistdata = this.resultlistdata.concat(qitatishilist);
        console.log(this.resultlistdata.length);
      }

      this.initChart();
    },

    initChart() {
      var {
        Ascore, // 平和
        Bscore, // 气虚
        Cscore, // 阳虚
        Dscore, // 阴虚
        Escore, // 痰湿质
        Fscore, // 湿热质
        Gscore, // 血瘀质
        Hscore, // 气郁质
        Iscore, // 特禀质
      } = this;
      // Bscore = 11;
      // Cscore = 55;
      // Dscore = 33;
      // Escore = 22;
      // Fscore = 33;
      // Gscore = 34;
      // Hscore = 44;
      // Iscore = 11;
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
              Bscore,
              Cscore,
              Dscore,
              Escore,
              Fscore,
              Gscore,
              Hscore,
              Iscore,
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

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const onSelectGender = (value) => {
      gender.value = value;
    };

    return {
      gender,
      modules: [Pagination, Navigation],
      onSwiper,
      onSlideChange,
      onSelectGender,
    };
  },
});
</script>

<style lang="css" scoped>
.page {
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
}

/* 首页 */

.index {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.index .bg {
  width: 82%;
  background-color: #fff;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 4px 4px 9px rgb(101, 101, 101);
}

.index .bg:first-of-type {
  margin-top: 200px;
}

.index .title {
  text-align: center;
}
.index .title .main-title {
  font-size: 30px;
  font-weight: 500;
  color: #242421;
}
.index .title .sub-title {
  margin-top: 5px;
  font-size: 14px;
  color: #8d8d8d;
}

.index .sex-box {
  margin-top: 70px;
}

.index .sex-box .title {
  font-size: 20px;
  text-align: left;
  margin-bottom: 5px;
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
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
}

.index .sex .btn.male {
  background-color: #00a6ff;
}

.index .sex .btn.female {
  background-color: #ff64bc;
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
  margin-left: 8px;
  font-weight: 500;
}

/* page */

.content {
  overflow-y: scroll;
}

.content .top-title {
  height: 60px;
  text-align: left;
  padding-left: 18px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.content .top-title__main-title {
  font-size: 18px;
  font-weight: 500;
  color: #242421;
}
.content .top-title__sub-title {
  font-size: 12px;
  color: #32373a;
}

.content .info {
  position: sticky;
  top: 0;
}

.content .quesitem {
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
}
.content .quesitem #quesname {
  font-size: 15px;
  font-weight: 500;
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
  background-color: #007aff;
  line-height: 35px;
  text-align: center;
  margin: 20px auto 0;
  border-radius: 18px;
  color: #fff;
  font-size: 14px;
}

/* 结果页面 */
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result .my {
  margin: 20px auto 0;
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
