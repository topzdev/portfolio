<template>
  <div>
    <nuxt-link v-if="link" :to="link" class="btn btn--primary" v-text="title"></nuxt-link>
    <button v-else class="btn btn--primary" v-text="title"></button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Button Primary"
    },
    icon: String,
    link: String,
    click: Function
  }
};
</script>

<style>
</style>