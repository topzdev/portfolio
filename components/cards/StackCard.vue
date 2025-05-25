<template>
  <component :is="link ? 'a' : 'div'"
             :href="link ? link : ''"
             target="_blank"
             class="card card--stack"
             :class="{ 'card--stack-blank': blank }"
             :style="style">
    <nuxt-img v-if="!blank"
              class="card--stack__icon"
              :draggable="false"
              :src="icon.src"
              :alt="alt"
              loading="lazy"
              :height="icon.height"
              :width="icon.width"
              :placeholder="30"
              preset="stack"
              provider="cloudinary" />
    <div v-else
         class="card--stack__icon-blank"></div>

    <p v-if="!blank"
       class="card--stack__title"
       v-html="title"></p>
    <div v-else
         class="card--stack__title-blank"></div>
  </component>
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
    },
    blank: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
    },
    style: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>