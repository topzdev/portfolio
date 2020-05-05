<template>
  <div class="inp inp--primary" :class="{'active': active, 'textarea': textarea}">
    <label class="inp--primary__label" :for="id">{{label}}</label>
    <input
      v-if="!textarea"
      class="inp--primary__input"
      @input="listenInput"
      v-bind="$attrs"
      :type="type"
      :id="id"
    />

    <textarea v-else cols="30" rows="10" :id="id" class="inp--primary__input"></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  methods: {
    listenInput: function(e) {
      if (e.target.value.length !== 0) return (this.active = true);
      else return (this.active = false);
    }
  },
  data() {
    return {
      active: false
    };
  },
  props: {
    label: String,
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    textarea: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>