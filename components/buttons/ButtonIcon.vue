<template>
  <button v-bind="$attrs" :type="type" class="btn btn--icon">
    <component :is="iconComponent"></component>
  </button>
</template>

<script>
import inputMixin from "@/mixins/input";
export default {
  mixins: [inputMixin],

  computed: {
    iconComponent() {
      return () => import(`../icons/${this.icon}`);
    },
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style>
</style>