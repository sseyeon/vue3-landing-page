<!-- src/views/Apply.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Apply"
      subText="빅리더와 함께할 인재를 모집합니다. <br />지금 바로 지원하세요!"
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
  name: "Apply",
  components: {
    Header,
    TitleComponent,
    Footer,
  },
};
</script>
      