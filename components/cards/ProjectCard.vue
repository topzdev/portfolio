<template>
  <div class="card card--project">
    <a :href="link" target="_blank" class="card--project__head">
      <img :src="logo" :alt="altLogo" class="card--project__logo" :draggable="false" />
    </a>

    <div class="card--project__images">
      <img :src="image" :alt="altImage" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    smolImages() {
      let images = [];
      for (let i = 1; i <= 6; i++)
        images.push(
          require(`@/assets/img/projects/${this.imagePrefix}/${this.imagePrefix}-smol-${i}.jpg`)
        );

      return images;
    },
    altLogo() {
      return this.title + " logo";
    },
    altImage() {
      return this.title + " project images";
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
    imagePrefix: {
      type: String
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style>
</style>