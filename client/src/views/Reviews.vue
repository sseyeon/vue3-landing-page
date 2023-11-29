<!-- src/views/Reviews.vue -->
<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Reviews",
  components: {
    Header,
    Footer,
  },
};
</script>
      