<template>
  <button v-bind="$attrs" class="btn btn--primary" :class="classes" v-text="label"></button>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    classes: function() {
      return {
        rounded: this.rounded,
        shadow: this.shadow,
        block: this.block,
        dense: this.dense
      };
    }
  },
  props: {
    label: {
      type: String,
      default: "Button Primary"
    },
    icon: String,
    link: String,
    shadow: Boolean,
    rounded: Boolean,
    block: Boolean,
    dense: Boolean,
    click: Function
  }
};
</script>

<style>
</style>