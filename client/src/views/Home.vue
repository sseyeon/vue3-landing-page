<!-- src/views/Home.vue -->
<template>
  <div>
    <Header />
    <!-- 메인 섹션 -->
    <Main class="z-0" />
    <!-- 빅리더 선순환 시스템 섹션 -->
    <section class="bg-gray-50 py-20">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 mt-12">
        <h1 class="text-blue-700 font-semibold text-3xl text-center mb-5">
          빅리더 선순환 가치창출 시스템
        </h1>
        <p class="text-center text-gray-600 mb-2">
          청년에게는 변화와 성장을, 참여기관 및 기업에게는 성과를, <br />
          참여대학에게는 실적을, 지자체에게는 성공모델을 <br />
          잇(IT)는 혁신 가드닝 허브 역할을 제공
        </p>
        <div class="flex justify-center flex-wrap gap-2 mb-4">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            자세히 보기
            <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
          </a>
        </div>
        <!-- <p class="mb-12">
          <img
            src="../assets/images/bigleader-hub.png"
            alt=""
            style="width: 800px; height: auto"
          />
        </p> -->
        <p class="mb-12">
          <img src="../assets/images/bigleader-growth.png" alt="" />
        </p>
      </div>
    </section>
    <!-- 기업 소개 섹션 -->

    <!-- <Slider /> -->
    <section class="py-20 mt-10">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-blue-700 font-semibold text-3xl text-center">
          좋은 프로젝트가 <br />
          좋은 취업을 결정합니다.
        </h1>
        <p class="text-center text-gray-600 mt-4">
          국내 최고 공공기관, 대기업 및 미래산업 선도기업과 함께 진행하는 현장
          파견 프로젝트
        </p>
      </div>
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16"
      >
        <EnterpriseList />
        <EnterpriseList />
        <EnterpriseList />
        <EnterpriseList />
        <EnterpriseList />
        <EnterpriseList />
      </div>
    </section>
    <!-- FAQ 섹션 -->
    <FAQ />
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import VideoList from "@/components/VideoList.vue";
import EnterpriseList from "@/components/EnterpriseList.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/Footer.vue";
import Swiper from "@/components/Swiper.vue";
// import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Swiper,
    VideoList,
    EnterpriseList,
    FAQ,
    // Slider,
    Footer,
  },
};
</script>
  