<template>
  <li>
    <a :href="link" rel="noopener" target="_blank" class="list--footer__link">
      <span class="list--footer__icon">
        <component :is="iconComponent"></component>
      </span>
      <div class="list--footer__label" v-text="label" />
    </a>
  </li>
</template>

<script>
export default {
  computed: {
    iconName: function () {
      return this.label + " icon";
    },

    iconComponent() {
      return () => import(`../icons/${this.icon}`);
    },
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style>
</style>