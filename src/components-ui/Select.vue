<template>
  <label> Sort by</label>
  <select
    class="custom-select"
    v-model="selectedOption"
    @change="emitSelectedValue"
  >
    <option :value="null" disabled>{{ label }}</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    emitSelectedValue() {
      this.$emit("optionSelected", this.selectedOption);
    },
  },
  emits: ["optionSelected"],
};
</script>

<style scoped>
label {
  font-weight: 800;
}

.custom-select {
  min-width: 200px;
  margin-left: 1em;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #77cedb;
  text-transform: uppercase;
  border-radius: 5px;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

.custom-select:hover,
.custom-select:focus {
  box-shadow: 0.5px 0.5px 3px 1px rgba(99, 229, 252, 0.321);
}
</style>