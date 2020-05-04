<template>
  <button v-on="$attrs" class="btn btn--secondary">
    <img class="btn--secondary__icon" v-if="icon" :src="icon" :alt="alt" />
    <div class="btn--secondary__label" v-text="label" />
  </button>
</template>

<script>
export default {
  computed: {
    alt() {
      return this.label + " icon";
    }
  },
  inheritAttrs: true,
  props: {
    icon: String,
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>