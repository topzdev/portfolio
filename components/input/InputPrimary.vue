<template>
  <div class="inp inp--primary" :class="{'active': active}">
    <label class="inp--primary__label" :for="id">{{label}}</label>
    <input
      v-if="!textarea"
      v-model="vmodel"
      class="inp--primary__input"
      v-bind="$attrs"
      :type="type"
      @input="notEmpty"
      :id="id"
    />

    <textarea
      v-bind="$attrs"
      v-model="vmodel"
      v-else
      cols="30"
      rows="10"
      @input="notEmpty"
      :id="id"
      class="inp--primary__input"
    ></textarea>
  </div>
</template>

<script>
import mixin from "@/mixins/input";
export default {
  mixins: [mixin],
  methods: {
    notEmpty(e) {
      this.active = e.target.value.length ? true : false;
    }
  },
  data() {
    return {
      active: this.value.length ? true : false
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