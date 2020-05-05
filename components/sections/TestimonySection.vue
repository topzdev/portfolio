<template>
  <div class="section section--testimony">
    <div class="container">
      <heading-primary
        overline="testimony"
        title="People I've worked with have said some nice things..."
        :centered="true"
      ></heading-primary>

      <testimony-list></testimony-list>
    </div>
  </div>
</template>

<script>
import TestimonyList from "@/components/list/TestimonyList";
export default {
  components: { TestimonyList }
};
</script>

<style>
</style>