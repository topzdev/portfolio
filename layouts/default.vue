<template>
  <div>
    <div v-if="$isServer" class="devmode">Currently in development👨‍💻🚧...</div>
    <nuxt />
  </div>
</template>
<script>
export default {};
