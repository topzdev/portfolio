<template>
  <div class="card card--project">
    <div class="card--project__head">
      <img :src="logo" :alt="altLogo" class="card--project__logo" :draggable="false" />
    </div>

    <div class="card--project__images">
      <div class="card--project__images-column" :draggable="false">
        <img v-for="(item, idx) in smolImages.slice(0,3)" :key="idx" :src="item" alt />
      </div>
      <div class="card--project__images-column">
        <img
          v-for="(item, idx) in smolImages.slice(3,6)"
          :key="idx"
          :src="item"
          alt
          :draggable="false"
        />
      </div>
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
    imagePrefix: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>