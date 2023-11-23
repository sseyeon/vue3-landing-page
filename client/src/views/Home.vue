<!-- src/views/Home.vue -->
<template>
  <div>
    <Header />
    <!-- 메인 섹션 -->
    <Main />
    <!-- 유튜브 소개 섹션 -->
    <section class="bg-gray-50 py-20 mt-20 lg:mt-60">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-blue-700 font-semibold text-3xl text-center">
          평범에서 비범으로
        </h1>
        <p class="text-center text-gray-600 mt-4">
          2023 빅리더 프로젝트 인턴십, 많은 지원과 관심에 감사드립니다.
        </p>
      </div>
      <VideoList />
    </section>
    <!-- 기업 소개 섹션 -->
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
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import VideoList from "@/components/VideoList.vue";
import EnterpriseList from "@/components/EnterpriseList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    VideoList,
    EnterpriseList,
    Footer,
  },
};
</script>
  