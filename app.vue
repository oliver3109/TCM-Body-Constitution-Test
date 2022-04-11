<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  mounted() {
    document.title = "Z式养生·中医体质自测";
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

html,
body {
  background: linear-gradient(135deg, #efe774 0%, #f5e617 100%);
}

li {
  list-style-type: none;
}
</style>
