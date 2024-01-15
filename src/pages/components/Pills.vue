<template>
  <div>
    <span :class="textClass" :style="{ color: colorStyle }"
      >◼︎ <span :aria-label="value" class="text-color">{{ value }}</span></span
    >
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    colors: Object,
  },
  computed: {
    textClass() {
      return {
        text: true,
        "text-uppercase": true,
        "text-size": true,
        "text-spacing": true,
      };
    },
    colorStyle() {
      return this.colors[this.value];
    },
  },
};
</script>

<style scoped>
.text {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1em;
}
.text-color {
  color: #fafafa;
}
</style>
