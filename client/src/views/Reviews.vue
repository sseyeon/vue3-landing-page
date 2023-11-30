<!-- src/views/Reviews.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Review"
      subText="빅리더 수료생들의 생생한 후기를 들어보세요."
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
  name: "Reviews",
  components: {
    Header,
    TitleComponent,
    Footer,
  },
};
</script>
      