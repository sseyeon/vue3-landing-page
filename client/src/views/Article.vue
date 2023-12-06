<!-- src/views/Faq.vue -->
<template>
  <div>
    <Header />
    <div class="container lg:w-9/12">
      <ArticleComponent />
    </div>
    <Footer />
  </div>
</template>
        
        <script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import ArticleComponent from "@/components/ArticleComponent.vue";

export default {
  name: "Article",
  components: {
    Header,
    Footer,
    ArticleComponent,
  },
  data() {
    return {};
  },
};
</script>
        