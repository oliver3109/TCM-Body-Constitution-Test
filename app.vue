<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  mounted() {
    document.title = "中医体质自测";
  },
});
</script>

<style>
*,
html,
body {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
