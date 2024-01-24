<!-- src/views/Apply.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Apply"
      subText="빅리더와 함께할 인재를 모집합니다. <br />지금 바로 지원하세요!"
    />
    <div
      class="container mt-8 mb-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="flex justify-center flex-wrap gap-2">
        <a
          href="https://docs.google.com/forms/d/1F6786P34HE7Iy86Bp-dTttu_pMSmef47zfLaFJ9tYB8/viewform?edit_requested=true"
          target="_blank"
          class="btn btn-outline-primary"
        >
          지원하기
          <font-awesome-icon :icon="['fas', 'fa-paper-plane']" />
        </a>
      </div>
      <div
        class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
      >
        <p class="text-center mb-8 text-2xl mt-4 font-medium">
          <font-awesome-icon
            :icon="['fas', 'fa-paper-plane']"
            class="text-blue-700 mr-2"
          />
          청년 AI 혁신가 양성 프로그램
        </p>
        <img src="@/assets/images/2023-posters/2023_Poster_2.jpg" />
      </div>
      <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-24">
        <p class="text-center mb-8 text-2xl mt-4 font-medium">
          <font-awesome-icon
            :icon="['fas', 'fa-paper-plane']"
            class="text-blue-700 mr-2"
          />
          교육기간 및 내용
        </p>
        <ScheduleCard />
      </div>
      <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12">
        <!-- <p class="text-center mb-8 text-2xl mt-4 font-medium">
          <font-awesome-icon
            :icon="['fas', 'fa-paper-plane']"
            class="text-blue-700 mr-2"
          />
          교육기간 및 내용
        </p> -->
        <div
          class="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-screen-lg mt-4 mb-16"
        >
          <div
            class="bg-gray-100 flex flex-col items-center text-center rounded-lg p-4"
          >
            <div class="m-2 font-bold text-xl text-blue-700">01</div>
            <span class="text-xl m-2"
              ><font-awesome-icon :icon="['fas', 'fa-laptop']"
            /></span>
            <h3 class="mb-2 text-lg font-semibold">온라인 교육</h3>
            <p class="text-gray-600">
              6.1 ~ 6.21 (3주) <br /><br />
              비실시간 동영상 교육 진행 <br />(파이썬, 통계학, 선형대수학 등)
            </p>
          </div>
          <div
            class="bg-blue-100 flex flex-col items-center text-center rounded-lg p-4"
          >
            <div class="m-2 font-bold text-xl">02</div>
            <span class="text-xl m-2"
              ><font-awesome-icon :icon="['fas', 'fa-pencil-ruler']"
            /></span>
            <h3 class="mb-2 text-lg font-semibold">이론실습 집체대면 교육</h3>
            <p class="text-gray-600">
              6.23 ~ 8.25 (9주) <br /><br />
              파이썬기초, 시각화(Tableau, Power BI), SQL, Crawling, RPA,
              머신러닝, 자연어처리, CHAT GPT, 딥러닝, 컴퓨터 비젼, 캐글,
              알고리즘, 디지털 포렌식, AI 전략과 프로젝트 기획 등
            </p>
          </div>
          <div
            class="bg-gray-100 flex flex-col items-center text-center rounded-lg p-4"
          >
            <div class="m-2 font-bold text-xl text-blue-700">03</div>
            <span class="text-xl m-2"
              ><font-awesome-icon :icon="['fas', 'fa-briefcase']"
            /></span>
            <h3 class="mb-2 text-lg font-semibold">Co-Creation Project</h3>
            <p class="text-gray-600">
              8.27 ~ 12.1 (14주)<br /><br />현장파견 프로젝트 기간 동안 프로젝트
              문제 해결을 위한 심화학습 동영상 콘텐츠 제공
            </p>
          </div>
        </div>
      </div>
      <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-24">
        <p class="text-center mb-8 text-2xl mt-4 font-medium">
          <font-awesome-icon
            :icon="['fas', 'fa-paper-plane']"
            class="text-blue-700 mr-2"
          />
          상세 커리큘럼
        </p>
        <curriculum-details />
      </div>
    </div>
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue"
import TitleComponent from "@/components/TitleComponent.vue"
import ScheduleCard from "@/components/ScheduleCard.vue"
import Footer from "@/components/layout/Footer.vue"
import CurriculumDetails from "@/components/CurriculumDetails.vue"

export default {
  name: "Apply",
  components: {
    Header,
    TitleComponent,
    ScheduleCard,
    Footer,
    CurriculumDetails,
  },
}
</script>
      