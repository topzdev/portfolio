<template>
  <button v-bind="$attrs" type="button" class="btn btn--icon">
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
    }
  }
};
</script>

<style>
</style>