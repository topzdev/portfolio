<template>
  <div class="card card--testimony">
    <div class="card--testimony__image">
      <img :src="image" :alt="alt" :draggable="false" />
    </div>
    <div class="card--testimony__main">
      <div class="card--testimony__stated" v-text="quoted" />
      <div class="card--testimony__told">
        <div class="card--testimony__told-name" v-text="name" />
        <div class="card--testimony__told-position" v-text="position" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    alt() {
      return this.name + " image";
    },
    quoted() {
      return '"' + this.testimony + '"';
    }
  },
  props: {
    image: {
      type: String,
      required: true
    },
    testimony: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>