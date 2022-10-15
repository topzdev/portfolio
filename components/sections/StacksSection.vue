<template>
  <section id="stacks" class="section section--stacks">
    <div class="container">
      <heading-primary
        overline="Technology"
        title="My Current Stacks"
      ></heading-primary>

      <client-only>
        <stacks-list></stacks-list>
      </client-only>
    </div>
  </section>
</template>

<script>
import StacksList from "@/components/list/StacksList";
export default {
  components: { StacksList },
};
</script>

<style>
</style>