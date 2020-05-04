<template>
  <div class="card card--project">
    <div class="card--project__head">
      <img :src="logo" :alt="altLogo" class="card--project__logo" :draggable="false" />
    </div>

    <img :src="image" :alt="altImage" class="card--project__img" :draggable="false" />
  </div>
</template>

<script>
export default {
  computed: {
    altLogo() {
      return this.title + " logo";
    },
    altImage() {
      return this.title + " image";
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    logo: {
      type: String
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>