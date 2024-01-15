<template>
  <button class="custom-button" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style scoped>
.custom-button {
  color: #77cedb;
  font-weight: bold;
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s ease;
  background: none;
}

.custom-button:hover {
  color: #cdf9ff;
}
</style>
