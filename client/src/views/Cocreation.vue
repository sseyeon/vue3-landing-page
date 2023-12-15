<!-- src/views/Cocreation.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Co-Creation"
      subText="빅리더와 함께한 <br />공공기관 인턴십 프로젝트를 소개합니다."
    />
    <Search />
    <div class="container max-w-screen-lg mt-10 mb-4">
      <PocCard />
      <PocCard />
      <PocCard />
      <PocCard />
    </div>
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import PocCard from "@/components/PocCard.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Cocreation",
  components: {
    Header,
    TitleComponent,
    PocCard,
    Search,
    Footer,
  },
};
</script>
      