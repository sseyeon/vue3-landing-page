<!-- src/views/About.vue -->
<template>
  <div>
    <Header />
    <TitleComponent titleText="Introduce" subText="빅리더 혁신 가드닝" />
    <div
      class="mt-4 mb-8"
      :class="{ 'sticky top-[77px] justify-center w-full': isActive }"
    >
      <div class="flex justify-center space-x-4">
        <button
          @click="changeCategory('sec01')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec01' }"
        >
          추진배경
        </button>
        <button
          @click="changeCategory('sec02')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec02' }"
        >
          핵심추진전략
        </button>
        <button
          @click="changeCategory('sec03')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec03' }"
        >
          혁신가드닝
        </button>
        <button
          @click="changeCategory('sec04')"
          :class="{
            'text-blue-500 ': activeCategory === 'sec04',
          }"
        >
          성과
        </button>
      </div>
    </div>
    <div class="container">
      <section ref="sec01" id="#sec01">
        <div class="h-screen">
          <div class="flex justify-center">
            <h1 class="text-4xl font-bold">평범한 청년을 비범한 청년으로</h1>
          </div>
        </div>
      </section>
      <section ref="sec02" id="#sec02">
        <div class="h-screen">섹션2</div>
      </section>
      <section ref="sec03" id="#sec03">
        <div class="h-screen">섹션3</div>
      </section>
      <section ref="sec04" id="#sec04">
        <div class="h-screen">섹션4</div>
      </section>
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
      activeCategory: "sec01",
      isActive: false,
    };
  },
  methods: {
    changeCategory(category) {
      const sectionRef = this.$refs[category];
      sectionRef.scrollIntoView({ behavior: "smooth" });
      this.activeCategory = category;
    },
    handleScroll() {
      this.isActive = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>