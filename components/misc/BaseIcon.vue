<template>
  <div>
    <i :class="prefix"></i>
  </div>
</template>
<script>
export default {
  computed: {
    prefix: function() {
      return "icon-" + this.icon;
    }
  },

  props: {
    icon: {
      type: String,
      required: false
    }
  }
};
</script>

<style>
</style>