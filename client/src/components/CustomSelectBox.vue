<!-- CustomSelectBox.vue -->
<template>
  <select
    v-model="selectedValue"
    @change="handleChange"
    class="block pl-3 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      class="py-2"
    >
      {{ option.label }}
    </option>
  </select>
</template>
  
  <script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: "2020",
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue;
    },
    selectedValue(newValue) {
      this.$emit("input", newValue); // v-model 지원
    },
  },
  methods: {
    handleChange() {
      this.$emit("change", this.selectedValue);
    },
  },
};
</script>
  
  <style scoped>
/* 추가적인 스타일링은 여기에서 수행할 수 있습니다. */
</style>
  