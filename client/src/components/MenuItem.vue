<!-- src/components/MenuItem.vue -->
<template>
  <router-link
    :to="to"
    class="ml-4 px-2 py-1 text-gray-800 hover:bg-gray-100 rounded-lg"
    >{{ label }}</router-link
  >
</template>
  
  <script>
export default {
  props: {
    to: String,
    label: String,
  },
};
</script>
  