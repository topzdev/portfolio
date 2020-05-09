<template>
  <button v-bind="$attrs" :type="type" class="btn btn--icon">
    <base-icon :icon="icon"></base-icon>
  </button>
</template>

<script>
import inputMixin from "@/mixins/input";
export default {
  mixins: [inputMixin],
  props: {
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String
    }
  }
};
</script>

<style>
</style>