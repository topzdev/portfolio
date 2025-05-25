<template>
  <div class="list--stack__row"
       :class="{ 'offset-up': offset }">
    <stack-card v-for="(item, idx) in list"
                :key="idx"
                :blank="item.blank"
                :title="item.title"
                :icon="item.icon"
                :link="item.link"
                :style="item.style"></stack-card>
  </div>
</template>

<script>
import StackCard from "@/components/cards/StackCard";
export default {
  components: { StackCard },
  props: {
    stacks: Array,
    offset: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    list() {
      let blank = { blank: true };
      if (this.offset) return [blank, ...this.stacks, blank];
      return [blank, ...this.stacks, blank];
    },
  },
};
</script>

<style></style>