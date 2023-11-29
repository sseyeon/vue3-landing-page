<!-- src/views/Faq.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="FAQ"
      subText="빅리더의 자주 묻는 질문을 확인하세요"
    />
    <section class="min-h-screen">
      <FAQ />
    </section>
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue";
import FAQ from "@/components/FAQ.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Faq",
  components: {
    Header,
    FAQ,
    TitleComponent,
    Footer,
  },
};
</script>
      