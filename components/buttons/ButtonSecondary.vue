<template>
  <a v-on="$attrs" :href="link" :target="target" :download="download" class="btn btn--secondary">
    <base-icon v-if="icon" class="btn--secondary__icon" :icon="icon"></base-icon>
    <div class="btn--secondary__label" v-text="label" />
  </a>
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
    },
    link: {
      type: String,
      required: true
    },
    target: String,
    download: String
  }
};
</script>

<style>
</style>