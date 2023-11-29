<!-- src/views/About.vue -->
<template>
  <div>
    <Header />
    <TitleComponent titleText="Introduce" subText="빅리더 혁신 가드닝" />
    <div class="container mt-4 mb-8">
      <div class="flex justify-center space-x-4">
        <button
          @click="changeCategory('all')"
          :class="{ 'text-blue-500 ': activeCategory === 'all' }"
        >
          추진배경
        </button>
        <button
          @click="changeCategory('press')"
          :class="{ 'text-blue-500 ': activeCategory === 'press' }"
        >
          핵심추진전략
        </button>
        <button
          @click="changeCategory('vision')"
          :class="{ 'text-blue-500 ': activeCategory === 'vision' }"
        >
          혁신가드닝
        </button>
        <button
          @click="changeCategory('announcement')"
          :class="{
            'text-blue-500 ': activeCategory === 'announcement',
          }"
        >
          성과
        </button>
      </div>
    </div>
    <div class="container">
      <div
        class="bg-blue-900 text-white p-10 font-semibold text-3xl text-center"
      >
        선한 영향력과 혁신으로 세상을 이롭게 하라
      </div>
      <div class="h-screen"></div>
    </div>

    <Footer />
  </div>
</template>
    
    <script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer,
    TitleComponent,
  },
  data() {
    return {
      activeCategory: "press",
    };
  },
  methods: {
    changeCategory(category) {
      this.activeCategory = category;
    },
  },
};
</script>
    