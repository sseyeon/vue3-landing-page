<!-- src/views/Projects.vue -->
<template>
  <div>
    <Header />
    <CardList />
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import CardList from "@/components/CardList.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Projects",
  components: {
    Header,
    CardList,
    Footer,
  },
};
</script>
  