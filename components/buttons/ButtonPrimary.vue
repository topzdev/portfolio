<template>
  <div>
    <nuxt-link v-if="link" :to="link" class="btn btn--primary" :class="classes" v-text="label"></nuxt-link>
    <button v-else class="btn btn--primary" :class="classes" v-text="label"></button>
  </div>
</template>

<script>
export default {
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