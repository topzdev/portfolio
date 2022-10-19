<template>
  <div class="card card--stack" :class="{ 'card--stack-blank': blank }">
    <nuxt-img
      v-if="!blank"
      class="card--stack__icon"
      :draggable="false"
      :src="icon.src"
      :alt="alt"
      loading="lazy"
      :height="icon.height"
      :width="icon.width"
      :placeholder="30"
      preset="stack"
      provider="cloudinary"
    />
    <div v-else class="card--stack__icon-blank"></div>

    <p v-if="!blank" class="card--stack__title" v-text="title"></p>
    <div v-else class="card--stack__title-blank"></div>
  </div>
</template>

<script>
import config from "~/configs";
export default {
  computed: {
    alt() {
      return this.title + " icon";
    },
  },
  props: {
    icon: {
      type: Object,
    },
    title: {
      type: String,
      default: "VueJS",
    },
    blank: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>