<!-- src/views/Instructors.vue -->
<template>
  <div>
    <Header />
    <CardList />
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Instructors",
  components: {
    Header,
    CardList,
    Footer,
  },
};
</script>
  