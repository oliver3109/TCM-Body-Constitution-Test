<template>
  <div class="page">
    <div v-if="result == ''">
      <div class="index" v-if="gender == null">
        <div class="title">
          <div class="main-title">Z式养生·中医体质自测</div>
          <div class="sub-title">本测试来自《中医体质分类与判定》国家标准</div>
        </div>
        <div class="sex">
          <div class="btn male" @click="onSelectGender(0)">男</div>
          <div class="btn female" @click="onSelectGender(1)">女</div>
        </div>
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

      <swiper
        v-if="gender != null"
        class="swiper"
        :modules="modules"
        :scrollbar="{ draggable: true }"
        navigation
        :pagination="{ clickable: true, type: 'progressbar' }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <template v-slot:container-start>
          <div class="top-title">
            <div class="top-title__main-title">Z式养生·中医体质自测</div>
            <div class="top-title__sub-title">
              本测试来自《中医体质分类与判定》国家标准
            </div>
          </div>
        </template>
        <template v-slot:container-end>
          <div class="xiaohongshu">
            <img
              src="/xiaohongshu.png"
              width="30"
              height="30"
              style="background: #fff; border-radius: 5px"
            />
            <div class="text">Z式养生</div>
          </div>
        </template>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li v-bind:quesid="item.id" v-if="index < 9" :key="item.id">
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
            </ol>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li
                  v-bind:quesid="item.id"
                  v-if="index >= 9 && index < 18"
                  :key="item.id"
                >
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
            </ol>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li
                  v-bind:quesid="item.id"
                  v-if="index >= 18 && index < 27"
                  :key="item.id"
                >
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
            </ol>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li
                  v-bind:quesid="item.id"
                  v-if="index >= 27 && index < 36"
                  :key="item.id"
                >
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
            </ol>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li
                  v-bind:quesid="item.id"
                  v-if="
                    index >= 36 &&
                    index < 46 &&
                    (item.gender != null ? item.gender === gender : true)
                  "
                  :key="item.id"
                >
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
            </ol>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li
                  v-bind:quesid="item.id"
                  v-if="index >= 46 && index < 55"
                  :key="item.id"
                >
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
            </ol>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <ol class="quesitem">
              <template v-for="(item, index) in queslistdata">
                <li v-bind:quesid="item.id" v-if="index >= 55" :key="item.id">
                  <p id="quesname">{{ index + 1 }}. {{ item.fullname }}</p>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="1"
                    />没有
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="2"
                    />很少
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="3"
                    />有时
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="4"
                    />经常
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      v-bind:name="item.answerno"
                      value="5"
                    />总是
                  </label>
                  <div class="quesblank"></div>
                </li>
              </template>
              <div class="submit-btn" @click="onSubmit">查看结果</div>
            </ol>
          </div>
        </swiper-slide>
      </swiper>
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
      <!-- <div @click="initChart">1111</div> -->
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
import { ref, getCurrentInstance } from "vue";
import { defineComponent } from "@vue/composition-api";
import { Pagination, Navigation } from "Swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      queslistdata: [
        {
          id: 1,
          answerno: "answer1",
          fullname: "您精力充沛吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answer2",
          fullname: "您说话声音低弱无力吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 3,
          answerno: "answer3",
          fullname: "您感到闷闷不乐，情绪低沉吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 4,
          answerno: "answer4",
          fullname:
            "您比一般人耐受不了寒冷（冬天的寒冷，夏天的空调，电扇等）吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 5,
          answerno: "answer5",
          fullname: "您能适应外界自然和社会环境的变化吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answer6",
          fullname: "您容易失眠吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 7,
          answerno: "answer7",
          fullname: "您容易疲乏吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 8,
          answerno: "answer8",
          fullname: "您容易气短(呼吸短促，接不上气)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 9,
          answerno: "answer9",
          fullname: "您容易心慌吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 10,
          answerno: "answer10",
          fullname: "您容易头晕或站起时晕眩吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 11,
          answerno: "answer11",
          fullname: "您喜欢安静、懒得说话吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 12,
          answerno: "answer12",
          fullname: "您活动量稍大就容易出虚汗吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 13,
          answerno: "answer13",
          fullname: "您手脚发凉吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 14,
          answerno: "answer14",
          fullname: "您胃脘部、背部或腰膝部怕冷吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 15,
          answerno: "answer15",
          fullname: "您感到怕冷、衣服比别人穿得多吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 16,
          answerno: "answer16",
          fullname: "您的皮肤一抓就红，并出现抓痕吗？ ",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 17,
          answerno: "answer17",
          fullname: "您比别人容易患感冒吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 18,
          answerno: "answer18",
          fullname: "您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 19,
          answerno: "answer19",
          fullname: "您受凉或吃(喝)凉的东西后，容易腹泻(拉肚子)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 20,
          answerno: "answer20",
          fullname: "您感到手脚心发热吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 21,
          answerno: "answer21",
          fullname: "您感觉身体、脸上发热吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 22,
          answerno: "answer22",
          fullname: "您皮肤或口唇干吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 23,
          answerno: "answer23",
          fullname: "您口唇的颜色比一般人红吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 24,
          answerno: "answer24",
          fullname: "您容易便秘或大便干燥吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 25,
          answerno: "answer25",
          fullname: "您面部两颧潮红或偏红吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 26,
          answerno: "answer26",
          fullname: "您感到眼睛干涩吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 27,
          answerno: "answer27",
          fullname: "您感到口干咽燥、总想喝水吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 28,
          answerno: "answer28",
          fullname: "您感到胸闷或腹部胀满吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 29,
          answerno: "answer29",
          fullname: "您感到身体沉重不轻松或不爽快吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 30,
          answerno: "answer30",
          fullname: "您腹部肥满松软吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 31,
          answerno: "answer31",
          fullname: "您有额部油脂分泌多的现象吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 32,
          answerno: "answer32",
          fullname: "您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 33,
          answerno: "answer33",
          fullname: "您嘴里有黏黏的感觉吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 34,
          answerno: "answer34",
          fullname: "您平时痰多，特别是咽喉部总感到有痰堵着吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 35,
          answerno: "answer35",
          fullname: "您舌苔厚腻或有舌苔厚厚的感觉吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 36,
          answerno: "answer36",
          fullname: "您面部或鼻部有油腻感或者油亮发光吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 37,
          answerno: "answer37",
          fullname: "您易生痤疮或疮疖吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 38,
          answerno: "answer38",
          fullname: "您感到口苦或嘴里有异味吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 39,
          answerno: "answer39",
          fullname: "您大便黏滞不爽、有解不尽的感觉吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 40,
          answerno: "answer40",
          fullname: "您小便时尿道有发热感、尿色浓(深)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 41,
          answerno: "answer41",
          fullname: "您带下色黄(白带颜色发黄)吗？",
          answer: 0,
          is_decrease: false,
          gender: 1,
        },
        {
          id: 42,
          answerno: "answer42",
          fullname: "您的阴囊部位潮湿吗？",
          answer: 0,
          is_decrease: false,
          gender: 0,
        },
        {
          id: 43,
          answerno: "answer43",
          fullname: "您的皮肤在不知不觉中会出现青紫瘀斑(皮下出血)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 44,
          answerno: "answer44",
          fullname: "您两颧部有细微红丝吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 45,
          answerno: "answer45",
          fullname: "您身体上有哪里疼痛吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 46,
          answerno: "answer46",
          fullname: "您面色晦黯、或容易出现褐斑吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 47,
          answerno: "answer47",
          fullname: "您容易有黑眼圈吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 48,
          answerno: "answer48",
          fullname: "您容易忘事（健忘）吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 49,
          answerno: "answer49",
          fullname: "您口唇颜色偏黯吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 50,
          answerno: "answer50",
          fullname: "您的皮肤因过敏出现过紫癜(紫红色瘀点、瘀斑)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 51,
          answerno: "answer51",
          fullname: "您容易精神紧张、焦虑不安吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 52,
          answerno: "answer52",
          fullname: "您多愁善感、感情脆弱吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 53,
          answerno: "answer53",
          fullname: "您容易感到害怕或受到惊吓吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 54,
          answerno: "answer54",
          fullname: "您胁肋部或乳房胀痛吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 55,
          answerno: "answer55",
          fullname: "您无缘无故叹气吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 56,
          answerno: "answer56",
          fullname: "您咽喉部有异物感，且吐之不出、咽之不下吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 57,
          answerno: "answer57",
          fullname: "您没有感冒时也会打喷嚏吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 58,
          answerno: "answer58",
          fullname: "您没有感冒时也会鼻塞、流鼻涕吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 59,
          answerno: "answer59",
          fullname: "您有因季节变化、温度变化或异味等原因而咳喘的现象吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 60,
          answerno: "answer60",
          fullname:
            "您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 61,
          answerno: "answer61",
          fullname: "您的皮肤容易起荨麻疹(风团、风疹块、风疙瘩)吗？",
          answer: 0,
          is_decrease: false,
        },
      ],
      allresultlistdata: [
        {
          id: 0,
          name: "平和质",
          changjianbiaoxian:
            "面色、肤色润泽，头发稠密有光泽，目光有神，鼻色明润，嗅觉通利，唇色红润，不易疲劳，精力充沛，耐受寒热，睡眠良好，胃纳佳，二便正常，舌色淡红，苔薄白，脉和缓有力。",
          xingtitezheng: "平和体质是正常体质，体形匀称健壮。",
          jingshentezheng: "积极乐观、精力充沛。",
          xinlitezheng: "心理素质好，随和开朗、情绪稳定、思维理智、不偏激。",
          fabingqingxiang: "平时患病较少。",
          tiaoyangfangshi: [
            "平和体质的人乃阴阳平和、脏腑气血功能正常的人，但平时也应该注意保健；",
            "不过饱，也不过饥，不吃过冷/过热的食物；",
            "饮食健康，少食过于油腻及辛辣之物；",
            "积极参加锻炼。",
          ],
        },
        {
          id: 1,
          name: "气虚质",
          changjianbiaoxian:
            "平素语音低弱，少气懒言，容易疲乏，精神不振，易出汗，舌淡红，舌边有齿痕，脉弱。",
          xingtitezheng: "肌肉松软不实。 ",
          jingshentezheng: "性格内向，情绪不稳定，善惊易恐，怕冒险。",
          xinlitezheng: "性格内向，不喜冒险。",
          fabingqingxiang:
            "平时体质虚弱，易患感冒；生病后因抗病能力弱而难以痊愈；内脏下垂，如胃下垂、子宫脱垂、脱肛等。",
          tiaoyangfangshi: [
            "环境起居调摄：夏避暑；冬避寒；防过劳；",
            "体育锻炼：宜柔缓，不宜剧烈运动，宜散步、慢跑、打太极等。平时可按摩足三里穴；",
            "精神调适：清净养藏，祛除杂念，不躁动，少思虑。提升自信心和精气神；",
            "饮食调理：常食益气健脾食物，如白扁豆、山药、大枣、桂圆等，少吃耗气食物如生萝卜、空心菜等；",
            "药物调养：可用甘温补气之品，如人参、山药、黄芪等。常自汗、感冒者可服补中益气颗粒等预防。",
          ],
        },
        {
          id: 2,
          name: "阳虚质",
          changjianbiaoxian:
            "畏寒怕冷，手足不温，喜热饮食，精神不振，舌淡胖嫩，脉沉迟。",
          xingtitezheng: "肌肉松软不实。",
          jingshentezheng: "精神不振、少气懒言。",
          xinlitezheng: "性格多沉静、内向。",
          fabingqingxiang:
            "发病多为寒证，易患冠心病、低血压、胃痛、腹痛、胃溃疡、久泻、消化不良、水肿、男子阳痿、女子宫冷不孕、痛经、闭经等。",
          tiaoyangfangshi: [
            "环境起居调摄：冬避寒就温，春夏培补阳气，多日光浴。注重足下、背部及丹田部位的保暖；",
            "体育锻炼：宜舒缓柔和，体育锻炼天天1至2次；",
            "精神调适：保持沉静内敛，消除不良情绪；",
            "饮食调理：平时可多食牛肉、羊肉等温阳之品，少食梨、西瓜、荸荠等生冷寒凉食物，少饮绿茶；",
            "中医理疗：自行按摩气海、足三里、涌泉等穴位，或经常灸足三里、关元；",
            "药物调养：可选补阳祛寒、温养肝肾之品，如鹿茸、海狗肾、蛤蚧、杜仲等，成方可选金匮肾气丸。",
          ],
        },
        {
          id: 3,
          name: "阴虚质",
          changjianbiaoxian:
            "手足心热，口燥咽干，总想喝水，鼻微干，喜冷饮，大便干燥，容易失眠，舌红少津，脉细数。",
          xingtitezheng: "体形偏瘦，皮肤偏干。",
          jingshentezheng: "精神时而振奋，性格活泼，但难于保持。",
          xinlitezheng: "性格外向好动，急躁易怒。",
          fabingqingxiang: "易患咳嗽、干燥综合征、糖尿病、甲亢等。",
          tiaoyangfangshi: [
            "环境起居调摄：夏应避暑，秋冬养阴；",
            "体育锻炼：不剧烈运动，宜选动静结合项目，如太极拳、八段锦等；",
            "精神调适：养成冷静沉着的习惯；",
            "饮食调理：多吃梨、百合、银耳养阴润燥、甘凉清淡的食物，少食羊肉、韭菜、辣椒、葵花子等性温燥烈之品；",
            "可常食用药膳：常服用百合、枸杞、沙参、玉竹等养阴清热之品做成的药膳；",
            "药物调养：可用滋阴清热、滋养肝肾之品，如女贞子、山茱萸、五味子、麦冬、沙参、玉竹等药。可酌情服用六味地黄片等。",
          ],
        },
        {
          id: 4,
          name: "痰湿质",
          changjianbiaoxian:
            "面部皮肤油脂较多，多汗且黏，胸闷，痰多，口黏腻或甜，喜食肥甘甜黏，苔腻，脉滑。",
          xingtitezheng:
            "体形肥胖，腹部肥满松软。精神特征：神平气和，食后精神不振。",
          jingshentezheng: "神平气和，食后精神不振。",
          xinlitezheng: "性格温和、处事稳重，为人恭谦，豁达开朗、善于忍耐。",
          fabingqingxiang:
            "易患中风、胸痹、眩晕、咳喘、痛风、高脂血症、高血压、糖尿病、冠心病、周围血管疾病等。",
          tiaoyangfangshi: [
            "环境起居调摄：远离潮湿；多户外活动；穿透气散湿的棉衣；常晒太阳；",
            "体育锻炼：应长期坚持锻炼，活动量逐渐增强，让疏松的皮肉逐渐致密；",
            "精神调适：易神疲困顿，要多参加各种活动，多听轻松音乐，以动养神；",
            "饮食调理：多吃具有健脾利湿、化痰祛痰的清淡食物，如扁豆、薏仁、红小豆等。少食甜粘油腻，少喝酒，勿过饱；",
            "可常食用药膳：可用药物调理，如半夏、陈皮、茯苓、白术、桔梗、贝母、瓜萎、竹茹，可做成膏方服用；",
            "药物调养：重点调补肺、脾、肾。可用温燥化湿之品，如陈皮、厚朴、半夏、茯苓、泽泻、瓜蒌、白术、车前子等。可服用化痰祛湿方，代表方平胃散。",
          ],
        },
        {
          id: 5,
          name: "湿热质",
          changjianbiaoxian:
            "面部和鼻尖总是油光发亮，脸上易生粉刺，皮肤易瘙痒；常感到口苦、口臭；身重困倦，大便黏滞不畅或燥结，小便短黄，男性阴囊潮湿，女性带下增多等。",
          xingtitezheng: "形体中等或偏瘦。",
          jingshentezheng: "精神亢奋。",
          xinlitezheng: "急躁易怒、粗心懈怠。",
          fabingqingxiang:
            "易患疮疖、黄疸、火热湿疹、痤疮粉刺、痈疖、肾结石、脂肪肝、高血压、冠心病、高血脂等病。",
          tiaoyangfangshi: [
            "环境起居调摄：避暑湿，环境宜干燥通风，长夏应避湿热侵袭；",
            "体育锻炼：适合大运动量锻炼，如中长跑、游泳、爬山、球类、武术等，以祛湿散热；",
            "精神调适：多参加开朗轻松的活动，放松身心；",
            "饮食调理：饮食以清淡为主，可多食赤小豆、绿豆、芹菜、黄瓜、藕等甘寒的食物；",
            "可常食用药膳：土茯苓、菌陈、水鸭等。可常用菊花、苦丁茶泡水冲服；",
            "药物调养：可用甘淡苦寒清热利湿之品，如黄芩、黄连、栀子。中成药代表龙胆泻肝软胶囊，六一散、清胃散、甘露消毒丹。",
          ],
        },
        {
          id: 6,
          name: "血瘀质",
          changjianbiaoxian:
            "肤色晦黯，色素沉着，容易出现瘀斑；眼睛里的红丝很多，牙龈易出血。口唇黯淡，舌黯或有瘀点，舌下络脉紫黯或增粗。",
          xingtitezheng: "胖瘦均见。",
          jingshentezheng: "精神抑郁不振。",
          xinlitezheng: "性格内向、易烦燥、急躁健忘。",
          fabingqingxiang:
            "易患冠心病、女子月经不调、疼痛有定处，血证、肿瘤、中风、胸痹等病。",
          tiaoyangfangshi: [
            "环境起居调摄：血得温则行，居住宜温不宜凉，冬应防寒，作息规律；",
            "体育锻炼：多做益心脏血脉的活动，各部分都要活动，以助气血运行；",
            "精神调适：培养乐观情绪，苦闷忧郁会加重血瘀；",
            "饮食调理：常食常食用桃仁、油菜、黑大豆，玫瑰花、月季花等具有活血祛瘀的食物，酒可少量常饮。也可常食用醋、山楂粥、花生粥等；",
            "可常食用药膳：常食用丹参、桃仁、红花、元胡、郁金、鸡血藤、当归、五加皮、地榆、续断，可把其做成膏方长期食用；",
            "药物调养：可用当归、川芎、怀牛膝、徐长卿、鸡血藤、茺蔚子等活血养血的药物，成方可选桂枝茯苓丸；",
          ],
        },
        {
          id: 7,
          name: "气郁质",
          changjianbiaoxian:
            "神情抑郁，情感脆弱，烦闷不乐，舌淡红，苔薄白，脉弦。",
          xingtitezheng: "形体瘦者为多。",
          jingshentezheng: "精神抑郁、烦闷不乐。",
          xinlitezheng: "性格内向不稳定，忧郁脆弱，敏感多疑。",
          fabingqingxiang:
            "易失眠多梦、不寐、惊恐、抑郁症、神经官能症、乳腺增生、女子月经不调等病证。",
          tiaoyangfangshi: [
            "环境起居调摄：夏避暑，冬避寒，防过劳；",
            "体育锻炼：宜柔缓，不宜剧烈运动，宜散步、慢跑、打太极等；",
            "精神调适：提升自信心和精气神。睡前避免饮茶、咖啡等提神醒脑的饮料；",
            "饮食调理：多食黄花菜、海带、山楂、玫瑰花等具有行气、解郁、消食、醒神作用的食物；",
            "保健品：应用疏肝理气的药物调理，如乌药、香附、川陈子、小茴香、青皮、郁金等，可把这些做成膏药长期服用；",
            "药物调养：可用甘温补气之品，如人参、山药、黄芪等。代表中成药玉屏风散。可以服用越鞠胶囊、舒肝和胃丸、柴胡疏肝散调节。",
          ],
        },
        {
          id: 8,
          name: "特禀质",
          changjianbiaoxian: "过敏体质者常见哮喘、风团、咽痒、鼻塞、喷嚏等。",
          xingtitezheng:
            "过敏体质者一般无特殊；先天禀赋异常者或有畸形，或有生理缺陷。",
          jingshentezheng: "依据禀赋不同而各异。",
          xinlitezheng: "性情过敏，或无特殊表现。",
          fabingqingxiang:
            "过敏体质者易患哮喘、荨麻疹、花粉症及药物过敏等；血友病、胎寒、胎热、胎惊，贫血、低血糖症、慢性出血症、心血管疾病、或妇女月经不调、功能失调性子宫出血症等疾病。",
          tiaoyangfangshi: [
            "环境起居调摄：居室宜通风良好，保持室内清洁，被褥、床单要经常洗晒，可防止对尘螨过敏；",
            "体育锻炼：生活中要加强身体锻炼，顺应四时变化，以适寒温；",
            "精神调适：只有调整体质，适应环境，才能彻底防治过敏性疾病的发生；",
            "饮食调理：饮食清淡、均衡，粗细搭配适当，荤素配伍合理。少食荞麦、蚕豆、白扁豆、牛肉、鹅肉、茄子、浓茶等辛辣之品、腥膻发物及含致敏物质的食物；",
            "药物调养：可用消风散寒、清热、养血的中药调理。常用药物有防风、蜂房、荆芥、苦参、蝉衣、白藓皮、蛇床子等，代表成药消风散、玉屏风散、过敏煎等。如消风散为治疗风疹、湿疹良方，可用于急性荨麻疹、湿疹、稻田性皮疹、药物性皮炎、神经性皮炎等。",
          ],
        },
      ],
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
  background-color: #f5e617;
  height: 100vh;
}

.swiper-button-next {
  right: 5px;
}
.swiper-button-prev {
  left: 5px;
}
.swiper-button-next {
  right: 5px;
}

/* 首页 */

.index {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #32373a;
}

.index .sex {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index .sex .btn:first-of-type {
  margin-right: 20px;
}
.index .sex .btn {
  height: 50px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
}

.index .sex .btn.male {
  background-color: rgb(0, 166, 255);
}

.index .sex .btn.female {
  background-color: rgb(255, 100, 188);
}

.xiaohongshu {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.xiaohongshu .text {
  font-size: 12px;
  color: #242421;
  height: 24px;
  line-height: 24px;
  border-radius: 6px;
  margin-left: 4px;
  font-weight: 500;
}

/* page */

.page .top-title {
  height: 60px;
  text-align: left;
  padding-left: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.page .top-title__main-title {
  font-size: 18px;
  font-weight: 500;
  color: #242421;
}
.page .top-title__sub-title {
  font-size: 12px;
  color: #32373a;
}

.content {
  height: calc(100vh - 60px);
}

.content .quesitem {
  padding: 1px 45px 0;
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
