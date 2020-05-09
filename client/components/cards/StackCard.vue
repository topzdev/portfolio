<template>
  <div class="card card--stack" :class="{'card--stack-blank': blank}">
    <img v-if="!blank" class="card--stack__icon" :draggable="false" :src="icon" :alt="alt" />
    <div v-else class="card--stack__icon-blank"></div>

    <p v-if="!blank" class="card--stack__title" v-text="title"></p>
    <div v-else class="card--stack__title-blank"></div>
  </div>
</template>

<script>
export default {
  computed: {
    alt() {
      return this.title + " icon";
    }
  },
  props: {
    icon: {
      type: String,
      default: require("@/assets/img/icons/icon_vue.svg")
    },
    title: {
      type: String,
      default: "VueJS"
    },
    blank: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>