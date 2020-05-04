<template>
  <h1 class="heading heading--primary">
    <div class="subtitle" v-text="overline"></div>
    <div class="title" v-text="title"></div>
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Heading Primary"
    },
    overline: {
      type: String,
      default: "Subtitle"
    }
  }
};
</script>

<style>
</style>