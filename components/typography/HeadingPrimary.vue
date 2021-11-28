<template>
  <h1
    class="heading heading--primary"
    :class="{ 'heading--primary__centered': centered }"
  >
    <div
      v-if="overline"
      class="heading--primary__overline"
      v-text="overline"
    ></div>
    <div class="heading--primary__title" v-html="title"></div>
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Heading Primary",
    },
    overline: String,
    centered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>