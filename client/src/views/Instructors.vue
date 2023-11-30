<!-- src/views/Instructors.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Teaching"
      subText="각 분야 국내 최고 수준의 전문가들과 함께 합니다."
    />
    <div class="container h-screen"></div>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Instructors",
  components: {
    Header,
    TitleComponent,
    Footer,
  },
};
</script>
  