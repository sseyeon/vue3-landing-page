<!-- src/views/Projects.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Project"
      subText="빅리더 수료생들이 진행한 프로젝트를 소개합니다."
    />
    <div class="container h-screen"></div>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import CardList from "@/components/CardList.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Projects",
  components: {
    Header,
    TitleComponent,
    CardList,
    Footer,
  },
};
</script>
  