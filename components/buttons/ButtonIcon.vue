<template>
  <button class="btn btn--icon">
    <base-icon :icon="icon"></base-icon>
  </button>
</template>

<script>
export default {
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