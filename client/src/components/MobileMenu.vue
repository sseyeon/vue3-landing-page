<!-- src/components/MobileMenu.vue -->
<template>
  <div
    class="absolute top-0 left-0 right-0 mt-16 bg-white border border-gray-200 rounded-lg shadow-lg"
  >
    <MenuItem
      v-for="item in menuItems"
      :key="item.to"
      :to="item.to"
      :label="item.label"
      @click="closeMobileMenu"
      class="block px-4 py-2 text-gray-800 z-50 hover:bg-gray-100 hover:rounded-lg"
    />
  </div>
</template>
  
  <script>
import MenuItem from "./MenuItem.vue";

export default {
  props: {
    menuItems: Array,
  },
  methods: {
    closeMobileMenu() {
      this.$emit("close");
    },
  },
  components: {
    MenuItem,
  },
};
</script>
  