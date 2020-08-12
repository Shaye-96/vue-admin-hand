<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) return `svg-icon ${this.className}`;
      return `svg-icon`;
    }
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  fill: currentColor; // currentColor css3当前文字颜色的值
  font-size: 18px;
  // margin-right: 10px;/
}
</style>