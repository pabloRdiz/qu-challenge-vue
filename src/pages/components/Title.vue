<template>
  <div class="title-container">
    <img
      class="title-logo"
      src="https://www.qubeyond.com/wp-content/uploads/2021/10/QU-logo.png"
      alt="QUBEYOND"
    />
    <div>
      <h1 class="title" aria-label="{{title}}">{{ title }}</h1>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  gap: 1em;
}
.title-logo {
  height: 50px;
}
.title {
  background-clip: text;
  background: linear-gradient(to right, #ff0f23 0, #ea0f22 20%, #77cedb 100%);
  font-size: 56px;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>