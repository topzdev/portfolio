<template>
  <section class="section section--stacks">
    <div class="container">
      <heading-primary overline="Technology" title="My Current Stacks"></heading-primary>
      <stacks-list></stacks-list>
    </div>
  </section>
</template>

<script>
import StacksList from "@/components/list/StacksList";
export default {
  components: { StacksList }
};
</script>

<style>
</style>