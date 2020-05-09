const inputMixin = {
  inheritAttrs: false,
  props: {
    value: String
  },
  computed: {
    vmodel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};

export default inputMixin;
