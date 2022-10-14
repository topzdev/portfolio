<template>
  <button v-bind="$attrs" class="btn btn--primary" :class="classes">
    <img v-if="loading" class="btn__loading" src="@/assets/img/loading.gif" alt="loading..." loading="lazy"/>
    <span>{{label}}</span>
  </button>
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
    click: Function,
    loading: Boolean
  }
};
</script>

<style>
</style>