<template>
  <div class="list--footer">
    <div class="list--footer__title" v-text="title" />

    <ul>
      <footer-list-item
        v-for="(item, idx) in links"
        :key="idx"
        :label="item.label"
        :icon="item.icon"
        :link="item.link"
      />
    </ul>
  </div>
</template>

<script>
import FooterListItem from "@/components/list/FooterListItem";
export default {
  components: { FooterListItem },
  props: {
    title: String,
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>