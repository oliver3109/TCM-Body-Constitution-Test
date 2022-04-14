<template>
  <div class="check-btn">
    <div
      v-for="(item, index) in options"
      :key="index"
      :class="['item', activeIndex == index ? 'active' : '']"
      @click="onClickItem(index, item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    index: Number,
    value: Number,
  },
  setup(prop, self) {
    const activeIndex = ref(null);

    const onClickItem = (index: number, item: any) => {
      activeIndex.value = index;

      self.emit("change", {
        index: prop.index, // 传进来的索引
        value: item.value, // 分数
      });
      self.emit("update:value", item.value);
    };
    return {
      activeIndex,
      options: [
        {
          text: "没有",
          value: 1,
        },
        {
          text: "很少",
          value: 2,
        },
        {
          text: "有时",
          value: 3,
        },
        {
          text: "经常",
          value: 4,
        },
        {
          text: "总是",
          value: 5,
        },
      ],
      onClickItem,
    };
  },
});
</script>

<style lang="css" scoped>
.check-btn {
  background-color: #efeec9;
  color: #242421;
  display: flex;
  font-size: 16px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.check-btn .item {
  flex: 1;
  height: 100%;
  border-top: 2px solid #32373a;
  border-bottom: 2px solid #32373a;
  border-left: 2px solid #32373a;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.check-btn .item.active {
  background-color: #f5e617;
  color: #242421;
}

.check-btn .item:last-of-type {
  border-right: 2px solid #32373a;
}

.check-btn .item:first-of-type {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.check-btn .item:last-of-type {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
