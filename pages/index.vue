<template>
  <div class="container-fluid">
    <div class="blank"></div>
    <h4 class="totaltitle">中医体质调查问卷</h4>
    <h5 class="title">请根据近一年的体验和感觉，回答以下问题：</h5>
    <div id="queslist">
      <ol class="quesitem" id="pinghequeslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in pinghequeslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="qixuqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in qixuqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="yangxuqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in yangxuqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="yinxuqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in yinxuqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="tanxuqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in tanxuqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="shirequeslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in shirequeslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="xueyuqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in xueyuqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="qiyuqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in qiyuqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <ol class="quesitem" id="tebingqueslist">
        <li
          v-bind:quesid="item.id"
          v-for="item in tebingqueslistdata"
          :key="item.id"
        >
          <p id="quesname">{{ item.fullname }}</p>
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
      </ol>
      <div class="blank"></div>
      <div class="subbutton">
        <button
          class="btn btn-default"
          style="width: 10rem"
          type="submit"
          @click="onSubmit"
        >
          计算
        </button>
      </div>
      <div class="blank"></div>
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
      <div class="blank"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      pinghequeslistdata: [
        {
          id: 1,
          answerno: "answerforpinghe1",
          fullname: "（1）您精力充沛吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforpinghe2",
          fullname: "（2）您容易疲乏吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 3,
          answerno: "answerforpinghe3",
          fullname: "（3）您说话声音低弱无力吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 4,
          answerno: "answerforpinghe4",
          fullname: "（4）您感到闷闷不乐，情绪低沉吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 5,
          answerno: "answerforpinghe5",
          fullname:
            "（5）您比一般人耐受不了寒冷（冬天的寒冷，夏天的空调，电扇等）吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 6,
          answerno: "answerforpinghe6",
          fullname: "（6）您能适应外界自然和社会环境的变化吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforpinghe7",
          fullname: "（7）您容易失眠吗？",
          answer: 0,
          is_decrease: true,
        },
        {
          id: 8,
          answerno: "answerforpinghe8",
          fullname: "（8）您容易忘事（健忘）吗？",
          answer: 0,
          is_decrease: true,
        },
      ],

      qixuqueslistdata: [
        {
          id: 1,
          answerno: "answerforqixu1",
          fullname: "（9）您容易疲乏吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforqixu2",
          fullname: "（10）您容易气短(呼吸短促，接不上气)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerforqixu3",
          fullname: "（11）您容易心慌吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerforqixu4",
          fullname: "（12）您容易头晕或站起时晕眩吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerforqixu5",
          fullname: "（13）您比别人容易患感冒吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerforqixu6",
          fullname: "（14）您喜欢安静、懒得说话吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforqixu7",
          fullname: "（15）您说话声音低弱无力吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 8,
          answerno: "answerforqixu8",
          fullname: "（16）您活动量稍大就容易出虚汗吗?",
          answer: 0,
          is_decrease: false,
        },
      ],

      yangxuqueslistdata: [
        {
          id: 1,
          answerno: "answerforyangxu1",
          fullname: "（17）您手脚发凉吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforyangxu2",
          fullname: "（18）您胃脘部、背部或腰膝部怕冷吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerforyangxu3",
          fullname: "（19）您感到怕冷、衣服比别人穿得多吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerforyangxu4",
          fullname:
            "（20）您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerforyangxu5",
          fullname: "（21）您比别人容易患感冒吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerforyangxu6",
          fullname:
            "（22）您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforyangxu7",
          fullname: "（23）您受凉或吃(喝)凉的东西后，容易腹泻(拉肚子)吗?",
          answer: 0,
          is_decrease: false,
        },
      ],

      yinxuqueslistdata: [
        {
          id: 1,
          answerno: "answerforyinxu1",
          fullname: "（24）您感到手脚心发热吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforyinxu2",
          fullname: "（25）您感觉身体、脸上发热吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerforyinxu3",
          fullname: "（26）您皮肤或口唇干吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerforyinxu4",
          fullname: "（27）您口唇的颜色比一般人红吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerforyinxu5",
          fullname: "（28）您容易便秘或大便干燥吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerforyinxu6",
          fullname: "（29）您面部两颧潮红或偏红吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforyinxu7",
          fullname: "（30）您感到眼睛干涩吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 8,
          answerno: "answerforyinxu8",
          fullname: "（31）您感到口干咽燥、总想喝水吗？",
          answer: 0,
          is_decrease: false,
        },
      ],

      tanxuqueslistdata: [
        {
          id: 1,
          answerno: "answerfortanxu1",
          fullname: "（32）您感到胸闷或腹部胀满吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerfortanxu2",
          fullname: "（33）您感到身体沉重不轻松或不爽快吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerfortanxu3",
          fullname: "（34）您腹部肥满松软吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerfortanxu4",
          fullname: "（35）您有额部油脂分泌多的现象吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerfortanxu5",
          fullname: "（36）您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerfortanxu6",
          fullname: "（37）您嘴里有黏黏的感觉吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerfortanxu7",
          fullname: "（38）您平时痰多，特别是咽喉部总感到有痰堵着吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 8,
          answerno: "answerfortanxu8",
          fullname: "（39）您舌苔厚腻或有舌苔厚厚的感觉吗?",
          answer: 0,
          is_decrease: false,
        },
      ],

      shirequeslistdata: [
        {
          id: 1,
          answerno: "answerforshire1",
          fullname: "（40）您面部或鼻部有油腻感或者油亮发光吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforshire2",
          fullname: "（41）您易生痤疮或疮疖吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerforshire3",
          fullname: "（42）您感到口苦或嘴里有异味吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerforshire4",
          fullname: "（43）您大便黏滞不爽、有解不尽的感觉吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerforshire5",
          fullname: "（44）您小便时尿道有发热感、尿色浓(深)吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerforshire6",
          fullname: "（45）您带下色黄(白带颜色发黄)吗?（限女性回答）",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforshire7",
          fullname: "（46）您的阴囊部位潮湿吗?（限男性回答）",
          answer: 0,
          is_decrease: false,
        },
      ],

      xueyuqueslistdata: [
        {
          id: 1,
          answerno: "answerforxueyu1",
          fullname: "（47）您的皮肤在不知不觉中会出现青紫瘀斑(皮下出血)吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforxueyu2",
          fullname: "（48）您两颧部有细微红丝吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerforxueyu3",
          fullname: "（49）您身体上有哪里疼痛吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerforxueyu4",
          fullname: "（50）您面色晦黯、或容易出现褐斑吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerforxueyu5",
          fullname: "（51）您容易有黑眼圈吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerforxueyu6",
          fullname: "（52）您容易忘事（健忘）吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforxueyu7",
          fullname: "（53）您口唇颜色偏黯吗?",
          answer: 0,
          is_decrease: false,
        },
      ],

      qiyuqueslistdata: [
        {
          id: 1,
          answerno: "answerforqiyu1",
          fullname: "（54）您感到闷闷不乐、情绪低沉吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerforqiyu2",
          fullname: "（55）您容易精神紧张、焦虑不安吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerforqiyu3",
          fullname: "（56）您多愁善感、感情脆弱吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerforqiyu4",
          fullname: "（57）您容易感到害怕或受到惊吓吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerforqiyu5",
          fullname: "（58）您胁肋部或乳房胀痛吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerforqiyu6",
          fullname: "（59）您无缘无故叹气吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerforqiyu7",
          fullname: "（60）您咽喉部有异物感，且吐之不出、咽之不下吗？",
          answer: 0,
          is_decrease: false,
        },
      ],

      tebingqueslistdata: [
        {
          id: 1,
          answerno: "answerfortebing1",
          fullname: "（61）您没有感冒时也会打喷嚏吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 2,
          answerno: "answerfortebing2",
          fullname: "（62）您没有感冒时也会鼻塞、流鼻涕吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 3,
          answerno: "answerfortebing3",
          fullname:
            "（63）您有因季节变化、温度变化或异味等原因而咳喘的现象吗？",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 4,
          answerno: "answerfortebing4",
          fullname:
            "（64）您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 5,
          answerno: "answerfortebing5",
          fullname: "（65）您的皮肤容易起荨麻疹(风团、风疹块、风疙瘩)吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 6,
          answerno: "answerfortebing6",
          fullname: "（66）您的皮肤因过敏出现过紫癜(紫红色瘀点、瘀斑)吗?",
          answer: 0,
          is_decrease: false,
        },
        {
          id: 7,
          answerno: "answerfortebing7",
          fullname: "（67）您的皮肤一抓就红，并出现抓痕吗? ",
          answer: 0,
          is_decrease: false,
        },
      ],

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
    pingheresult() {
      let pinghequeslist = document.getElementById("pinghequeslist");
      let li_list = pinghequeslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Ascorelistdata[i] = 1;
        } else {
          if (this.pinghequeslistdata[i].is_decrease == true) {
            this.Ascorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Ascorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Ascorelistdata[i];
      }
      console.log(this.Ascorelistdata);
      this.Ascore = [(totalscore - len) / (len * 4)] * 100;
      this.Ascore = this.Ascore.toFixed(1);
      console.log("pinghe score = " + this.Ascore);
    },
    qixuresult() {
      let qixuqueslist = document.getElementById("qixuqueslist");
      let li_list = qixuqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Bscorelistdata[i] = 1;
        } else {
          if (this.qixuqueslistdata[i].is_decrease == true) {
            this.Bscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Bscorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Bscorelistdata[i];
      }
      console.log(this.Bscorelistdata);
      this.Bscore = [(totalscore - len) / (len * 4)] * 100;
      this.Bscore = this.Bscore.toFixed(1);
      console.log("qixu score = " + this.Bscore);
    },

    yangxuresult() {
      let yangxuqueslist = document.getElementById("yangxuqueslist");
      let li_list = yangxuqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Cscorelistdata[i] = 1;
        } else {
          if (this.yangxuqueslistdata[i].is_decrease == true) {
            this.Cscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Cscorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Cscorelistdata[i];
      }
      console.log(this.Cscorelistdata);
      this.Cscore = [(totalscore - len) / (len * 4)] * 100;
      this.Cscore = this.Cscore.toFixed(1);
      console.log("yangxu score = " + this.Cscore);
    },

    yinxuresult() {
      let yinxuqueslist = document.getElementById("yinxuqueslist");
      let li_list = yinxuqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Dscorelistdata[i] = 1;
        } else {
          if (this.yinxuqueslistdata[i].is_decrease == true) {
            this.Dscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Dscorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Dscorelistdata[i];
      }
      console.log(this.Dscorelistdata);
      this.Dscore = [(totalscore - len) / (len * 4)] * 100;
      this.Dscore = this.Dscore.toFixed(1);
      console.log("yinxu score = " + this.Dscore);
    },

    tanxuresult() {
      let tanxuqueslist = document.getElementById("tanxuqueslist");
      let li_list = tanxuqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Escorelistdata[i] = 1;
        } else {
          if (this.tanxuqueslistdata[i].is_decrease == true) {
            this.Escorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Escorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Escorelistdata[i];
      }
      console.log(this.Escorelistdata);
      this.Escore = [(totalscore - len) / (len * 4)] * 100;
      this.Escore = this.Escore.toFixed(1);
      console.log("tanxu score = " + this.Escore);
    },

    shireresult() {
      let shirequeslist = document.getElementById("shirequeslist");
      let li_list = shirequeslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Fscorelistdata[i] = 1;
        } else {
          if (this.shirequeslistdata[i].is_decrease == true) {
            this.Fscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Fscorelistdata[i] = parseInt(answervalue);
          }
        }
        totalscore = totalscore + this.Fscorelistdata[i];
      }
      console.log(this.Fscorelistdata);
      len = len - 1;
      totalscore = totalscore - 1;
      this.Fscore = [(totalscore - len) / (len * 4)] * 100;
      this.Fscore = this.Fscore.toFixed(1);
      console.log("shire score = " + this.Fscore);
    },

    xueyuresult() {
      let xueyuqueslist = document.getElementById("xueyuqueslist");
      let li_list = xueyuqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Gscorelistdata[i] = 1;
        } else {
          if (this.xueyuqueslistdata[i].is_decrease == true) {
            this.Gscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Gscorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Gscorelistdata[i];
      }
      console.log(this.Gscorelistdata);
      this.Gscore = [(totalscore - len) / (len * 4)] * 100;
      this.Gscore = this.Gscore.toFixed(1);
      console.log("xuexu score = " + this.Gscore);
    },

    qiyuresult() {
      let qiyuqueslist = document.getElementById("qiyuqueslist");
      let li_list = qiyuqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Hscorelistdata[i] = 1;
        } else {
          if (this.qiyuqueslistdata[i].is_decrease == true) {
            this.Hscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Hscorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Hscorelistdata[i];
      }
      console.log(this.Hscorelistdata);
      this.Hscore = [(totalscore - len) / (len * 4)] * 100;
      this.Hscore = this.Hscore.toFixed(1);
      console.log("qiyu score = " + this.Hscore);
    },

    tebingresult() {
      let tebingqueslist = document.getElementById("tebingqueslist");
      let li_list = tebingqueslist.getElementsByTagName("li");
      let totalscore = 0;
      let len = li_list.length;
      for (let i = 0; i < len; i++) {
        let answervalue = 0;
        for (let j = 0; j < 5; j++) {
          let tmp = li_list[i].childNodes[1 + j].childNodes[0];
          if (tmp.checked == true) {
            answervalue = tmp.value;
          }
        }
        if (parseInt(answervalue) == 0) {
          this.Iscorelistdata[i] = 1;
        } else {
          if (this.tebingqueslistdata[i].is_decrease == true) {
            this.Iscorelistdata[i] = 6 - parseInt(answervalue);
          } else {
            this.Iscorelistdata[i] = parseInt(answervalue);
          }
        }

        totalscore = totalscore + this.Iscorelistdata[i];
      }
      console.log(this.Iscorelistdata);
      this.Iscore = [(totalscore - len) / (len * 4)] * 100;
      this.Iscore = this.Iscore.toFixed(1);
      console.log("tebing score = " + this.Iscore);
    },

    onSubmit() {
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
					this.Ascore = 20;
					this.Bscore = 0;
					this.Cscore = 30;
					this.Dscore = 20;
					this.Escore = 30;
					this.Fscore = 0;
					this.Gscore = 0;
					this.Hscore = 0;
					this.Iscore = 0;
				   */
      if (this.Bscore >= 40) {
        this.resultlist1.push("气虚质");
      } else if (this.Bscore < 40 && this.Bscore >= 30) {
        this.resultlist2.push("有气虚倾向");
      }
      if (this.Cscore >= 40) {
        this.resultlist1.push("阳虚质");
      } else if (this.Cscore < 40 && this.Cscore >= 30) {
        this.resultlist2.push("有阳虚倾向");
      }
      if (this.Dscore >= 40) {
        this.resultlist1.push("阴虚质");
      } else if (this.Dscore < 40 && this.Dscore >= 30) {
        this.resultlist2.push("有阴虚倾向");
      }
      if (this.Escore >= 40) {
        this.resultlist1.push("痰湿质");
      } else if (this.Escore < 40 && this.Escore >= 30) {
        this.resultlist2.push("有痰湿倾向");
      }
      if (this.Fscore >= 40) {
        this.resultlist1.push("湿热质");
      } else if (this.Fscore < 40 && this.Fscore >= 30) {
        this.resultlist2.push("有湿热倾向");
      }
      if (this.Gscore >= 40) {
        this.resultlist1.push("血瘀质");
      } else if (this.Gscore < 40 && this.Gscore >= 30) {
        this.resultlist2.push("有血瘀倾向");
      }
      if (this.Hscore >= 40) {
        this.resultlist1.push("气郁质");
      } else if (this.Hscore < 40 && this.Hscore >= 30) {
        this.resultlist2.push("有气郁倾向");
      }
      if (this.Iscore >= 40) {
        this.resultlist1.push("特禀质");
      } else if (this.Iscore < 40 && this.Iscore >= 30) {
        this.resultlist2.push("有特禀倾向");
      }

      console.log(this.resultlist1);
      console.log(this.resultlist2);

      if (this.resultlist1.length > 0) {
        for (let i = 0; i < this.resultlist1.length - 1; i++) {
          this.result = this.result + this.resultlist1[i] + "，";
        }
        this.result = this.result + this.resultlist1[i];
      } else if (
        this.resultlist1.length == 0 &&
        this.Ascore >= 60 &&
        this.resultlist2.length == 0
      ) {
        this.result = "平和质";
      } else if (
        this.resultlist1.length == 0 &&
        this.Ascore >= 60 &&
        this.resultlist2.length > 0
      ) {
        this.result = "基本是平和质，";
        for (let i = 0; i < this.resultlist2.length - 1; i++) {
          this.result = this.result + this.resultlist2[i] + "，";
        }
        this.result = this.result + this.resultlist2[i];
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
        for (let i = 0; i < this.resultlist2.length - 1; i++) {
          this.result = this.result + this.resultlist2[i] + "，";
        }
        this.result = this.result + this.resultlist2[i];
      }
    },
  },
});
</script>
