<!-- src/components/FAQ.vue -->
<template>
  <!-- FAQ Items -->
  <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
    <!-- FAQ Item -->
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <div
        @click="toggleAnswer(index)"
        class="flex items-center border-b py-4 cursor-pointer transition duration-300 ease-in-out"
      >
        <span class="flex-1 font-medium">{{ faq.question }}</span>
        <font-awesome-icon
          :icon="['fas', faq.expanded ? 'chevron-up' : 'chevron-down']"
          class="cursor-pointer"
        />
      </div>
      <!-- Answer -->
      <div
        v-show="faq.expanded"
        class="text-gray-600 mt-2 transition duration-300 ease-in-out"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "FAQ",
  props: {
    faqs: Array, // Add this prop
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].expanded = !this.faqs[index].expanded;
    },
  },
};
</script>
  